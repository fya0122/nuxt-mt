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
    <el-row>
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
  }
}
</script>
<style lang="scss">
@import "~/assets/css/detail/index.scss";
</style>