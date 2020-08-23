<template>
  <div class="qcode">
    <canvas style="width:200px;height:200px;" id="decode-canvas"></canvas>
    <input  type="file" accept="image/*" @change="handleChange" capture="camera" />

    <div>识别：{{text}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Decoder } from '@nuintun/qrcode'
const qrcode = new Decoder()
let context = ''
let canvas = ''
let imageData = ''

function drawImage(src, cb) {
  var img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function () {
    var width = img.width;
    var height = img.height;
    var actualWidth = Math.min(960, width);
    var actualHeight = height * (actualWidth / width);    
    canvas.width = actualWidth;
    canvas.height = actualHeight;
    context.drawImage(img, 0, 0, width, height, 0, 0, actualWidth, actualHeight);
    imageData = context.getImageData(0, 0, actualWidth, actualHeight);
    cb(imageData)
  };
  img.src = src;
}



export default {
  name: 'qcode',
   data () {
     return {
       text:""
     }
   },
  methods: {
    readFile(file, cb) {
      let fileReader = new FileReader()
      fileReader.onload = cb
      fileReader.readAsDataURL(file)
    },
    handleChange(obj) {
      console.log("handleChange", obj['target']['files'][0])
      this.text = '识别中...'
      this.readFile(obj['target']['files'][0], data => {
        console.log("handleChange:data", data['target']['result'])
        drawImage(data['target']['result'], formatImageData => {
          let resutl = qrcode.decode(formatImageData.data, formatImageData.width, formatImageData.height)
          console.log("识别内容",resutl.data) 
          this.text = resutl.data
        })
      })
    }
  },
  created() {   
  },
  mounted() {
     canvas = document.getElementById('decode-canvas')
    context = canvas.getContext('2d')

  }
}
</script>
<style scoped lang="less">
</style>
