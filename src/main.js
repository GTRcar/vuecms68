// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入mui的样式  直接用import引入会报错不支持模块化引入import
// 如果想用需要配置
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router'

// 引入ui库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


// 在使用陌生的组件库时，需要先使用js  在使用css 
// 因为不是所有的都支持模块化import引入  如果js有效会显示按钮
// 如果使用css时候效果会报错那就是这里css本身的问题
Vue.use(MintUI)

// 引入mui样式
import './lib/mui/css/mui.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
