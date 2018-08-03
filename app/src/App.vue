<template>
  <div id="app">
    <common-header></common-header>
    <router-view/>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  import CommonHeader from '@/components/common/Header'
  import CommonFooter from '@/components/common/Footer'
  import axios from 'axios'

  export default {
    store,
    name: 'App',
    components: {
      CommonHeader,
      CommonFooter
    },
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 1rem 0;
}
body{
  font-size: .32rem;
}
</style>
