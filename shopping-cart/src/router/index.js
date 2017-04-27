import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const router = new VueRouter({
	routes:[{
    path:'/index',component:require('../components/index')
  },{
    path:'/cart',component:require('../components/cart')
  },{
    path:'*',redirect:'/index'  //默认为index 页面 
  }]
});


export default router;
