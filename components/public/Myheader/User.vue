<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您，<span class="username">{{ user }}</span>
      [<nuxt-link to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link
        to="/login"
        class="login">立即登录</nuxt-link>
      <nuxt-link
        class="register"
        to="/register">注册</nuxt-link>
    </template>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    this._getUserInfo()
  },
  methods: {
    _getUserInfo () {
      this.$axios.get('/users/getUser').then((res) => {
        if (res.status === 200 && res.data.user) {
          this.user = res.data.user
        }
      })
    }
  }
}
</script>
