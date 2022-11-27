<template>
  <div>
    <h2>메인페이지</h2>
    <button @click="pageMove('declarativeRendering')">선언적 렌더링</button>
  </div>
</template>

<script>
import {router} from "@/router";
import {ref} from "vue";
import {cheol} from "@/plugins/cheol";


export default {
  name: "mainPage",
  setup() {
    const {store} = cheol()
    const pageMove = (name) => {
      router.push(name)
      console.log("NAME : [" + name + "]")
    }
    return {pageMove }
  }
}
</script>

<style scoped>
  button {

  }
</style>