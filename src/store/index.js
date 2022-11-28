import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";

import * as modules from "./modules";

export default createStore({
    modules: modules.default,
    plugins: [
        createPersistedState({
            paths: ["PDS.cls"],
            storage: window.localStorage
        })
    ]
})