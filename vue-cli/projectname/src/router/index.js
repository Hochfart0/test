import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test';
import Index from '@/components/Index';
import SubTest1 from '@/components/SubTest1';
import SubTest2 from '@/components/SubTest2';
import Error from '@/components/Error';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
      
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: Test,
      children:[
        {
          path: '/test/subTest1',
          component: SubTest1
        },
        {
          path: '/test/subTest2',
          component: SubTest2
        }
      ]
    },
    {
      path: '*',
      component: Error
    },
    /* {
      path: '/index',
      name: 'index',
      component: Index,
      beforeEnter(to, from, next){
        console.log(to)
        console.log(from)
        console.log(next)
      }
    } */
  ]
})
