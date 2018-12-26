<template>
  <el-row
    :gutter="0"
    class="m-header">
    <el-col :span="5"><geo/></el-col>
    <el-col :span="5"><user/></el-col>
    <el-col :span="14"><navbar/></el-col>
  </el-row>
</template>
<script>
import Geo from './Geo.vue'
import User from './User.vue'
import Navbar from './Nav.vue'
export default {
  name: 'Topbar',
  components: {
    Geo,
    User,
    Navbar
  }
}
</script>
<style lang="scss">
@import "~/assets/css/public/layout.scss";
@import "~/assets/css/public/header/index.scss";
</style>
