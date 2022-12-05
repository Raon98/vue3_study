<template>
  <v-container>
    <h1>파일업로더</h1>
    <input id="file-selector"
          ref="file"
          type="file"
           @change="handleFileUpLoad()"
    >
  </v-container>
</template>

<script>
import AWS from 'aws-sdk'
export default {
  name: "awsEx",
  setup() {

    const handleFileUpLoad = () => {
      console.log("파일이 업로드돼었습니다.")
    }

    return { handleFileUpLoad}
  }

}
</script>

<style scoped>

</style>