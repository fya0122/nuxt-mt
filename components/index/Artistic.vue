<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部
      </dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐
      </dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA
      </dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出
      </dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游
      </dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="(item, index) in cur"
        :key="index">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Artistic',
  data () {
    return {
      kind: 'all',
      list: {
        all: [],
        part: [],
        spa: [],
        movie: [],
        travel: []
      },
      city: '',
      timer: null
    }
  },
  computed: {
    cur () {
      return this.list[this.kind]
    }
  },
  async created () {
    if (this.$store.getters.position.city) {
      this.city = this.$store.getters.position.city.replace('市', '')
    }
    const res = await this.$axios.get('/search/resultsByKeywords', {
      params: {
        keyword: '景点',
        city: this.city
      }
    })
    if (res.status === 200 && res.data.count > 0) {
      let r = res.data.pois.filter(item => item.photos.length).map((item) => {
        return {
          title: item.name,
          pos: item.type.split(';')[0],
          price: item.biz_ext.cost || '暂无',
          img: item.photos[0].url,
          url: 'http://www.baidu.com'
        }
      })
      this.list['all'] = r.slice(0, 9)
    } else {
      this.list['all'] = []
    }
  },
  methods: {
    over (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.city) {
        return
      } else {
        this.timer = setTimeout(async () => {
          const dom = e.target // dom
          const tag = dom.tagName.toLowerCase() // tag，比如dd
          if (tag === 'dd') {
            this.kind = dom.getAttribute('kind') // 默认是all
            let keyword = dom.getAttribute('keyword')
            const res = await this.$axios.get('/search/resultsByKeywords', {
              params: {
                keyword: keyword,
                city: this.city
              }
            })
            console.log(res)
            if (res.status === 200 && res.data.count > 0) {
              let r = res.data.pois.filter(item => item.photos.length).map((item) => {
                return {
                  title: item.name,
                  pos: item.type.split(';')[0],
                  price: item.biz_ext.cost || '暂无',
                  img: item.photos[0].url,
                  url: 'http://www.baidu.com'
                }
              })
              this.list[this.kind] = r.slice(0, 9)
            } else {
              this.list[this.kind] = []
            }
          }
        }, 300)
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/index/artistic.scss";
</style>