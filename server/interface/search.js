import Router from 'koa-router';
import axios from './utils/axios.js'
import Poi from './../dbs/models/poi.js'
import sign from './utils/sign.js'

let router = new Router({ prefix: '/search' })

// 获取地址
router.get('/top', async (ctx) => {
  const res = await axios.get('http://cp-tools.cn/search/top', {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign: sign
    }
  })
  if (res.status === 200) {
    ctx.body = {
      top: res.data
    }
  } else {
    ctx.body = {
      top: []
    }
  }
})

// 获取热门搜索呢
router.get('/hotPlace', async (ctx) => {
  let city = ctx.query.city || '北京'
  const res = await axios.get('http://cp-tools.cn/search/hotPlace', {
    params: {
      city: city,
      sign: sign
    }
  })
  if (res.status === 200) {
    ctx.body = {
      result: res.data.result
    }
  } else {
    ctx.body = {
      result: []
    }
  }
})

// 鬼晓得是个什么鬼
router.get('/resultsByKeywords', async (ctx) => {
  const { city, keyword } = ctx.query
  const res = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city: city,
      keyword: keyword,
      sign
    }
  })
  if (res.status === 200) {
    ctx.body = {
      count: res.data.count,
      pois: res.data.pois
    }
  } else {
    ctx.body = {
      count: 0,
      pois: []
    }
  }
})

export default router