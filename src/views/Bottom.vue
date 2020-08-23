<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>    
    <HelloWorld msg="Welcome to Your Vue.js App"/>    
    <HelloWorld msg="Welcome to Your Vue.js App"/>    
    <HelloWorld msg="Welcome to Your Vue.js App"/>    
      <div class="btn-wrap">
      <div class="btn" >限时元</div>
    </div>
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
// .btn {
//   position:fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: red;
//   opacity: 0.7;
//   height: 100px;
//   line-height: 100px;
//   width: 100%;
//   color:white;
// }
 .btn-wrap {
    position: fixed;
    transform: translate3d(0, 0, 0);
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    width: 100%;
    height: 164px;
    padding: 32px;
    box-sizing: border-box;
    .btn {
      flex: 1;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      color: white;
      background-image: linear-gradient(135deg, #f22d15 0%, #f86947 100%);
      border-radius: 12px;
      font-size: 32px;
      color: #ffffff;
    }
  }
</style>
