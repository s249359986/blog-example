
import app from './app'
import h5 from './h5'
import mini from './mini'
import wechat from './wechat'
function _getUA() {
  return navigator.userAgent.toLowerCase();
}

if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
  document.addEventListener('WeixinJSBridgeReady', judgePlatform, false)
}
judgePlatform()
let platform
function judgePlatform() {
  platform = 'h5'
  if (window.__wxjs_environment === 'miniprogram' ||
    window.navigator.userAgent.toLowerCase().indexOf('miniprogram') >= 0) {
    // 小程序
    platform = 'mini'
  } else if (/micromessenger/.test(_getUA())) {
    platform = 'wx'
  }
  return platform
}

function getInstance() {
  let instance
  switch (platform) {
    case 'app':
      instance = app
      break
    case 'mini':
      instance = mini
      break
    case 'wx':
      instance = wechat
      break
    case 'h5':
    default:
      instance = h5
      break
  }
  return instance
}
export default getInstance
