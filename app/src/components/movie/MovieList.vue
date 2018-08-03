<template>
    <div class="contained">
        <ul>
            <li class="movieList" v-for="(obj,index) in movieList" :key="index" @click="goDetail(obj.id)">
                <div class="movie-img">
                    <img :src="obj.img" alt="">
                </div>
                <div class="movie-info">
                    <h3>{{obj.nm}}</h3>
                    <p v-if="obj['3d']">3D</p>
                    <p>{{obj.cat}}</p>
                    <p>主演：{{obj.star}}</p>
                    <p>{{obj.showInfo}}</p>
                </div>
            </li>
        </ul>
        <div v-show="isShow">
            <img src="@/assets/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    // import store from '@/vuex/store'
    // import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        data() {
            return {
                movieList: [],
                isShow: false,
                resultLength: 0,
            }
        },
        methods: {
            load(){
                axios.get(`./static/data/moviedata${this.movieList.length}.json`).then(res =>{
                    this.resultLength = res.data.data.movies.length;
                    this.movieList = this.movieList.concat(res.data.data.movies);
                    this.isShow = false;
                }).catch(res => {
                    console.log('获取数据失败');
                });
            },
            goDetail(id){
                // console.log(this);
                this.$router.push(`/movie/MovieDetail/${id}`);
            }            
        },
        created() {
            this.load('moviedata0.json');
            window.onscroll = () => {
                let scrollTop = document.documentElement.scrollTop;
                let height = document.documentElement.scrollHeight;
                let clientHeight = document.documentElement.clientHeight;
                if(scrollTop + clientHeight >= height - 1){
                    if(this.resultLength == 10){
                        this.isShow = true;
                        this.load();
                    }
                }
            }
        },
        
    }
</script>

<style scoped>
    .movieList{
        display: flex;
        padding: 0.2rem;
        font-size: 14px;
        line-height: 1.8;
    }
    .movie-img{
        flex-grow: 1;
        margin-right: 0.1rem;
        width: 0px;
    }
    .movie-img img{
        width: 100%;
    }
    .movie-info{
        width: 0px;
        flex-grow: 2;

    }
</style>