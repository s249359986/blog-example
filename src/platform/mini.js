import IBase from './interface'
class Mini extends IBase {
  name = 'mini' 
  
  display() {
    return "执行display方法"
  } 
}

let mini = new Mini()
export default mini
