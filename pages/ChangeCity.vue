<template>
  <div class="page-changeCity">
    <el-row :span="24">
      <el-col>
        <iselect/>
      </el-col>
    </el-row>
    <el-row :span="24">
      <el-col>
        <hot/>
      </el-col>
    </el-row>
    <el-row :span="24">
      <el-col>3</el-col>
    </el-row>
  </div>
</template>
<script>
import Iselect from './../components/changeCity/Iselect.vue'
import Hot from './../components/changeCity/Hot.vue'
export default {
  name: 'ChangeCity',
  components: {
    Iselect,
    Hot
  }
}
</script>
