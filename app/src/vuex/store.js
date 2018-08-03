import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    title: ['Movie','Music','Book','Picture'],
    bg: ['#5490ff','#ff99ff','green','#66cccc'],
    idx: 0,
    isSelected:false,
}

const mutations = {
    change(state,num){
        state.idx = num;
    },
    create(state,str) {
        // console.log(this);
        switch (str){
            case 'movie':
                state.idx = 0;
                break;
            case 'music':
                state.idx = 1;
                break;
            case 'book':
                state.idx = 2;
                break;
            case 'images':
                state.idx = 3;
                break;
        }
    },
    /* go (){
        console.log(this);
        // this.$router.push(address)
    }, */
}

export default new Vuex.Store({
    state,
    mutations
});

