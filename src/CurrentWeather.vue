<template>
	<div class="current-weather">
		<h1> {{temp | round}}&deg;C</h1>
		<h3>{{city}}</h3>
		<h4>{{desc}}</h4>
		<div class="current-icon">{{icon}}</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'current-weather',
		data: function(){
			return {
				temp: '',
				city: '',
				desc: '',
				icon: ''
			}
		},
		mounted(){
			axios.get('http://api.openweathermap.org/data/2.5/weather', {
				params: {
					q: 'Belgrade,RS',
					appid: 'b138aca5f679afcd22a1961e66aa5709',
					units: 'metric'  			
				}
			})
			.then(response =>{
				this.temp = response.data.main.temp;
				this.city = response.data.name;
//				this.icon = $(".current-icon").html("<img src='http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png' alt='OpenWeather Icon'>");
                this.icon = $(".current-icon").html("<i class='owf owf-" + response.data.weather[0].id + " " + "owf-5x'></i>");
				this.desc = response.data.weather[0].description;
			});
		},
		filters: {
			round: function (data){
				return Math.round(data);
			}
		}
	}
</script>

<style lang="scss" scoped>

	.current-weather{
        color: white;
		text-align: center;
		border: 1px solid white;
        margin-top: 50px;
        h1{
            font-size: 150px;
        }
        h3{
            font-size: 50px;
        }
        h4{
            font-size: 30px;
        }
        .current-icon{
            size: 20px;
        }
	}

</style>