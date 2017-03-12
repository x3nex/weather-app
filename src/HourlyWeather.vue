<template>
<div>
   <h1>Hourly</h1>
   <div v-for="item in firstEight">
       <h2>{{ item.dt_txt | stripDate}}</h2>
       <p>{{ item.main.temp | round}} </p>
       <p>{{item.weather[0].description}}</p>
       <img :src="'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'" alt="">
   </div>
</div>
</template>

<script>
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
                return this.hourly.slice(0, 8)
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
           })
       },
       filters: {
           round: function(data){
               return Math.round(data);
           },
           stripDate: function(data){
            return data.slice(10, 16)
           } 
       }
   }


</script>

<style lang="scss" scoped>

</style>