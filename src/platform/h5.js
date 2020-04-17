import IBase from './interface'
class H5 extends IBase {
  name = 'h5' 
  display() {
    return "执行display方法"
  } 
}

let h5 = new H5()
export default h5
