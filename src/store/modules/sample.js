export default {
    namespace: true,
    state: {
        cls: { //초기화하는공감
            a: '',
            b: ''
        }
    },
    mutations: {
        setItem(state,cls){
            state.cls = cls
        }
    },
    action: {
        setItem({commit}, item) {
            commit('setCls', item)
        }
    },
    getters: {
        cls(state){
            return state.cls
        }
    }
}