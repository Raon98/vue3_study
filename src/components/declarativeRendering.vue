<template>
  <div>
    <h3>선언적 렌더링</h3>
    <div id="date"> 날짜 데이터 확인 : {{ date }}</div>
    <div id="dayjs"> DAYJS 날짜 데이터 확인 : {{ day }}</div>
  </div>
  <div>
    <h3>반응형 변수 사용법</h3>
    <p>줄임말과 원래말을 입력하세요.</p>
    <input type="text" v-bind:value="abbr"/>
    <input type="text" v-model="normal"/>
    <hr/>
    <abbr v-bind:title="normal">{{abbr}}</abbr>
  </div>
</template>

<script>
import dayjs from "dayjs";
import {ref} from "vue";
import {cheol} from "@/plugins/cheol";

export default {
  name: "declarativeRendering",
  setup() {
    const {router,store} = cheol()
    const date = Date().toString()
    console.log(date)

    const day = dayjs().format('hh:mm:ss');
    console.log(day)

    const abbr = ref('DOPT')
    const normal = ref('Cheol Project Team')

    return {date, day, abbr,normal}
  }


}
</script>

<style scoped>

</style>