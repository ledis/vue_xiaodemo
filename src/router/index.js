import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Index from '@/components/index'*/
import Home from '@/components/newWeb/Home'
import Follow from '@/components/newWeb/Follow'
import Column from '@/components/newWeb/Column'
import UserInfo from '@/components/newWeb/UserInfo'
import UserLogin from '@/components/newWeb/UserLogin'
import UserReg from '@/components/newWeb/UserReg'
import Article from '@/components/newWeb/Article'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/follow',
      component:Follow
    },
    {
      path:'/column',
      component:Column
    },
    {
      path:'/user-info',
      component:UserInfo
    },
    {
      path:'/user-login',
      component:UserLogin
    },
    {
      path:'/user-reg',
      component:UserReg
    },
    {
      path:'/article/:id',
      component:Article
    }
  ]
  /*routes: [
  	{
  		path:'',
  		redirect:'/index'
  	},
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]*/
})
