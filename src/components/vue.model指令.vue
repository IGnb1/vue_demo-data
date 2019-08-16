<template>
  <div class="model">
    用户名：
    <input type="text" v-model="login.username" />
    <br />密码：
    <input type="password" v-model="login.userpass" />
    <br />
    <input @click="isLogin" value='登录' type='button'>
  </div>
</template>
<script>
export default {
  data () {
    return {
      login: {
        username: '',
        userpass: ''
      }
    }
  },
  methods: {
    isLogin () {
      console.log(this.login)
    }
  }
}
</script>
<style scoped>
</style>
