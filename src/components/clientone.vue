<template>
    <div>
        <h3 style="margin-left:10px;">机器人的卡牌</h3>
        <div class="md-layout md-alignment-center-left">
            <div v-for="i in clientone" :key="i.id" @click="openDialog(i)">
                <md-card md-with-hover :style="`background:url(${i.background_image}) no-repeat;background-size:cover;`"
                 class="md-elevation-15 animated slideInRight">
                    <div style="display:flex;height:100%">
                        <div class="number">
                            <span v-if="i.show">{{i.number}}</span>
                        </div>
                    </div>
                </md-card>
            </div>
        </div>
        <md-dialog-prompt :md-active.sync="active" md-title="这张卡牌是几呢？" v-model="value"
         md-input-placeholder="请输入0-11之间的数字" md-confirm-text="确定" @md-confirm="onConfirm"/>
            <md-dialog-alert
           :md-active.sync="first"
            md-title="你猜对了"
            md-content="居居：\'这张卡片的数字和你猜的一样！\'" />
            <md-dialog-alert
           :md-active.sync="second"
            md-title="你猜错了"
            md-content="居居：'哈哈哈哈，你猜错了！'" />

    </div> 
</template> 

<script>
import {mapState} from 'vuex'
export default {
    name:'clientone',
    data(){
        return{
            active:false,
            first:false,
            second:false,
            value: null,
            item:null
        }
    },
    methods:{
        openDialog(item){
            this.active = true;
            this.item = item;
            // if(item)
        },
        onConfirm(){
            if(this.item.number == this.value){
                this.first = true;
                this.$store.commit('showCard',this.item)
            }else{
                this.second = true;
            }
        }
    },
    computed: mapState({
        clientone(){
            return this.$store.state.clientone;
        },
        
        
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
</style>