<template>
  <div>
    List
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    console.log('>>> list >>> mounted')
    console.log(this.list)
  }
}
</script>
