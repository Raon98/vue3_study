<template>
    <p>count_c_1 : {{count_c_1}}</p>
    <button @click="count_c_1++">count_c_1 증가</button>
    <p>count_c_2 : {{count_c_2}}</p>
    <button @click="count_c_2++">count_c_2 증가</button>
    <p>{{state}}</p>
    <button @click="onStop()">watchEffect 중지</button>
</template>

<script>
import {ref, watch, watchEffect} from "vue";

export default {
  name: "watchEx",
  setup() {
      const count_c_1 = ref(0)
      const count_c_2=  ref(0)
      const state = ref("실행중")
      watch(count_c_1,(cur,prev) => {
          console.log('Composition API Watch' + prev + "=>" + cur)
      },{
          immediate : true
      }
      )

      watch([count_c_1, count_c_2], (cur,prev) => {
        console.log("Composition API Multiple Watch" + prev + "=>" + cur)
      })
      const stop = watchEffect(()=>{
          console.log("Composition API watchEffect Called" + count_c_2.value)
      },{
        flush :'post'
      })

      const onStop= () => {
        state.value = "중지"
        stop()
    }
    return {
      count_c_1,
      count_c_2,
        onStop,state

    }
  }
}
</script>

<style scoped>

</style>