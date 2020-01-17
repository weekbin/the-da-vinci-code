<template>
    <div>
        <h3>this is components--client1</h3>
        <div class="md-layout md-alignment-center-left">
            <div class="md-xlarge-size-6 md-large-size-7 md-medium-size-12" v-for="i in cards" :key="i.id">
                <md-card md-with-hover :style="`background-color:${i.bcolor}`" class="md-elevation-15">
                    <div style="display:flex;height:100%">
                        <div class="number" :style="`color:${i.color}`">{{i.number}}</div>
                    </div>
                </md-card>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name:'clientone',
    data(){
        return{
            cards:[
                {id:0, number:0, bcolor:'black', color:'white',show: false},
                {id:1, number:1, bcolor:'black', color:'white',show: false},
                {id:2, number:2, bcolor:'black', color:'white',show: false},
                {id:3, number:3, bcolor:'black', color:'white',show: false},
                {id:4, number:4, bcolor:'black', color:'white',show: false},
                {id:5, number:5, bcolor:'black', color:'white',show: false},
                {id:6, number:6, bcolor:'black', color:'white',show: false},
                {id:7, number:7, bcolor:'black', color:'white',show: false},
                {id:8, number:8, bcolor:'black', color:'white',show: false},
                {id:9, number:9, bcolor:'black', color:'white',show: false},
                {id:10, number:10, bcolor:'black', color:'white',show: false},
                {id:11, number:11, bcolor:'black', color:'white',show: false},
                {id:12, number:0, bcolor:'white', color:'black',show: false},
                {id:13, number:1, bcolor:'white', color:'black',show: false},
                {id:14, number:2, bcolor:'white', color:'blacke',show: false},
                {id:15, number:3, bcolor:'white', color:'black',show: false},
                {id:16, number:4, bcolor:'white', color:'black',show: false},
                {id:17, number:5, bcolor:'white', color:'black',show: false},
                {id:18, number:6, bcolor:'white', color:'black',show: false},
                {id:19, number:7, bcolor:'white', color:'black',show: false},
                {id:20, number:8, bcolor:'white', color:'black',show: false},
                {id:21, number:9, bcolor:'white', color:'black',show: false},
                {id:22, number:10, bcolor:'white', color:'black',show: false},
                {id:23, number:11, bcolor:'white', color:'black',show: false}
            ]
        }
    }

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