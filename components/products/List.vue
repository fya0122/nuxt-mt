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
  }
}
</script>
