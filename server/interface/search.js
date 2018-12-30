import Router from 'koa-router';
import axios from './utils/axios.js'
import Poi from './../dbs/models/poi.js'
import sign from './utils/sign.js'
import store from '../../store/index'

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
  ctx.body = {
    code: store
  }
})

export default router