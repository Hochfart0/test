<template>
    <div>
        <ul class="musicList">
            <li v-for="(obj,index) in musicList" :key="index" @click="musicDetail(obj.id)">
                <div class="music-img">
                    <img :src="obj.bg" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                musicList: []
            }
        },
        methods:{
            musicDetail(id){
                this.$router.push(`/music/MusicDetail/${id}`);
            }
        },
        created() {
            axios.get(`./static/data/musiclist.json`).then(res =>{
                this.musicList = this.musicList.concat(res.data.albums);
            }).catch(res => {
                console.log('获取数据失败');
            });
        },
    }
</script>

<style scoped>
    .musicList{
        /* font-size: 0; */
        display: flex;
        flex-wrap: wrap;

    }
    .musicList li{
        flex-grow: 1;

    }
    .music-img img{
        display: block;
        width: 100%;
    }
</style>