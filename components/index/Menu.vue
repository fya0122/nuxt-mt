<template>
  <div class="m-menu">
    <dl
      class="nav"
      @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menu"
        :key="index"
        @mouseenter="enter">
        <i :class="item.type"/>{{ item.name }}<span class="arrow"/>
      </dd>
    </dl>
    <div
      v-if="kind"
      class="detail"
      @mouseenter="sover"
      @mouseleave="sout">
      <template v-for="(item, index) in currentDetail">
        <h4 :key="index">{{ item.title }}</h4>
        <span
          v-for="item in item.child"
          :key="item">{{ item }}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      // menu: [{
      //   type: 'food',
      //   name: '美食',
      //   child: [{
      //     title: '美食',
      //     child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
      //   }]
      // }, {
      //   type: 'takeout',
      //   name: '外卖',
      //   child: [{
      //     title: '外卖',
      //     child: ['美团外卖']
      //   }]
      // }, {
      //   type: 'hotel',
      //   name: '酒店',
      //   child: [{
      //     title: '酒店星级',
      //     child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
      //   }]
      // }],
      menu: [],
      kind: '', // 记录当前hover是哪个
      mytimer: {} // 左侧定时器
    }
  },
  computed: {
    currentDetail () {
      return this.menu.filter((item) => {
        return item.type === this.kind
      })[0].child
    }
  },
  created () {
    this.menu = this.$store.getters.menu
  },
  methods: {
    enter (e) {
      console.log(e.target.querySelector('i').className)
      if (e.target.querySelector('i').className) {
        this.kind = e.target.querySelector('i').className
      }
    },
    mouseleave () {
      this.mytimer = setTimeout(() => {
        this.kind = ''
      }, 150)
    },
    sover () {
      clearTimeout(this.mytimer)
    },
    sout () {
      this.kind = ''
    }
  }
}
</script>
