<template>
  <div class="page-cart">
    <el-row>
      <el-col
        v-if="cart.length"
        :span="24"
        class="m-cart">
        <list :cartdata="cart"/>
        <p>应付金额： <em class="money">￥{{ total }}</em></p>
        <div class="post">
          <el-button
            type="primary"
            @click="submit">提交订单</el-button>
        </div>
      </el-col>
      <el-col
        v-else
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
      orderid: ''
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
  // ssr
  async asyncData (ctx) {
    const res = await ctx.$axios.post('/cart/getCart', {
      id: ctx.query.id
    })
    if (res.status === 200 && res.data.code === 0 && res.data.data.name) {
      return {
        cart: [{
          name: res.data.data.name,
          price: res.data.data.price,
          count: 1
        }],
        cartNo: ctx.query.id
      }
    }
  },
  methods: {
    async submit () {
      const res = await this.$axios.post('/order/createorder', {
        id: this.cartNo,
        price: this.cart[0].price,
        count: this.cart[0].count
      })
      if (res.status === 200 && res.data.id) {
        alert('生成订单成功!')
        window.location.href = '/order'
      } else {
        alert('系统错误!')
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/cart/index.scss";
.el-table /deep/ .el-table_1_column_3 {
  text-align: center;
}
</style>
