<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png">
      </el-col>
      <el-col
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            :placeholder="hotPlace[0].name"
            @focus="focus"
            @blur="blur"
            @input="input"/>
          <button class="el-button el-button--primary"><i class="el-icon-search"/></button>
          <dl
            v-if="isHotPlace"
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd
              v-for="(item, index) in hotPlace"
              :key="index">{{ item.name }}</dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList">
            <dd
              v-for="(item, index) in searchList"
              :key="index">{{ item.name }}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            v-for="(item, index) in hotPlace"
            :key="index"
            href="#">{{ item.name }}</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link
              to="/"
              class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="apartment">民俗/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right">
        <ul class="security">
          <li><i class="refund"><p class="txt">随时退</p></i></li>
          <li><i class="single"><p class="txt">不满意免单</p></i></li>
          <li><i class="overdue"><p class="txt">过期退</p></i></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import _ from 'lodash' // 用你妈逼什么lodash，这么大的库，作死呢，直接uninstall 不解释
export default {
  name: 'Searchbar',
  data () {
    return {
      search: '',
      isFocus: false,
      hotPlace: [],
      searchList: [], // 搜索的结果
      timer: null
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.search
    },
    isSearchList () {
      return this.isFocus && this.search
    }
  },
  created () {
    this.hotPlace = this.$store.getters.hotPlace.slice(0, 4) || []
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.$store.getters.position.city) { // 没有城市的话
        this.searchList = []
        return
      } else if (!this.search) { // 搜索框没值的话
        this.searchList = []
        return
      } else {
        let city = this.$store.getters.position.city.replace('市', '')
        this.timer = setTimeout(async () => {
          const res = await this.$axios.get('/search/top', {
            params: {
              input: this.search,
              city: city
            }
          })
          if (res.status === 200 && res.statusText === 'OK' && res.data.top.code === 0) {
            this.searchList = []
            if (res.data.top.top.length) {
              if (res.data.top.top.length > 10) {
                this.searchList = res.data.top.top.slice(0, 10)
              } else {
                this.searchList = res.data.top.top
              }
            } else {
              this.searchList = []
            }
          } else {
            this.searchList = []
          }
        }, 300)
      }
    }
  }
}
</script>
