<template>
    <div class="wrapper">
        <div class="btn-group btn-group-justified" role="group">
            <div class="btn-group">
                <router-link to="/">
                    <button type="button" class="btn">Today</button>
                </router-link>
            </div>
            <div class="btn-group">
                <router-link to="/ten-days">
                    <button type="button" class="btn">10 Days</button>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    	name: 'navigation'
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 50px;
        box-sizing: border-box;
    }
    .btn  {
        margin-top: 20px;
        background:  transparent;
        height:  38px;
        border:  3px solid white;
        text-align:  center;
        font-size:  14px;
        font-weight: bold;
        color:  #fff;
        border-radius: 0;
    }
</style>