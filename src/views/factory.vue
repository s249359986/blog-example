<template>
  <div>  
      <div>{{curDevice}}  </div>
      <div>{{doFn}}  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import platform from '@/platform/index'

export default {
  name: 'djx',
   data () {
    return {
    }
  },
  computed: {
      curDevice() {
          console.log('platform',platform())        
          return `当前环境是: ${platform().name}`
      },
      doFn() {
          return `${platform().display()}`
      }
  },
  components: {
  }
}
</script>
<style scoped lang="less">
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
