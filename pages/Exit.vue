<template>
  <div class=""/>
</template>
<script>
export default {
  name: 'Exit',
  layout: 'Blank',
  middleware: async (ctx) => {
    const res = await ctx.$axios.get('/users/exit')
    if (res.status === 200 && res.data && res.data.code === 0) {
      location.href = '/'
    } else {
      console.log('退出失败')
    }
  }
}
</script>