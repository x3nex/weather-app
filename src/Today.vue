<template>
  <div>
  	<h1>Today</h1>
    <current-weather></current-weather>
    <hourly-weather></hourly-weather>
  </div>
</template>



<script>
  import CurrentWeather from './CurrentWeather.vue'
  import HourlyWeather from './HourlyWeather.vue'

  export default {
    name: 'today',
    components: {
    	CurrentWeather, HourlyWeather
    }
  }
</script>

<style lang="scss" scoped>

</style>