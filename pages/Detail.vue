<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <crumbs
          :keyword="keyword"
          :type="type"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <summa :product="product"/>
      </el-col>
    </el-row>
    <el-row class="m-title">
      <el-col :span="24">
        <h3>商家团购及优惠</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <list :list="list"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Crumbs from './../components/detail/Crumbs.vue'
import Summa from './../components/detail/Summary.vue'
import List from './../components/detail/List.vue'
export default {
  name: 'Detail',
  components: {
    Crumbs,
    Summa,
    List
  },
  data () {
    return {
      keyword: '',
      type: '',
      product: {},
      list: []
    }
  },
  async asyncData (ctx) {
    let { keyword, type } = ctx.query
    const city = ctx.store.getters.position.city
    const res = await ctx.$axios.get('/search/products', {
      params: {
        keyword: keyword,
        type: type,
        city: city
      }
    })
    if (res.status === 200) {
      return {
        keyword,
        type,
        login: res.data.login,
        product: res.data.product,
        list: res.data.more
      }
    } else {
      return {
        keyword,
        type,
        login: false,
        product: {},
        list: []
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/detail/index.scss";
</style>