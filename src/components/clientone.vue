<template>
    <div>
        <h3 style="margin-left:10px;">机器人的卡牌</h3>
        <div class="md-layout md-alignment-center-left">
            <div v-for="i in clientone" :key="i.id" @click="openDialog(i)">
                <div style="position:relative;height:250px;width:170px;">
                    <md-card md-with-hover :style="`background:url(${i.background_image}) no-repeat;background-size:cover;`"
                 style="position:absolute;"
                 class="md-elevation-15 animated slideInRight" :class="{laydown:i.show}">
                        <div style="display:flex;height:100%">
                            <div class="number">
                                <span v-if="i.show">{{i.number}}</span>
                            </div>
                        </div>
                    </md-card>
                </div>
                <!-- <md-card md-with-hover :style="`background:url(${i.background_image}) no-repeat;background-size:cover;`"
                 class="md-elevation-15 animated slideInRight">
                    <div style="display:flex;height:100%">
                        <div class="number">
                            <span v-if="i.show">{{i.number}}</span>
                        </div>
                    </div>
                </md-card> -->
            </div>
        </div>
        <md-dialog :md-active.sync="second">
            <md-dialog-title>居居的新消息</md-dialog-title>
            <md-dialog-content>居居：'很遗憾你猜错了，现在，你要选择一张卡牌亮出来'</md-dialog-content>
            <md-dialog-content>
                <div v-for="i in clienttwo" :key="i.id" style="float:left" v-show="i.show!==true">
                    <md-card md-with-hover id="smallcard" :style="`background:url(${i.background_image}) no-repeat;background-size:cover;`"
                    >
                        <div style="display:flex;height:100%;" @click="show(i)">
                            <div class="snumber">{{i.number}}</div>
                        </div>
                    </md-card>
                </div>
            </md-dialog-content>
        </md-dialog>
        <md-dialog-prompt :md-active.sync="active" md-title="这张卡牌是几呢？" v-model="value"
         md-input-placeholder="请输入0-11之间的数字" md-confirm-text="确定" @md-confirm="onConfirm"/>
        <!-- <md-dialog-alert
        :md-active.sync="second"
        md-title="你猜错了"
        md-content="居居：'哈哈哈哈，你猜错了！'" /> -->

    </div> 
</template> 

<script>
import {mapState} from 'vuex'
export default {
    name:'clientone',
    data(){
        return{
            active:false,
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
                this.$store.commit('showCard',{'item':this.item,'client':'clientone'})
            }else{
                this.second = true;
            }
        },
        show(i){
            this.$store.commit('showCard',{'item':i,'client':'clienttwo'})
            this.second = false
        }
    },
    computed: mapState({
        clientone(){
            return this.$store.state.clientone;
        },
        clienttwo(){
            return this.$store.state.clienttwo;
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
.snumber{
    font-size: 50px;
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
#smallcard{
    width: 90px;
    height: 120px;
}
</style>