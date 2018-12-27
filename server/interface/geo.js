import Router from 'koa-router';
import axios from './utils/axios.js'
import sign from './utils/sign.js'

let router = new Router({ prefix: '/geo' })

// 获取地址
router.get('/getPosition', async (ctx) => {
  const res = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if (res.status === 200) {
    ctx.body = {
      province: res.data.province,
      city: res.data.city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

export default router