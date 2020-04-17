<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>    
    <HelloWorld msg="Welcome to Your Vue.js App"/>    
    <HelloWorld msg="Welcome to Your Vue.js App"/>    
    <HelloWorld msg="Welcome to Your Vue.js App"/>    
    <div class="btn">按钮</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang="less">
.home{
  padding-bottom: 100px;
}
.btn {
  position:fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
  opacity: 0.7;
  height: 100px;
  line-height: 100px;
  width: 100%;
  color:white;
}
</style>
