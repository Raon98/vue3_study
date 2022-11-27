// import {createStore} from "vuex";
// import { counter } from "@/store/modules/counter";
// import { moduleA } from "@/store/modules/moduleA";
// import {infoData} from "@/store/modules/infoData";
//
// export default createStore({
//     //모듈로 분리형
//     modules: {  moduleA,counter,infoData }
//
//     //하나로 사용
//     // count state 속성 추가
//     // state: {
//     //     counter: 10
//     // },
//     // getters: {
//     //     time2(state) {
//     //         return state.counter * 2;
//     //     }
//     // },
//     // mutations: {
//     //     setCounter(state, value) {
//     //         state.counter = value;
//     //     }
//     // }
// });

//모듈 합치기
const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
    if (key === '.index.js') return
    modules[key.replace(/(\.\/|\.js)/g,'')] = files(key).default
})

export  default modules