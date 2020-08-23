<template>
  <div class="about">
    <h1>{{text1}}{{text}}{{text2}}</h1>
    <button @click="handleClick">我是按钮</button>
  </div>
</template>
<script>

const obj = {
    name: 'Jerry',
    greet:()=> {      
    }
}
obj.greet()


export default {
  name: 'qcode',
  data() {
    return {
      text1: "hello1"
    }
  },
  methods: {
    handleClick() {
      this.$nextTick(() => {
        this.text2 = "aa"
      })
    }
  },
  created() {



    this.text = "qqq"
  },
  mounted(){
    this.text2 = "3333"
    console.log("----",this)
  }
}
</script>