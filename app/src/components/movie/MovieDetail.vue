<template>
    <div>
        <div>
            <img :src="movieDetail.img" alt="">
            <p>{{movieDetail.nm}}</p>
            <p>{{movieDetail.sc}}</p>
            <p>{{movieDetail.cat}}</p>
            <p>{{movieDetail.src}}</p>
            <p>{{movieDetail.rt}}</p>
        </div>


        <div>
            <h2>主演</h2>
            <p>{{movieDetail.star}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieDetail: {}
    };
  },
  created() {
    axios
      .get(
        `./static/data/moviedetail.json?movieId=${this.$route.params.movieId}`
      )
      .then(res => {
        this.movieDetail = res.data.data.MovieDetailModel;
      })
      .catch(res => {
        console.log("获取数据失败");
      });
  }
};
</script>

<style scoped>
</style>