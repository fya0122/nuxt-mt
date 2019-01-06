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
        <p>
          <span v-if="obj.biz_ext && obj.biz_ext.ticket_ordering">剩余：{{ Number(obj.biz_ext.ticket_ordering) }}</span>
          <span v-if="obj.deadline">截止日期：{{ obj.deadline }}</span>
        </p>
        <p>
          <span class="price">{{ Number(obj.biz_ext.cost) }}</span>
          <span>门店价{{ Number(obj.biz_ext.cost) }}</span>
        </p>
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
    createCart () {
      console.log(123)
    }
  }
}
</script>
