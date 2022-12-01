<template>
  <h2>Big item</h2>
  <p v-for="(item,i) in big_item" :key="i"> {{item.text}}</p>
  <h2>Small item</h2>
  <p v-for="(item,i) in small_item" :key="i"> {{item.text}}</p>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "computedEx",
  setup() {
    const arr = ref([{id: 1, text: '1번 아이템'}, {id: 2, text: '2번 아이템'}, {id: 3, text: '3번 아이템'}
        , {id: 4, text: '4번 아이템'}, {id: 5, text: '5번 아이템'}])

    const small_item = computed(()=>{
      return arr.value.filter(value => value.id <3)
    })

    const big_item = computed(()=>{
      return arr.value.filter(value => value.id >=3)
    })


    return {arr,small_item,big_item}
  }
}
</script>

<style scoped>

</style>