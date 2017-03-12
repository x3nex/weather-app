<template>
	<div>
		<div v-for="day in days">
			<h1>Max Temp {{day.temp.max | round}}</h1>
			<h1>Min Temp {{day.temp.min | round}}</h1>
			<img :src="'http://openweathermap.org/img/w/' + day.weather[0].icon + '.png'" alt="">
			<p>description {{day.weather[0].description}}</p>
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

</style>