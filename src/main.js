import Vue from 'vue'
// import App from './App.vue'
// import App from './components/vue.v-for指令.vue'
// import App from './components/vue.v-bind指令.vue'
// import App from './components/vue.model指令.vue'
import App from './components/表格.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
