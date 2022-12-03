<template>
    <p>{{`[${msg}] : ${msg2}`}}</p>
    <emit-component-ex v-model:msg="msg" v-model:msg2="msg2"/>
</template>

<script>
import emitComponentEx from "@/components/emitComponentEx";
import {computed, ref, watch} from "vue";

export default {
  name: "v-modelDirective",
  components : [emitComponentEx],
  setup () {
      const msg = ref("초기데이터")
      const msg2 = ref("초기데이터2")
    return { msg , msg2}
  }

}
</script>

<style scoped>

</style>