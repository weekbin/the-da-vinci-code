<template>
    <div>
        <h1>this is views--frontpage</h1>
        <clientone></clientone>
        <computer></computer>
        <clienttwo></clienttwo>
    </div>
</template>

<script>
import computer from '@/components/computer'
import clientone from '@/components/clientone'
import clienttwo from '@/components/clienttwo'


export default {
    name: "frontpage",
    components: {computer,clientone,clienttwo}

}
</script>

<style scoped>

</style>