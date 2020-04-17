<template>
  <div class="home">
    <div class="main">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <div class="btn">按钮</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main {
  overflow-y: auto;
  flex-shrink: 1;
  flex-grow: 1;
}
.btn {
  flex: 0 0 auto;
  background-color: red;
  opacity: 0.7;
  height: 100px;
  line-height: 100px;
  width: 100%;
  color: white;
}
</style>
