<template>
  <div class="m-crumbs">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $store.getters.position.city.replace('市', '') }}美团</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">{{ $store.getters.position.city.replace('市', '') }}{{ type }}</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">{{ $store.getters.position.city.replace('市', '') }}{{ decodeURIComponent(keyword) }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: 'CrumbsDetail'
}
</script>
