export const PDS = {
    namespaced: true,
    state: () => ({
        cls: {},
    }),
    mutations: {
        setCls(state, cls) {
            state.cls = cls

        },
        actions: {
            setCls({commit}, cls) {
                commit('setCls',cls)
            }
        },
        getters: {
            cls(state){
                return state.cls
            }
        },

    }
}