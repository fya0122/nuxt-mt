<template>
  <li
    v-if="obj.photos.length"
    class="m-detail-item">
    <dl class="section">
      <dd>
        <img
          :src="obj.photos[0].url"
          :alt="obj.photos[0].title">
      </dd>
      <dd>
        <h4>{{ obj.name }}</h4>
        <div>
          <span v-if="obj.biz_ext && obj.biz_ext.ticket_ordering">剩余：{{ Number(obj.biz_ext.ticket_ordering) }}</span>
          <span v-if="obj.deadline">截止日期：{{ obj.deadline }}</span>
        </div>
        <div>
          <span class="price">{{ Number(obj.biz_ext.cost) }}</span>
          <span>门店价{{ Number(obj.biz_ext.cost) }}</span>
        </div>
      </dd>
      <dd>
        <el-button
          type="warning"
          round
          @click="createCart">立即抢购
        </el-button>
      </dd>
    </dl>
  </li>
</template>
<script>
export default {
  name: 'Item',
  props: {
    obj: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    async createCart () {
      const res = await this.$axios.post('/cart/create', {
        params: {
          id: Math.random().toString().slice(3, 9),
          detail: {
            name: this.obj.name,
            price: this.obj.biz_ext.cost,
            imgs: this.obj.photos
          }
        }
      })
      if (res.status === 200) {
        console.log(res.data)
        alert('已经加入购物车成功了')
        window.location.href = `/cart/?id=${res.data.id}`
      } else {
        console.log('error.')
      }
    }
  }
}
</script>
