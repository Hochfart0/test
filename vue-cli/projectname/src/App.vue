<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <button @click="goHome">首页</button>
    <button @click="goBack">后退</button>
    <button @click="goForward">前进</button><br>
    <router-link to="/test">test</router-link>
    <router-link to="/ ">首页</router-link>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goHome(){
      this.$router.push('/')
    },
    goForward(){
      this.$router.go(1)
    },
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s;
}
.fade-enter-to{
  opacity: 1;
}

</style>
