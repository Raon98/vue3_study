<template>
  <div style="width: 200px">
    <ol>
      <li v-for="(item,i) in itemList" :key="item">
        <p>우리의 이름은 ? : {{item.name}}</p>
        <p>우리의 성별은 ? : {{item.sex}}</p>
        <p>우리의 나이은 ? : {{item.age}}</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "v-forEx",
  setup() {
    const itemList = [{id: '1', name: 'sungcheol', sex: 'men', age: "25"},
      {id: '2', name: 'goeun', sex: 'girl', age :"24"}
    ]

    return {itemList}
  }

}
</script>

<style scoped>

</style>