import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import classify from './classify'
import cat from './alliance'
import shopcar from './shopcar'
import mine from './mine'
import goods from './shoplist'
import xq from './xq'
import pj from './pj'
import page from './page'
import search from './search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    home,
    classify,
    cat,
    shopcar,
    mine,
    goods,
    page,
    search,
    // xq,
    // pj,
    {
      path:"**",
      redirect:"/home"
    }
  ]
})