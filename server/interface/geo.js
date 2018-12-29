import Router from 'koa-router';
import axios from './utils/axios.js'
import sign from './utils/sign.js'
import Province from './../dbs/models/province.js'

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

// 获取左侧菜单
router.get('/menu', async (ctx) => {
  const res = await axios.get(`http://cp-tools.cn/geo/menu?sign=${sign}`)
  if (res.status === 200) {
    ctx.body = {
      menu: res.data.menu
    }
  } else {
    ctx.body = {
      menu: []
    }
  }
})

// 获取省份
router.get('/province', async (ctx) => {
  // let province = await Province.find()
  // ctx.body = {
  //   province: province.map(item => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }
  let res = await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
  if (res.status === 200) {
    ctx.body = {
      province: res.data.province
    }
  } else {
    ctx.body = {
      province: []
    }
  }
})

export default router