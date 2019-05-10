// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 步骤一：引入vue-router
import VueRouter from 'vue-router'
// 引入子组件HelloWorld.vue
import HelloWorld from './components/HelloWorld'
// 引入子组件Children
import Children from './components/Children'
Vue.config.productionTip = false
// 步骤二：安装router插件
Vue.use(VueRouter)
// 步骤三：创建路由对象和路由规则
const router = new VueRouter({
  routes:
    [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }, {
        // 注册Children组件进入路由对象中
        path: '/children',
        name: 'Children',
        component: Children
      }

    ],
  mode: 'history'// 切换为history模式
})
// 注册Editor
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  // 步骤四：将路由对象传递给vue实例中，在传递给其他的子组件
  template: '<App/>'

})
