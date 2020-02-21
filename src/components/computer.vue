<template>
    <div style="height:250px;" class="md-layout md-alignment-top-space-around">
        <div style="position:relative;" class="md-layout-item">
            <div v-for="(item,index) in cards_pond" :key="index" :style="`position:absolute;left:${index*0.8}px;top:${index*0.25}px`">
                <div>
                    <md-card :style="`background:url(${item.background_image}) no-repeat;background-size:150px 200px;`"
                    class="animated slideInLeft"></md-card>
                </div>
            </div>
            <div style="position:absolute;left:210px;top:130px;">
                <h4>剩余圣诞老人{{leftcards.black}}张</h4>
                <h4>剩余斧头帮老大{{leftcards.white}}张</h4>
            </div>
            <div style="position:absolute;left:200px;top:75px;">
                <md-button class="md-raised" :md-ripple="false" v-on:click="init">拿牌</md-button>
                <md-button class="md-raised" :md-ripple="false" v-on:click="washCards">洗牌</md-button>
            </div>
        </div>
        <div class="md-layout-item desk">
            <div style="display:flex;height:100%;width:100%;">
                <div style="margin:auto">
                    <h1>{{this.gameInfo}}</h1>
                </div>
            </div>
            
        </div>
        <div class="md-layout-item"></div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'computer',
    data(){
        return{
            number:24,
            gameInfo:'请点击拿牌开始游戏'
            
        }
    },
    methods:{
        getCard(){
            this.$store.commit('getCard');
            if(this.clientone.length>1 ||this.clienttwo.length>1){
                if(this.clienttwo[this.clienttwo.length-1]['id'] == 24 || this.clienttwo[this.clienttwo.length-1]['id'] == 25){
                    this.$store.commit('specialCard','clienttwo') 
                }
                 setTimeout(()=>{
                    this.$store.commit('sortCards',this.clienttwo);
                    this.$store.commit('sortCards',this.clientone);
                },500)
            }
        },
        washCards(){
            this.$store.commit('washCardsInPond');
        },
        init(){
            if(this.clientone.length == 0){
                this.gameInfo = '请等待居居发牌，居居会帮你将卡牌排序'
                setTimeout(()=>{
                    this.getCard()
                },1500)
                setTimeout(()=>{
                    this.getCard()
                },2000)
                setTimeout(()=>{
                    this.getCard()
                },2500)
                setTimeout(()=>{
                    this.getCard()
                },3000)
                setTimeout(()=>{
                    this.gameInfo = '你可以选择继续拿牌或者猜测机器人的卡牌'
                },3500)
            }else{
                this.getCard()
            }
        }
    },
    computed: mapState({
        cards_pond(){
            return this.$store.state.cards_pond;
        },
        clienttwo(){
            return this.$store.state.clienttwo;
        },
        clientone(){
            return this.$store.state.clientone;
        },
        leftcards(){
            let pond = this.cards_pond;
            let black = 0;
            let white = 0;
            for(let i of pond){
                if(i.color == 'black'){
                    black += 1;
                }else{
                    white += 1;
                }
            }
            return {'black':black,'white':white}
        }
    }),
    created(){
        this.washCards()
    },

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
.desk{
    height: 250px;
}
</style>