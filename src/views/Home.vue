<template>
  <div class="home">
    <a href="#/bottom">bottom-fied</a>
    <a href="#/bottom2">bottom-flex</a>

    <a href="#/djx">对角线</a>
    <a href="#/factory">工厂模式</a>
    <a href="#/cssGrid">grid网格</a>
    <a href="#/qcode">二维码</a>
    <a href="#/type">typeof 和 instanceof</a>
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
a {
  color: #333333;
  display: block;
}
</style>
