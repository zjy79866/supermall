import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

// 导入全局样式
import './assets/css/base.css'
// 导入字体图标
import './assets/fonts/iconfont.css'

import './plugins/element.js'
import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
