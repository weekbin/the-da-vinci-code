<template>
    <div style="height:250px;" class="md-layout md-alignment-top-space-around">
        <md-dialog :md-active.sync="special24">
            <md-dialog-title>居居有了新发现</md-dialog-title>
            <md-dialog-content>居居：'你有圣诞老人百搭牌，请选择一张牌，百搭将放于这张牌之后！</md-dialog-content>
            <md-dialog-content>
                <div v-for="i in clienttwo" :key="i.id" style="float:left" v-show="i.number!=='-'">
                    <md-card md-with-hover id="smallcard" :style="`background:url(${i.background_image}) no-repeat;background-size:cover;`"
                    >
                        <div style="display:flex;height:100%;" @click="moveTo(i.id,24)">
                            <div class="number">{{i.number}}</div>
                        </div>
                    </md-card>
                </div>
            </md-dialog-content>
        </md-dialog>
        <md-dialog :md-active.sync="special25">
            <md-dialog-title>居居有了新发现</md-dialog-title>
            <md-dialog-content>居居：'你有斧头帮老大百搭牌，请选择一张牌，百搭将放于这张牌之后！</md-dialog-content>
            <md-dialog-content>
                <div v-for="i in clienttwo" :key="i.id" style="float:left" v-show="i.number!=='-'">
                    <md-card md-with-hover id="smallcard" :style="`background:url(${i.background_image}) no-repeat;background-size:cover;`"
                    >
                        <div style="display:flex;height:100%;" @click="moveTo(i.id,25)">
                            <div class="number">{{i.number}}</div>
                        </div>
                    </md-card>
                </div>
            </md-dialog-content>
        </md-dialog>
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
                    
                    <h2>{{this.gameInfo}}</h2>
                    
                </div>
            </div>
            
        </div>
        <div class="md-layout-item"></div>
        <md-dialog :md-active.sync="secret">
            <md-dialog-title>居居塞给你一张小纸条</md-dialog-title>
            <md-dialog-content>居居：'你给我5块钱零花钱，我告诉你一个秘密！</md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="secret = false">算了吧</md-button>
                <md-button class="md-primary" @click="getSecret()">欣然接受</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'computer',
    data(){
        return{
            number:24,
            gameInfo:'请点击拿牌开始游戏',
            special24:false,
            special25:false,
            win:false,
            specialItem:undefined,
            secret:false
            
        }
    },
    methods:{
        getSecret(){
            this.secret = false
            let random = Math.random()
            window.console.log(random)

            if(random <=0.2){
                this.gameInfo = '粑粑特别喜欢吃超级鸡车的炸鱿鱼须'
            }else if(random>0.7){
                let sum = 0;
                for(let i of this.clientone){
                    if(i.number == '-'){
                        sum += 1
                    }
                }
                this.gameInfo = '机器人有' + sum +'张特殊牌'
            }else if(random>0.2 && random<=0.4){
                this.gameInfo = '犇犇喜欢把钱藏在粑粑的钱包里'
            }else{
                for(let i of this.clientone){
                    if(!i.show){
                        this.gameInfo = '机器人第一张没亮出的牌是'+ i.number
                        break
                    }else{
                        continue
                    }
                }
            }
        },
        getCard(client,seconds){
            setTimeout(()=>{
                this.$store.commit('getCard',client);
            },seconds) 
        },
        moveTo(inputId,specialId){
            if(specialId == 24){
                for(let i in this.clienttwo){
                    if(this.clienttwo[i].id == 24){
                        this.clienttwo[i].id = inputId + 0.5
                        this.special24 = false
                        this.$store.commit('setClienttwo',this.clienttwo)
                    }
                }
            }else if(specialId == 25){
                for(let i in this.clienttwo){
                    if(this.clienttwo[i].id == 25){
                        this.clienttwo[i].id = inputId + 0.5
                        this.special25 = false
                        this.$store.commit('setClienttwo',this.clienttwo)
                    }
                }
            }else{
                throw new Error('wrong id')
            }
            this.$store.commit('sortCards',this.clienttwo);
        },
        washCards(){
            this.$store.commit('washCardsInPond');
        },
        init(){
            if(this.clienttwo.length == 0){
                this.gameInfo = '等待居居发牌，居居会帮你将卡牌排序'
                this.getCard('clienttwo',500)
                this.getCard('clientone',1000)
                this.getCard('clienttwo',1500)
                this.getCard('clientone',2000)
                this.getCard('clienttwo',2500)
                this.getCard('clientone',3000)
                this.getCard('clienttwo',3500)
                this.getCard('clientone',4000)
                setTimeout(()=>{
                    for(let i of this.clienttwo){
                        if(i.id == 24){
                            this.special24 = true
                        }else if(i.id == 25){
                            this.special25 = true
                        }
                    }
                    for(let i in this.clientone){
                        if(this.clientone[i].id == 24){
                            this.clientone[i].id = this.clientone[Math.floor(Math.random()*this.clientone.length)].id + 0.5
                            this.$store.commit('setClientone',this.clientone)
                        }else if(this.clientone[i].id == 25){
                            this.clientone[i].id = this.clientone[Math.floor(Math.random()*this.clientone.length)].id + 0.5
                            this.$store.commit('setClientone',this.clientone)
                        }
                    }
                    this.$store.commit('sortCards',this.clienttwo);
                    this.$store.commit('sortCards',this.clientone);
                    this.gameInfo = '请继续游戏，你可以选择拿牌或猜牌'
                },4500)
            }else{
                this.getCard('clienttwo',0)
                setTimeout(() => {
                    if(this.clienttwo[this.clienttwo.length-1].id == 24){
                        this.special24 = true
                    }else if(this.clienttwo[this.clienttwo.length-1].id == 25){
                        this.special25 = true
                    }else{
                        this.$store.commit('sortCards',this.clienttwo);
                    }
                }, 500);
                setTimeout(() => {
                    this.gameInfo = '机器人开始思考.'
                    setTimeout(() => {
                        this.gameInfo = '机器人开始思考..'
                    }, 500);
                    setTimeout(() => {
                        this.gameInfo = '机器人开始思考...'
                        if(this.clientone.length<9){
                            this.getCard('clientone',0)
                            setTimeout(() => {
                                if(this.clientone[this.clientone.length-1].id == 24){
                                    this.clientone[this.clientone.length-1].id = this.clientone[Math.floor(Math.random()*this.clientone.length)].id + 0.5
                                    this.$store.commit('setClientone',this.clientone)                    
                                }else if(this.clientone[this.clientone.length-1].id == 25){
                                    this.clientone[this.clientone.length-1].id = this.clientone[Math.floor(Math.random()*this.clientone.length)].id + 0.5
                                    this.$store.commit('setClientone',this.clientone)
                                }else{
                                    this.$store.commit('sortCards',this.clientone);
                                }
                                this.gameInfo = '请继续游戏，你可以选择拿牌或猜牌'
                            }, 500);
                        }else if(this.cards_pond.length == 0){
                            let item;
                            for(let i of this.clienttwo){
                                if(!i.show){
                                    if(i.number == '-' && this.specialItem !== i.id){
                                        this.gameInfo = '机器人猜错了，请继续游戏，你可以选择拿牌或猜牌'
                                        for(let j of this.clientone){
                                            if(!j.show){
                                                this.$store.commit('showCard',{'item':j,'client':'clientone'})
                                                break
                                            }else{
                                                continue
                                            }
                                            
                                        }
                                        this.specialItem = i.id
                                        this.gameInfo = '机器人连续推牌，猜错了一张牌'
                                        break
                                    }else{
                                        item = i
                                        this.$store.commit('showCard',{'item':item,'client':'clienttwo'})
                                        this.gameInfo = '机器人看透了你的卡牌'
                                    }
                                    
                                }
                            }
                        }else{
                            let item;
                            for(let i of this.clienttwo){
                                if(!i.show){
                                    if(i.number == '-' && this.specialItem !== i.id){
                                        this.gameInfo = '机器人猜错了，请继续游戏，你可以选择拿牌或猜牌'
                                        for(let j of this.clientone){
                                            if(!j.show){
                                                this.$store.commit('showCard',{'item':j,'client':'clientone'})
                                                break
                                            }else{
                                                continue
                                            } 
                                        }
                                        this.specialItem = i.id
                                        this.gameInfo = '机器人猜错了一张牌'
                                        break
                                    }else{
                                        item = i
                                        this.$store.commit('showCard',{'item':item,'client':'clienttwo'})
                                        this.gameInfo = '机器人猜中了你的牌，请继续游戏，你可以选择拿牌或猜牌'
                                        let random = Math.random()
                                        if(random <=0.3){
                                            this.gameInfo = '机器人连续推牌，猜错了一张牌'
                                            for(let j of this.clientone){
                                                if(!j.show){
                                                    this.$store.commit('showCard',{'item':j,'client':'clientone'})
                                                    break
                                                }else{
                                                    continue
                                                } 
                                            }
                                            let random2 = Math.random()
                                            if(random2 <=0.3){this.secret = !this.secret}
                                            break
                                        }else{
                                            continue
                                        }
                                        
                                    }
                                    
                                }
                            }
                        }
                    }, 1000);
                }, 1000);
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
        },
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
    font-size: 50px;
    margin: auto;
}
.desk{
    height: 250px;
}
#smallcard{
    width: 90px;
    height: 120px;
}
</style>