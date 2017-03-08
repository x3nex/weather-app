import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routes'



new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App },
  data: function () {
  	return {
  	}
  },
  mounted(){
  	
  },
  render: h => h(App)
})
