<template>
    <div>
        <h1>00:00</h1>
        <h2>{{temp | round}}&deg;C</h2>
        <div class="hourly-icon">{{icon}}</div>
        <h4>{{desc}}</h4>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
    	name: 'hourly-weather',
        data: function(){
            return {
                temp: '',
                icon: '',
                desc: '',
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
                // this.icon = $(".icon").html("<img src='http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png' alt='OpenWeather Icon'>");
                this.desc = response.data.weather[0].description;
            });
            axios.get('http://api.openweathermap.org/data/2.5/forecast', {
                params: {
                    q: 'Belgrade,RS',
                    appid: 'b138aca5f679afcd22a1961e66aa5709',
                    units: 'metric'
                }
            })
            .then(response =>{
                this.temp = response.data.list[0].main.temp;
                this.icon = $(".hourly-icon").html("<img src='http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png' alt='OpenWeather Icon'>");
                console.log(response);
            })
        },
        filters: {
            round: function(data){
                return Math.round(data);
            },
        }
    }


</script>

<style lang="scss" scoped>

</style>