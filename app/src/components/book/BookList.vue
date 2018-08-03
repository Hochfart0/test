<template>
    <div>
        <div>{{bookList[index]}}</div>
        <button @click="changes(0)">第一个</button>
        <button @click="changes(1)">第二个</button>
        <button @click="changes(2)">第三个</button>
        <button @click="changes(3)">第四个</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bookList: ['111111','222222','333333','444444'],
                index: 0,
            }
        },
        methods:{
            changes(idx){
                this.index = idx;
            }
        },
        created() {
            var timer = setInterval
        },
    }
</script>

<style scoped>

</style>