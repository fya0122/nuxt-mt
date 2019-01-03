<template>
  <div class="">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd
        v-for="item in list"
        :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      v-for="item in block"
      :key="item.title"
      class="m-categroy-section">
      <dt :id="'city-' + item.title">{{ item.title }}</dt>
      <dd>
        <span
          v-for="item in item.city"
          :key="item">{{ item }}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
import pyjs from 'js-pinyin'
export default {
  name: 'Categroy',
  data () {
  	return {
  		list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      block: []
  	}
  },
  async created () {
    console.log(pyjs.getFullChars('北京市').toLocaleLowerCase().slice(0, 1))
    let blocks = []
    const res = await this.$axios.get('/geo/city')
    if (res.status === 200) {
      let p
      let c
      let d = {}
      res.data.city.forEach(item => {
        // 其实pyjs.getFullChars('北京市') === BeiJingShi
        // 紧接着BeiJingShi.toLocaleLowerCase() === beijingshi
        // 紧接着beijingshi.slice(0, 1) 那么此刻p便是"b"了
        p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
        // 此刻 "b".charCodeAt(0) === 98
        // 字母"a".charCodeAt(0) === 97 z.charCodeAt(0) === 122 所以a~z 即>96和<123
        c = p.charCodeAt(0)
        if (c > 96 && c < 123) {
          if (!d[p]) {
            d[p] = []
          }
          // 生成map
          d[p].push(item.name)
        }
      })
      for (let [k, v] of Object.entries(d)) {
        blocks.push({
          title: k.toUpperCase(),
          city: v
        })
      }
      // 排序
      blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
      this.block = blocks
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/changeCity/categroy.scss";
</style>
