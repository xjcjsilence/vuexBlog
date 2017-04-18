import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//const Project = resolve => require(['./components/Project.vue'], resolve)

import Project from './components/Project'
import ProjectInfo from './components/ProjectInfo'
import StartPage from './components/StartPage'
import Flower from './components/Flower'
import Module from './components/Module'
import Page from './components/Page'
import Menu from './components/Menu'
import PageModule from './components/PageModule'
import Build from './components/Build'
import Setting from './components/Setting'

import store from './store'


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/login', component: Project },

]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.path == '/') {
        return next('/login')
    }


    next()
})

export default router
