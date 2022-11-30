<template>
  <div>
    <h2>메인페이지</h2>
    <button @click="pageMove('declarativeRendering')">선언적 렌더링</button>
  </div>
</template>

<script>

import {cheol} from "@/plugins/cheol";
import recordDt from "@/assets/json/record"
import {computed} from "vue";


export default {
  name: "mainPage",
  setup() {
    const {$api,store,router} = cheol()

    const record = computed(()=> recordDt)
    console.log(JSON.stringify(record.value))
    const pageMove = (name) => {
      router.push(name)
      console.log("NAME : [" + name + "]")
    }
    // $api('d','d',{},(res)=>{
    //   //res.data
    // })
    return {pageMove }
  }
}
</script>

<style scoped>
  button {

  }
</style>