import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count:'count',
    bg:'red',
    num: 20,
    x: 100
}
const mutations = {
    add(state,sum){
        state.count+=sum;
    }
}
const getters = {
    count1(state){
        return state.count + state.num
    }
}
const actions = {
    addAction({commit},x){
        commit('add',x);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

