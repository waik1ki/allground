import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  state:{
    newsTab:false,
  },
  mutations:{
    set_newsTab(state,bool){
      state.newsTab = bool;
    },
  },
  actions:{
    get_setting_find(m){
      axios.get('api/setting/find')
      .then((res)=>{
        if(res.data[0].newsTab) m.commit('set_newsTab',true);
        else m.commit('set_newsTab',false);
      })
    },
    put_setting_edit(m,opt1){
      axios.put('api/setting/edit',{
          id:'6099ee9c12ec2fd58286e8d8',
          newsTab:opt1
      })
      .then((res)=>{
        if(res.data==='not_logged'||res.data==='not_admin'){
          alert('권한이 없습니다.');
          return;
        }
        if(res.data==='updated'){
          alert('적용 되었습니다.');
          return;
        }
      })
    }
  },
}