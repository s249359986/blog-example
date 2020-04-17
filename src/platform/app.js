import IBase from './interface'
class App extends IBase {
  name = 'app' 
  display() {
    return "执行display方法"
  } 
}
let app = new App()
export default app
