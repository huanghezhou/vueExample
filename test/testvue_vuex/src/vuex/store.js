import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count : 0
}
const mutations = {
    mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
}
// context，它是一个和store对象具有相同对象属性的参数
// 在第二个函数中，我是直接使用了这个对象的commit的方法
const actions = {
    actionsAddCount(context,n=0){
        console.log(context);
        return context.commit('mutationsAddCount',n)
    },
    actionsReduceCount({commit},n=0){
        return commit('mutationsReduceCount',n)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})
