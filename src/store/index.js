import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import alliance from './alliance/index'



import Tui from './tuijian/index'
import Guo from './guoji/index'
import Cloth from './cloth/index'
import Food from './food/index'
import Food1 from './food1/index'
import Snacks from './snacks/index'
import Toy from './toy/index'
import Clear from './clear/index'
import Health from './health/index'
import Nurse from './nurse/index'
import Lift from './lift/index'
import Traction from './traction/index'
import Hairdress from './hairdress/index'
import Bath from './bath/index'
import Search from './search/index'
import Brand from './brand/index'
import page from './page/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    home,
    alliance,
    Tui,
     Guo,
     Cloth,
     Food,
     Food1,
     Snacks,
     Toy,
     Clear,
     Health,
     Nurse,
     Lift,
     Traction,
     Hairdress,
     Bath,
     Search,
     Brand,
     page
  }
})