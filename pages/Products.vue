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
      areas: [],
      types: [],
      list: []      
    }
  },
  // 下面是ssr，直接在vue文件中写了，懒得去vuex写了
  async asyncData (ctx) {
    let keyword = ctx.query.keyword
    let city = ctx.store.getters.position.city
    // 1
    const res_categroy = await ctx.$axios.get('/categroy/crumbs', {
      params: {
        city: city
      }
    })
    let new_areas = []
    let new_types = []
    if (res_categroy.status === 200) {
      new_areas = res_categroy.data.areas.filter(item => item.type !== '').slice(0, 5)
      new_types = res_categroy.data.types.filter(item => item.type !== '').slice(0, 5)
    }
    // 2
    const res_list = await ctx.$axios.get('/search/resultsByKeywords', {
      params: {
        keyword: keyword,
        city: city
      }
    })
    if (res_list.status === 200 && res_list.data.count > 0) {
      return {
        keyword: keyword,
        areas: new_areas,
        types: new_types,
        list: res_list.data.pois.filter(item => item.photos.length).map((item) => {
          return {
            type: item.type,
            img: item.photos[0].url,
            name: item.name,
            comment: Math.floor(Math.random() * 10000),
            rate: Number(item.biz_ext.rating),
            price: Number(item.biz_ext.cost),
            scene: item.tag,
            tel: item.tel,
            status: '可订明日',
            location: item.location,
            module: item.type.split(';')[0]
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/products/index.scss";
</style>