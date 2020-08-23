<template>
  <div class="about">
      <div class="split">typeof</div>
    <h1>typeof 1:{{text}}</h1>  
    <h1>typeof '1':{{text1}}</h1>    
    <h1>typeof false:{{text2}}</h1> 
    <h1>typeof undefined:{{text3}}</h1>    
    <h1>typeof null:{{text4}}</h1>    
    <h1>typeof Symbol('symbol'):{{text5}}</h1>  
    <h1>typeof function:{{text6}}</h1>    
    <h1>typeof []:{{text7}}</h1>  
    <h1>typeof {}:{{text8}}</h1>  
    <div class="split">instanceof</div>
    <h1>[] instanceof Array:{{text9}}</h1> 
    <h1>{} instanceof Object:{{text10}}</h1> 
    <h1>function(){} instanceof Function:{{text11}}</h1> 
    <h1>person instanceof Person:{{text12}}</h1> 
    <div class="split">Object.prototype.toString</div>
    <h1>Object.prototype.toString.call(1):{{text13}}</h1> 
    <h1>Object.prototype.toString.call("1"):{{text14}}</h1> 
    <h1>Object.prototype.toString.call(null):{{text15}}</h1> 
    <h1>Object.prototype.toString.call(function(){}):{{text16}}</h1> 
    <h1>Object.prototype.toString.call(true):{{text17}}</h1> 
    <h1>Object.prototype.toString.call({}):{{text18}}</h1> 

  </div>
</template>
<script>

export default {
  name: 'type',
  data() {
    return {
      text: "",
      text1:"",
      text2:"",
      text3:"",
      text4:"",
      text5:"",
      text6:"",
      text7:"",
      text8:"",
      text9:"",
      text10:"",
      text11:"",
      text12:"",
      text13:"",
      text14:"",
      text15:"",
      text16:"",
      text17:"",
      text18:""
    }
  },
  methods: {
    handleClick() {    
    }
  },
  created() {
  },
  mounted(){ 
      function Person(){

      }
      let person = new Person()
      this.text = typeof 1 
      this.text1 = typeof '1'  
      this.text2 = typeof true
      this.text3 = typeof a
      this.text4 = typeof null
      this.text5 = typeof Symbol('symbol')
      this.text6 = typeof function(){}
      this.text7 = typeof []
      this.text8 = typeof {}
      this.text9 = [] instanceof Array
      this.text10 = {} instanceof Object
      this.text11 = function(){} instanceof Function
      this.text12 = person instanceof Person
      this.text13 = Object.prototype.toString.call(1)
      this.text14 = Object.prototype.toString.call("1")
      this.text15 = Object.prototype.toString.call(null)
      this.text16 = Object.prototype.toString.call(function(){})
      this.text17 = Object.prototype.toString.call(false)
      this.text18 = Object.prototype.toString.call({})
  }
}
</script>
<style scope>
h1{
    line-height: 80px;
    border-bottom: black dashed;
}
.split{    
    width: 100%;
    color: white;
    background-color: black;
}

</style>