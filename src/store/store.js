import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cards_pond:[
            {id:1,  number:0,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:3,  number:1,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:5,  number:2,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:7,  number:3,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:9,  number:4,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:11,  number:5,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:13,  number:6,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:15,  number:7,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:17,  number:8,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:19,  number:9,  background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:21, number:10, background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:23, number:11, background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:25, number:'-', background_image:'https://www.weekbin.life/static/image/pig1.png', color:'white', show: false},
            {id:0, number:0, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:2, number:1, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:4, number:2, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:6, number:3, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:8, number:4, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:10, number:5, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:12, number:6, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:14, number:7, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:16, number:8, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:18, number:9, background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:20, number:10,background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:22, number:11,background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
            {id:24, number:'-', background_image:'https://www.weekbin.life/static/image/pig2.jpg', color:'black', show: false},
        ],
        clientone:[
            
        ],
        clienttwo:[
            
        ],
	},
	mutations: {
        sortCards(state,input_list){
            let sort_list = input_list.sort(function(first_obj,second_obj){
                let first_value = first_obj['id'];
                let second_value = second_obj['id'];
                return first_value - second_value;
            })
            state.input_list = sort_list;
        },
        specialCard(state,client){
            if(client == 'clientone'){
                state.clientone[state.clientone.length-1]['id'] = state.clientone[state.clientone.length-2]['id'] + 0.5
            }else if(client == 'clienttwo'){
                state.clienttwo[state.clienttwo.length-1]['id'] = state.clienttwo[state.clienttwo.length-2]['id'] + 0.5
            }else{
                throw new Error('wrong parma, please input chart \'clientone\' or \'clienttwo\'')
            }
        },
        showCard(state,item){
            let index = item.id
            for(let i of state.clientone){
                window.console.log(i.id,item.id)
                if(i.id == index){
                    i.show = true
                }
            }
        },
		setClientone(state,clientone_cards){
            state.clientone = clientone_cards;
        },
        setClienttwo(state,clienttwo_cards){
            state.clienttwo = clienttwo_cards;
        },
        setCards_pond(state, cards_pond){
            state.cards_pond = cards_pond;
        },
        washCardsInPond(state){
            let cardsInPond = [];
            for(let i in state.cards_pond){
                cardsInPond.push(state.cards_pond[i]);
            }
            let length = cardsInPond.length;
            for(let i in cardsInPond){
                let randomIndex = Math.floor(Math.random()*length);         
                let a = cardsInPond[i];
                cardsInPond[i] = cardsInPond[randomIndex];
                cardsInPond[randomIndex] = a;
            }
            state.cards_pond = cardsInPond;
        },
        getCard(state){
            if(state.cards_pond.length>0){
                state.clientone.push(state.cards_pond.pop(Math.floor(Math.random()*state.cards_pond.length)));
                state.clienttwo.push(state.cards_pond.pop(Math.floor(Math.random()*state.cards_pond.length)));
            }else{
                window.alert('you can\'t get card')
            }
            

        }
	},
	actions: {
		
	},
	getters:{
        getCardsQuantity(state){
            let quantity = state.cards_pond.length;
            if(quantity){
                return quantity;
            }else{
                return new Error("there is no left card!")
            }
            
        }
	}
})