<template>
  <dl class="m-sum-card">
    <dt>
      <h1>{{ product.name }}</h1>
      <el-rate
        v-model="rate"
        disabled/>
      <span>{{ Number(product.biz_ext.rating)||rate }}分</span>
      <span>人均￥{{ Number(product.biz_ext.cost) }}</span>
      <ul>
        <li @click="openMap(product.location)">地址：{{ product.address }}</li>
        <li>电话：{{ product.tel }}</li>
      </ul>
    </dt>
    <dd>
      <el-carousel
        height="214px"
        indicator-position="none">
        <el-carousel-item
          v-for="(item, index) in product.photos"
          :key="index">
          <h3>
            <img
              :src="item.url"
              :alt="item.title"
              width="100%"
              height="100%">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </dd>
  </dl>
</template>
<script>
export default {
  name: 'Summary',
  props: {
  	product: {
      type: Object,
      default () {
        return {}
      }
  	}
  },
  computed: {
    rate () {
      return Number(this.product.biz_ext.rating) || Math.floor(Math.random() * 5)
    }
  },
  created () {
    console.log(this.product)
  },
  methods: {
    openMap () {
      console.log('abc')
    }
  }
}
</script>
