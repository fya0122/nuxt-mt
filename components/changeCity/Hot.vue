<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市</dt>
      <dd
        v-for="item in list"
        :key="item.id">{{ item.name === '市辖区' ? item.province : item.name }}</dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'Hot',
  data () {
    return {
      list: []
    }
  },
  async created () {
    const res = await this.$axios.get('/geo/hotCity')
    if (res.status === 200) {
      this.list = res.data.hots
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/changeCity/hot.scss";
</style>