import mongoose from 'mongoose'
const Schema = mongoose.Schema
const PoiSchema = new Schema({
  name: { // 景点名称
    type: String
  },
  province: { // 省份
    type: String
  },
  city: { // 城市
    type: String
  },
  county: { // 区、县
    type: String
  },
  areaCode: { // 区号
    type: String
  },
  tel: { // 电话
    type: String
  },
  area: { // 地区
    type: String
  },
  addr: { // 地址
    type: String
  },
  type: { // 比如：景点啊、餐饮啊
    type: String
  },
  module: { // 子分类
    type: String
  },
  longitude: { // 经度
    type: Number
  },
  latitude: { // 纬度
    type: Number
  }
})
export default mongoose.model('Poi', PoiSchema)