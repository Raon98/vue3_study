<template>
  <p>{{` RESULT : ${cnt1} `}}</p>
  <button @click="increase()">[+]</button>
  <button @click="decrease()">[+]</button>
</template>

<script>
import {ref} from "vue";

export default {
  name: "eventListenerEx",
  setup() {
    const cnt1 = ref(0)

    const increase = () => {
      cnt1.value++
    }

    const decrease = () => {
      cnt1.value--
    }

    return{cnt1,increase,decrease}
  }
}
</script>

<style scoped>

</style>