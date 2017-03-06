import Vue from 'vue'
import Router from 'vue-router'
import Today from './Today.vue'
import TenDays from './TenDays.vue'

Vue.use(Router)

const routes = 
[
	{
		path: '/',
		component: Today
	},
	{
		path: '/ten-days',
		component: TenDays
	}
]

export default new Router({
	routes
})