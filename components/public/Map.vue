<template>
  <div
    :id="id"
    :style="{width:width+'px',height:height+'px',margin:'34px auto'}"
    class="m-map"/>
</template>

<script>
export default {
  name: 'Map',
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    point: {
      type: Array,
      default: () => {
        return [116.46, 39.92]
      }
    }
  },
  data () {
    return {
      id: `map`,
      key: 'e3b8c6e3ea741e2c9324158e4f8ca0f9'
    }
  },
  watch: {
    point: (val, old) => {
      this.map.setCenter(val)
      this.marker.setPosition(val)
    }
  },
  // 需要拿到window对象，只能在挂载后执行
  mounted () {
    // 1、先声明id
    this.id = `map${Math.random().toString().slice(4, 6)}`

    window.onmaploaded = () => {
      let map = new window.AMap.Map(this.id, {
        resizeEnable: true,
        zoom: 11,
        center: this.point
      })
      this.map = map
      window.AMap.plugin('AMap.ToolBar', () => {
        let toolbar = new window.AMap.ToolBar()
        map.addControl(toolbar)
        let marker = new window.AMap.Marker({
          icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          // icon: 'https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/location_red.png',
          position: this.point
        })
        this.marker = marker
        marker.setMap(map)
      })
    }
    // 2、找到key，并且打开callback
    const url = `https://webapi.amap.com/maps?v=1.4.10&key=${this.key}&callback=onmaploaded`
    let jsapi = document.createElement('script')
    jsapi.charset = 'utf-8'
    jsapi.src = url
    document.head.appendChild(jsapi)
  }
}
</script>
