<template>
<div class="wrapper">
   <div class="hourly-weather" v-for="item in firstEight" >
       <h2>{{ item.dt_txt | stripDate}}</h2>
       <p>{{ item.main.temp | round}}&deg;C </p>
       <p>{{item.weather[0].description}}</p>
       <img :src="'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'" alt="">
       <!--{{item.weather[0].id}}-->
       <i :class="'owf owf-'+ item.weather[0].id + '-' + item.sys.pod + ' owf-2x'"></i>
       <!--<div class="hourly-icon">{{item}}</div>-->
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

    .hourly-weather{
        border-right: 1px solid white;
        float: left;
        width: (100% / 8);
        color: white;
        text-align: center;
        margin-top: 50px;
    }
    .hourly-weather:first-child{
        border-left: 1px solid white;
    }

</style>