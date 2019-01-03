<template>
  <div class="page-product">
    <el-row class="page-product">
      <el-col :span="19">
        <crumbs :keyword="keyword"/>
        <categroy
          :types="types"
          :areas="areas"/>
        <list :list="list"/>
      </el-col>
      <el-col :span="5">地图</el-col>
    </el-row>
  </div>
</template>
<script>
import Crumbs from '~/components/products/Crumbs.vue'
import Categroy from '~/components/products/Categroy.vue'
import List from '~/components/products/List.vue'
export default {
  name: 'Products',
  components: {
    Crumbs,
    Categroy,
    List
  },
  data () {
    return {
      keyword: '',
      types: [],
      areas: [],
      list: []      
    }
  },
  // 下面是ssr，直接在vue文件中写了，懒得去vuex写了
  async asyncData (ctx) {
    let keyword = ctx.query.keyword
    let city = ctx.store.getters.position.city
    const res_types_and_areas = ctx.$axios.get('/categroy/crumbs', {
      params: {
        city: city
      }
    })
    return {
      keyword: keyword
    }
    // const res_keyword = await ctx.$axios.get('/search/resultsByKeywords', {
    //   params: {
    //     keyword: keyword,
    //     city: city
    //   }
    // })
    // if (res_keyword.status === 200) {
    //   return {
    //   }
    // }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/products/index.scss";
</style>