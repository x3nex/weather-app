<template>
	<div class="wrapper">
		<div class="ten-days-weather" v-for="day in days">
			<h1>{{day.temp.max | round}}&deg;C / {{day.temp.min | round}}&deg;C</h1>
			<i :class="'owf owf-'+ day.weather[0].id + ' owf-5x'"></i>
			<h4>{{day.weather[0].description}}</h4>
			<hr>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ten-days-weather',
		data: function(){
			return {
				days: []
			}
		},
		mounted(){
			axios.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
				params: {
					q: 'Belgrade,RS',
					appid: 'b138aca5f679afcd22a1961e66aa5709',
					units: 'metric',
					cnt: 10
				}
			})
			.then(response =>{
				this.days = response.data.list
				console.log(response);
			})
		},
		filters: {
			round: function(data){
				return Math.round(data);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "mixins";

	.wrapper{
		@include wrapper;	
	}
	.ten-days-weather{
		margin-top: 30px;
		padding: 10px;
		color: white;
		height: (100% / 10);
		text-align: center;
		h1{
			font-size: 45px;
		}
	}
	.ten-days-weather:last-child hr{
			display: none;
		}
</style>