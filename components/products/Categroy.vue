<template>
  <div>
    Categroy
  </div>
</template>
<script>
export default {
  name: 'Categroy',
  props: {
    types: {
      type: Array,
      default () {
        return []
      }
    },
    areas: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
