<template>
  <div class="m-detail-list">
    <ul>
      <li>{{ list.filter(item => item.photos.length).length }}款套餐</li>
      <item
        v-for="(item, index) in list"
        :obj="item"
        :key="index"/>
    </ul>
  </div>
</template>
<script>
import Item from './Item.vue'
export default {
  name: 'ListDetail',
  components: {
    Item
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  created () {
    console.log('>>>this.list<<<')
    console.log(this.list)
  }
}
</script>
