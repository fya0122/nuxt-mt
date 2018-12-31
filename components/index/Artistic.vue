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
        all: [{
          img: '//p1.meituan.net/poi/bd5047c33720f043c04edfc98740d5c488064.jpg@368w_208h_1e_1c',
          title: 'DQ（天坛路）',
          pos: '森林幻想（小）1份',
          price: '118'
        }, {
          img: '//p1.meituan.net/poi/bd5047c33720f043c04edfc98740d5c488064.jpg@368w_208h_1e_1c',
          title: 'DQ（天坛路）',
          pos: '森林幻想（小）1份',
          price: '118'
        }, {
          img: '//p1.meituan.net/poi/bd5047c33720f043c04edfc98740d5c488064.jpg@368w_208h_1e_1c',
          title: 'DQ（天坛路）',
          pos: '森林幻想（小）1份',
          price: '118'
        }, {
          img: '//p1.meituan.net/poi/bd5047c33720f043c04edfc98740d5c488064.jpg@368w_208h_1e_1c',
          title: 'DQ（天坛路）',
          pos: '森林幻想（小）1份',
          price: '118'
        }, {
          img: '//p1.meituan.net/poi/bd5047c33720f043c04edfc98740d5c488064.jpg@368w_208h_1e_1c',
          title: 'DQ（天坛路）',
          pos: '森林幻想（小）1份',
          price: '118'
        }],
        part: [{
          img: '//p1.meituan.net/mogu/1da7b50a1772e4354929c90a7ce727cd35538.jpg@368w_208h_1e_1c',
          title: '小丽都面包房（加州水郡店）',
          pos: '蛋糕2选1,约10英寸，圆形',
          price: '248'
        }, {
          img: '//p1.meituan.net/mogu/1da7b50a1772e4354929c90a7ce727cd35538.jpg@368w_208h_1e_1c',
          title: '小丽都面包房（加州水郡店）',
          pos: '蛋糕2选1,约10英寸，圆形',
          price: '248'
        }, {
          img: '//p1.meituan.net/mogu/1da7b50a1772e4354929c90a7ce727cd35538.jpg@368w_208h_1e_1c',
          title: '小丽都面包房（加州水郡店）',
          pos: '蛋糕2选1,约10英寸，圆形',
          price: '248'
        }, {
          img: '//p1.meituan.net/mogu/1da7b50a1772e4354929c90a7ce727cd35538.jpg@368w_208h_1e_1c',
          title: '小丽都面包房（加州水郡店）',
          pos: '蛋糕2选1,约10英寸，圆形',
          price: '248'
        }],
        spa: [{
          img: '//p0.meituan.net/merchantpic/23361032b03b77963a0d909589e049f8202913.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          title: '阿汤一族美发造型',
          pos: '阿汤一族美发造型',
          price: '76'
        }, {
          img: '//p0.meituan.net/merchantpic/23361032b03b77963a0d909589e049f8202913.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          title: '阿汤一族美发造型',
          pos: '阿汤一族美发造型',
          price: '76'
        }, {
          img: '//p0.meituan.net/merchantpic/23361032b03b77963a0d909589e049f8202913.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          title: '阿汤一族美发造型',
          pos: '阿汤一族美发造型',
          price: '76'
        }, {
          img: '//p0.meituan.net/merchantpic/23361032b03b77963a0d909589e049f8202913.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          title: '阿汤一族美发造型',
          pos: '阿汤一族美发造型',
          price: '76'
        }],
        movie: [{
          img: '//p0.meituan.net/deal/201108/05/3_0805163047.jpg@368w_208h_1e_1c',
          title: '耀莱成龙国际影城(五棵松店)',
          pos: '免押金,儿童票,杜比全景声厅',
          price: '19.9'
        }, {
          img: '//p0.meituan.net/deal/201108/05/3_0805163047.jpg@368w_208h_1e_1c',
          title: '耀莱成龙国际影城(五棵松店)',
          pos: '免押金,儿童票,杜比全景声厅',
          price: '19.9'
        }, {
          img: '//p0.meituan.net/deal/201108/05/3_0805163047.jpg@368w_208h_1e_1c',
          title: '耀莱成龙国际影城(五棵松店)',
          pos: '免押金,儿童票,杜比全景声厅',
          price: '19.9'
        }, {
          img: '//p0.meituan.net/deal/201108/05/3_0805163047.jpg@368w_208h_1e_1c',
          title: '耀莱成龙国际影城(五棵松店)',
          pos: '免押金,儿童票,杜比全景声厅',
          price: '19.9'
        }],
        travel: [{
          img: '//p1.meituan.net/tdchotel/3bc522be1b12f14143464d48ce51410e735348.png@368w_208h_1e_1c',
          title: '北京天伦王朝酒店',
          pos: '预约发票',
          price: '779'
        }, {
          img: '//p1.meituan.net/tdchotel/3bc522be1b12f14143464d48ce51410e735348.png@368w_208h_1e_1c',
          title: '北京天伦王朝酒店',
          pos: '预约发票',
          price: '779'
        }, {
          img: '//p1.meituan.net/tdchotel/3bc522be1b12f14143464d48ce51410e735348.png@368w_208h_1e_1c',
          title: '北京天伦王朝酒店',
          pos: '预约发票',
          price: '779'
        }, {
          img: '//p1.meituan.net/tdchotel/3bc522be1b12f14143464d48ce51410e735348.png@368w_208h_1e_1c',
          title: '北京天伦王朝酒店',
          pos: '预约发票',
          price: '779'
        }]
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
  created () {
    if (this.$store.getters.position.city) {
      this.city = this.$store.getters.position.city.replace('市', '')

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
            if (res.status === 200 && res.data.count > 0) {
              let result = []
              result = res.data.pois.filter((item) => {
                return item.photos.length > 0
              })
              console.log(result)
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