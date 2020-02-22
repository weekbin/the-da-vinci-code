<template>
<div>
    <h3 style="margin-left:10px;">您的卡牌</h3>
    <div class="md-layout md-alignment-center-left">
        <div v-for="i in clienttwo" :key="i.id">
            <div style="position:relative;height:250px;width:170px;">
                <md-card md-with-hover :style="`background:url(${i.background_image}) no-repeat;background-size:cover;`"
                  class="md-elevation-15 animated slideInRight" style="position:absolute;" :class="{laydown:i.show}">
                    <div style="display:flex;height:100%;">
                        <div class="number">{{i.number}}</div>
                    </div>
                </md-card>
            </div>
            
        </div>
    </div>
</div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'clienttwo',
    methods:{
        
    },
    computed: mapState({
        clienttwo(){
            return this.$store.state.clienttwo
        }
    })

}
</script>

<style lang="scss" scoped>
.md-card {
    width: 150px;
    height:200px;
    margin: 10px;
    display: inline-block;
    vertical-align: top;
    
}
.number{
    font-size: 100px;
    margin: auto;
}
.laydown{
    animation: down 1s forwards;
    @keyframes down{
        0%{transform: rotate3d(1,0,0,0deg);top: 10px;}
        // 50%{transform: rotate3d(1,0,0.05,22.5deg);top: 20px;}
        100%{transform: rotate3d(1,0,0.1,45deg);top: 25px;}
    }
}
</style>