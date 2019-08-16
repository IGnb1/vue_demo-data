<template>
  <div class="bind">
    <img :src="img" alt />
    <button v-on:click="isClose=!isClose">点击</button>
    <div :class="{open:true,close:isClose}"></div>
  </div>
</template>
<script>
import img from '../assets/logo.png'
export default {
  data () {
    return {
      isClose: false,
      img: img
    }
  }
}
</script>
<style scoped>
.open {
  width: 200px;
  height: 300px;
  border: 3px solid red;
  transition: 1s;
}
.close {
  width: 50px;
}
</style>
