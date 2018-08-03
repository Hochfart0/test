<template>
    <div>
        <div class="footer" :style="{'background':bg[idx]}">
            <ul>
                <li @click="change(0)"><router-link to="/movie/MovieList">电影</router-link></li>
                <li @click="change(1)"><router-link to="/music/MusicList">音乐</router-link></li>
                <li @click="change(2)"><router-link to="/book/BookList">书籍</router-link></li>
                <li @click="change(3)"><router-link to="/images/ImagesList">图片</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        store,
        computed:{
            ...mapState(['bg','idx','isSelected'])
        },
        methods:{
            ...mapMutations(['change','create'])
        },
        created() {
            window.onhashchange = ()=>{
                let url = this.$route.path;
                let str = url.split('/')[1];
                this.create(str);
            }
            // console.log(this);
            let url = this.$route.path;
            let str = url.split('/')[1];
            this.create(str);


            // window.onstate
        },
        updated() {
            let url = this.$route.path;
            let str = url.split('/')[1];
            this.create(str);
        },
    }
</script>

<style scoped>
    .footer{
        height: 1rem;
        background: #5490ff;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .footer ul{
        display: flex;
    }
    .footer li{
        flex: 1;
        height: 100%;
        text-align: center;
        line-height: 1rem;
        color: #ffffff;
    }
    .footer a{
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #ffffff;
    }
    .footer .router-link-active{
        color: #ccc;
    }
</style>