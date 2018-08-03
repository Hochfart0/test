<template>
    <div>
        <div class="header" :style="{'background':bg[idx]}">
            <span class="header-index" @click="change(0)"><router-link to="/movie/MovieList">首页</router-link></span>
            <span class="header-title">{{title[idx]}}</span>
            <span></span>
        </div>

    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        store,
        computed:{
            ...mapState(['title','bg','idx'])
        },
        methods:{
            ...mapMutations(['change'])
        }
        /* computed: {
            ...mapState(['title','bg'])
        } */
    }
</script>

<style scoped>
    .header{
        display: flex;
        height: 1rem;
        width: 100%;
        background: #5490ff;
        position: fixed;
        top: 0;
    }
    .header span{
        height: 100%;
        text-align: center;
        line-height: 1rem;
        width: 1rem;
        color: #ffffff;
    }
    .header a{
        color: #fff;
    }
    .header .header-title{
        flex: 1;
        font-size: .64rem;
    }
</style>