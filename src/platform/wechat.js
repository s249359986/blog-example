import IBase from './interface'
class Wechat extends IBase {
  name = 'wechat' 
  
  display() {
    return "执行display方法"
  } 
}

let wechat = new Wechat()
export default wechat
