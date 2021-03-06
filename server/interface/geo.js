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

// 根据省id获取城市数据
router.get('/province/:id', async (ctx) => {
  // let city = await City.findOne({id: ctx.params.id})
  //
  // ctx.body = {
  //   code: 0,
  //   city: city.value.map(item => {
  //     return {province: item.province, id: item.id, name: item.name}
  //   })
  // }
  let res = await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}?sign=${sign}`)
  if (res.status === 200) {
    ctx.body = {
      city: res.data.city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})

// 获取所有城市数据
router.get('/city', async (ctx) => {
  // let city = []
  // let result = await City.find()
  // result.forEach(item => {
  //   city = city.concat(item.value)
  // })
  // ctx.body = {
  //   code: 0,
  //   city: city.map(item => {
  //     return {
  //       province: item.province,
  //       id: item.id,
  //       name: item.name === '市辖区' || item.name === '省直辖县级行政区划'
  //         ? item.province
  //         : item.name
  //     }
  //   })
  // }
  let res = await axios.get(`http://cp-tools.cn/geo/city?sign=${sign}`)
  if (res.status === 200) {
    ctx.body = {
      city: res.data.city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})

// 热门城市
router.get('/hotCity', async (ctx) => {
  // let list = [
  //   '北京市',
  //   '上海市',
  //   '广州市',
  //   '深圳市',
  //   '天津市',
  //   '西安市',
  //   '杭州市',
  //   '南京市',
  //   '武汉市',
  //   '成都市'
  // ]
  // let result = await City.find()
  // let nList = []
  // result.forEach(item => {
  //   nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
  // })
  // ctx.body = {
  //   hots: nList
  // }
  let res = await axios.get(`http://cp-tools.cn/geo/hotCity?sign=${sign}`)
  if (res.status === 200) {
    ctx.body = {
      hots: res.data.hots
    }
  } else {
    ctx.body = {
      hots: []
    }
  }
})

export default router