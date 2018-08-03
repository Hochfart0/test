<template>
    <div :style="{'background':bg}">
        <h2>首页</h2>
        <h3>{{count}} {{num}}</h3>
        <button @click="add(20)">+++</button>
        <h3>getter: {{count1}}</h3>
        <button @click="addAction(100)">act</button>

    </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState,mapMutations, mapGetters, mapActions} from 'vuex'
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['count','num','bg']),
            ...mapGetters(['count1'])
        },
        methods: {
            ...mapMutations(["add"]),
            ...mapActions(['addAction','reduceAction'])
        },
        store
    }
</script>

<style scoped>
    div{
        background: #00ff00;
    }
</style>