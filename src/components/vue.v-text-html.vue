<template>
    <div class="html">
        <div>{{msg}}</div>
        <div v-html="msg">{{msg}}</div>
        <div v-text="html"></div>
        <div v-html="html"></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello world',
      html: '<h1>h1字体</h1>'
    }
  }
}
</script>
<style scoped>

</style>
