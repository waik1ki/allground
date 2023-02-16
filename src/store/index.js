import Vue from 'vue'
import Vuex from 'vuex'

import Admin from './modules/Admin.js'
import Auth from './modules/api/Auth.js'
import Board from './modules/api/Board.js'
import Setting from './modules/api/Setting.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminPage:false,
    showTipMessage:true,
    loading:true,
    menuList:[   // 헤더 탭 리스트 //
      { name:'About', title: 'About', icon: 'mdi-alpha-a', to:'/about'},
      { name:'Service', title: 'Service', icon: 'mdi-alpha-b', to:'/service'},
      { name:'News', title: 'News', icon: 'mdi-alpha-a', to:'/news'},
      { name:'Contact', title: 'Contact', icon: 'mdi-alpha-c', to:'/contact'},
    ],
    drawerBool:false,
  },
  mutations: {
    set_drawerBool(state,bool){
      state.drawerBool = bool;
    },
    set_loading(state,bool){
      state.loading = bool;
    },
    set_newsTab(state){
      state.menuList = state.menuList.filter((element)=> element.name !== 'News');
    },
    set_adminPage(state,bool){
      state.adminPage = bool;
    },
  },
  actions: {
  },
  modules: {
    Admin,
    Auth,
    Board,
    Setting
  }
})
