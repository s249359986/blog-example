<template>
  <div class="djx">    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'djx',
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang="less">
.djx {
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
