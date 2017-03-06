<template>
    <div>
  		<router-link to="/">
          <a>Today</a>
        </router-link>
        <router-link to="/ten-days">
          <a>10 days</a>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>


    export default {
    	name: 'navigation'
    }
</script>

<style lang="scss" scoped>

</style>