import Router from 'koa-router'
import axios from './utils/axios.js'
import Order from './../dbs/models/order.js'
import Cart from './../dbs/models/cart.js'
import md5 from 'crypto-js/md5'
import sign from './utils/sign.js'

let router = new Router({ prefix: '/order' })

router.post('/createorder', async ctx => {
  let {id, price, count} = ctx.request.body
  let time = Date()
  let orderID = md5(Math.random() * 1000 + time).toString()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'please login.'
    }
  } else {
    let findCart = await Cart.findOne({
      cartNo: id
    })
    let order = new Order({
      id: orderID,
      count,
      total: price * count,
      user: ctx.session.passport.user,
      name: findCart.detail[0].name,
      imgs: findCart.detail[0].imgs,
      status: 0
    })
    try {
      let result = await order.save()
      if (result) {
        await findCart.remove()
        ctx.body = {
          code: 0,
          id: orderID
        }
      } else {
        ctx.body = {
          code: -1
        }
      }
    } catch (e) {
      ctx.body = {
        code: -1
      }
    }
  }
})

router.post('/getOrders', async ctx => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      list: [],
      msg: 'please login.'
    }
  } else {
    try {
      let result = await Order.find()
      if (result) {
        ctx.body = {
          code: 0,
          list: result
        }
      } else {
        ctx.body = {
          code: -1,
          list: []
        }
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        list: []
      }
    }
  }
})

export default router