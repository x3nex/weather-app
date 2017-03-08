<template>
<div>
   <h1>Hourly</h1>
   <div v-for="(item, index) in hourly" v-if="index<=7">
       <h2>{{ item.dt_txt }}</h2>
       <p>{{ item.main.temp | round}} </p>
       <p>{{item.weather[0].description}}</p>
       <img :src="'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'" alt="">
   </div>
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
               hourly: [],
           }
       },
       computed: {
            firstEight: function(){
                return this.hourly.filter(function(){
                    hourly.splice(hourly.length = 8);
                });
            } 
       },
       mounted(){
           axios.get('http://api.openweathermap.org/data/2.5/forecast', {
               params: {
                   q: 'Belgrade,RS',
                   appid: 'b138aca5f679afcd22a1961e66aa5709',
                   units: 'metric'
               }
           })
           .then(response =>{
               this.hourly = response.data.list
               // this.temp = response.data.list[0].main.temp;
               // this.icon = "http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png";
               // console.log(response);
               console.log(response);
           })
       },
       filters: {
           round: function(data){
               return Math.round(data);
           },
           loop: function(data, key){
                if (data[key] < data[7]) {
                    return data[key]
                }
           } 
       }
   }


</script>

<style lang="scss" scoped>

</style>