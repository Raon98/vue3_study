import isEmpty from "lodash/isEmpty";

export default {
    install: (app, {store}) => {
        const utils = {
            isEmpty(value) {
                return isEmpty(value)
                store.commit('PDS',value)
            }
        }
        app.provide('$utils', utils)
        app.config.globalProperties.$utils = utils
    },
}