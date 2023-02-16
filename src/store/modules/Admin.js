export default{
  state: {
    aDrawerBool:true,
    aMenuList:[
      {title:'게시물 관리',to:0,subMenu:[{title:'게시물 보기',to:0},{title:'게시물 쓰기',to:2}]},
      {title:'기타 설정',to:3,subMenu:[{title:'setting',to:3}]},
    ],
  },
  mutations: {
    set_aDrawerBool(state,bool){
        state.aDrawerBool = bool;
    },
  },
}