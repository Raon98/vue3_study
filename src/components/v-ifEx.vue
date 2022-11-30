<template>
  <p>현재 CNT : {{cnt}}</p>
  <p v-if="cnt > 5">cnt값이 5보다 작습니다.</p>
  <p v-else>cnt값이 5보다 큽니다.</p>
  <button @click="increase">증가버튼</button>
</template>

<script>
import {ref} from "vue";

export default {
  name: "v-ifEx",
  setup () {
    const cnt = ref(0)

    const increase = () => {
      cnt.value++
    }
    return {cnt,increase}
  }
}
</script>

<style scoped>

</style>