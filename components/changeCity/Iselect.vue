<template>
  <div class="m-isselect">
    <span class="name">按省份选择</span>
    <el-select
      v-model="pvalue"
      placeholder="省份">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    <el-select
      v-model="cvalue"
      :disabled="!city.length"
      placeholder="城市">
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"/>
  </div>
</template>
<script>
export default {
  name: 'Iselect',
  data () {
    return {
      pvalue: '',
      province: [],
      cvalue: '',
      city: [],
      input: '', // 远程搜索
      timer: null,
      citys: [] //全国的
    }
  },
  watch: {
    async pvalue (newVal, oldVal) {
      if (newVal && oldVal !== newVal) {
        const res = await this.$axios.get(`/geo/province/${newVal}`)
        if (res.status === 200) {
          this.city = res.data.city.map((item) => {
            return {
              value: item.id,
              label: item.name
            }
          })
          this.cvalue = ''
        }
      }
    }
  },
  async created () {
    // 请求所有的省份
    const res = await this.$axios.get('/geo/province')
    if (res.status === 200) {
      this.province = res.data.province.map((item) => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }
  },
  methods: {
    querySearchAsync (query, cb) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(async () => {
        if (this.citys.length) {
          cb(this.citys.filter(item => item.value.indexOf(query) > -1))
        } else {
          const res = await this.$axios.get('/geo/city')
          if (res.status === 200) {
            this.citys = res.data.city.map((item) => {
              return {
                value: item.name
              }
            })
            cb(this.citys.filter(item => item.value.indexOf(query) > -1))
          } else {
            cb([])
          }
        }
      }, 300)
    },
    handleSelect (item) {
      console.log(item.value)
      console.log('此处是点击跳转')
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/changeCity/iselect.scss";
</style>