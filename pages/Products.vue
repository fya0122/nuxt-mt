<template>
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
      list: [],
      types: [],
      areas: [],
      keyword: '你好啊'
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/products/index.scss";
</style>