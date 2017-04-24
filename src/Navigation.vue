<template>
    <div class="wrapper">
        <div class="btn-group btn-group-justified" role="group">
            <div class="btn-group">
                <router-link to="/">
                    <button v-on:click="onClick" type="button" class="btn today-btn">Today</button>
                </router-link>
            </div>
            <div class="btn-group">
                <router-link to="/ten-days">
                    <button type="button" class="btn ten-days-btn">10 Days</button>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    	name: 'navigation',
        data: function(){
            return{

            }
        },
        methods: {
            onClick: function(){
                $('button').on('click', function(){
                    $('button').removeClass('active');
                    $(this).addClass('active');
                });
            }
        }
    }

</script>

<style lang="scss" scoped>
@import "mixins";
    
    .wrapper{
        @include navigationWrapper;
    }
    .btn{
        @include navigationBtn;
    }
    .active {
        background: darken(#3498db, 25%);
    }
</style>