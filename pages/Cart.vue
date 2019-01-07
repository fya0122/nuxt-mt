<template>
  <div class="page-cart">
    <el-row>
      <el-col
        :span="24"
        class="m-cart">
        <list/>
        <p>应付金额： <em class="money">￥{{ total }}</em></p>
        <div class="post">
          <el-button
            type="primary"
            @click="submit">提交订单</el-button>
        </div>
      </el-col>
      <el-col
        :span="24"
        class="empty">购物车为空</el-col>
    </el-row>
  </div>
</template>
<script>
import list from '~/components/cart/List.vue'
export default {
  name: 'Cart',
  components: {
    list
  },
  data () {
    return {
      cart: []
    }
  },
  computed: {
    total () {
      let total = 0
      this.cart.forEach(item => {
        total += item.price * item.count
      })
      return total
    }
  },
  methods: {
    submit () {
      console.log(123)
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/cart/index.scss";
</style>
