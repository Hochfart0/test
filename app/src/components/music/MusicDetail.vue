<template>
    <div>
        <aplayer autoplay :list="musicdata" v-if="isShow" :showLrc="true"
            :music="musicdata[0]"
        />
    </div>
</template>

<script>
    import aplayer from 'vue-aplayer'
    import axios from 'axios'
    export default {
        data() {
            return {
                musicdata: [],
                isShow: false
            }
        },
        components:{
            aplayer
        },
        created() {
            axios.get(`./static/data/musicdata.json`).then(res =>{
                res.data.musicData.forEach(obj => {
                    this.musicdata.push({
                        src:obj.src,
                        title:obj.title,
                        artist:obj.author,
                        pic:obj.musicImgSrc,
                        lrc:obj.lrc
                    });
                    this.isShow = true;
                });
            }).catch(res => {
                console.log('获取数据失败');
            });
        },
    }
</script>

<style scoped>

</style>