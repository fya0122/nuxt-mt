<template>
  <div class="m-products-list">
    <!-- 这里是智能排序这块 -->
    <dl>
      <dd
        v-for="item in nav"
        :key="item.name"
        :class="[item.name, item.acitve ? 's-nav-active': '']"
        @click="navSelect">{{ item.txt }}</dd>
    </dl>
    <!-- 这里是下面的列表呢 -->
    <ul>
      <product
        v-for="(item, index) in list"
        :key="index"
        :meta="item"/>
    </ul>
  </div>
</template>
<script>
import Product from './Product.vue'
export default {
  name: 'ListProducts',
  components: {
    Product
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      nav: [
        {
          name: 's-default',
          txt: '智能排序',
          acitve: true
        }, {
          name: 's-price',
          txt: '价格最低',
          active: false
        }, {
          name: 's-visit',
          txt: '人气最高',
          active: false
        }, {
          name: 's-comment',
          txt: '评价最高',
          active: false
        }
      ]
    }
  },
  mounted () {
    console.log('>>> list >>> mounted')
    console.log(this.list)
  },
  methods: {
    navSelect () {
      console.log('this is navSelect')
    }
  }
}
</script>
