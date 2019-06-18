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
// 可以直接使用 commit方法
const actions = {
    actionsAddCount(context,n=0){
        console.log(context);
        return context.commit('mutationsAddCount',n)
    },
    actionsReduceCount({commit},n=0){
        return commit('mutationsReduceCount',n)
    }
}
// 我们一般使用getters来获取我们的state，因为它算是state的一个计算属性
const getters = {
    gettersCount(state,n=0){
        return (state.count+=n)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
