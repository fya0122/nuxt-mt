<template>
  <el-table
    :data="cartdata"
    style="width: auto">
    <el-table-column
      prop="name"
      label="项目"
      width="532"/>
    <el-table-column
      prop="price"
      label="单价"
      width="132"/>
    <el-table-column
      prop="count"
      label="数量"
      width="212">
      <template slot-scope="scope">
        <el-input-number
          v-model="scope.row.count"
          :min="0"/>
      </template>
    </el-table-column>
    <el-table-column label="总价">
      <template slot-scope="scope">
        <div class="">
          {{ scope.row.price * scope.row.count }}
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'ListCart',
  props: {
    cartdata: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      tableData: [{
        name: '名字',
        price: '189',
        count: 10
      }]
    }
  },
  created () {
    console.log(this.cartdata)
  }
}
</script>
