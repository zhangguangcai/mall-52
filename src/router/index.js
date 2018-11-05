import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import user from '@/views/user.vue'

Vue.use(Router)

export default new Router({
  routes: [{
        name: 'home',
        path: '/',
        // redirect:{name:'login'}
        component:Home,
        children:[{
          name:'user',
          path:'/user',
          component: user
        }]
  },
    {
       name:'login',
       path:'/login',
       component:Login
  }
]

   
  
})
