import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routes'

window.axios = axios



new Vue({
  el: '#app',
  router,
  data: function () {
  	return {
  	}
  },
  mounted(){
  	
  },
  render: h => h(App)
})
