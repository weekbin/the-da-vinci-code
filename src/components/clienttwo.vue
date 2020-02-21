<template>
<div>
    <h3 style="margin-left:10px;">您的卡牌</h3>
    <div class="md-layout md-alignment-center-left">
        <div v-for="i in clienttwo" :key="i.id">
            <md-card md-with-hover :style="`background:url(${i.background_image}) no-repeat;background-size:cover;`"
                  class="md-elevation-15 animated slideInRight">
                    <div style="display:flex;height:100%;">
                        <div class="number">{{i.number}}</div>
                    </div>
            </md-card>
        </div>
    </div>
</div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'clienttwo',
    computed: mapState({
        clienttwo(){
            return this.$store.state.clienttwo
        }
    })

}
</script>

<style scoped>
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
</style>