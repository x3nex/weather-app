<template>
<div class="wrapper">
   <div class="hourly-weather" v-for="item in firstEight" >
       <h1>{{ item.dt_txt | stripDate}}</h1>
       <hr>
       <p>{{item.weather[0].description}}</p>
       <i :class="'owf owf-'+ item.weather[0].id + '-' + item.sys.pod + ' owf-3x'"></i>
       <h3>{{ item.main.temp | round}}&deg;C </h3>
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
            },
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
               this.hourly = response.data.list;
               console.log(response.data);
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
@import "mixins";

// Variables
  $background-color: #3498db;

    .wrapper{
      @include wrapper; 
    }
    .hourly-weather{
        padding: 10px;
        border: 1px solid white;
        float: left;
        width: (100% / 8);
        color: white;
        text-align: center;
        margin-top: 50px;
        background: darken($background-color, 25%);
        hr{
          border-width: 1px;
        }
    }

</style>