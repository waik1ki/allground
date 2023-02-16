<template>
  <div class="d-flex justify-center align-center" style="height:100vh;">
    <v-container>
      <v-row  v-if="!logged" class="d-flex justify-center">
        <v-col cols="6">
          <v-text-field color="black" v-model="id" hide-details solo label="아이디"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col v-if="!logged" cols="6">
          <v-text-field  type="password" v-model="password" hide-details solo label="비밀번호"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col class="d-flex justify-center" align-self="center" cols="6">
          <v-btn v-if="!logged" @click="clickLogin">로그인</v-btn>
          <v-btn v-if="logged" @click="clickLogout">로그아웃</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
  mounted() {
    axios.get('api/auth/check')
    .then((res)=>{
      if(res.data.success===true) this.logged=true;
      else this.logged=false;
    })
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},0 );
    });
  },
  data(){
    return{
      id:'',
      password:'',
      logged:false,
    }
  },
  methods:{
    clickLogin(){
      axios.post('api/auth/login',{
        id:this.id,
        password:this.password
      })
      .then((res)=>{
        if(res.data==='already_logged_in'){
          alert('이미 로그인 되어있습니다.');
          this.logged = true;
          return;
        }
        if(res.data==='logged_in'){
          alert('로그인 되었습니다.');
          this.logged = true;
          location.replace('/admin');
          return;
        }
        if(res.data==='not_password'){
          alert('비밀번호가 틀립니다.');
          this.logged = false;
          return;
        }
        alert('아이디를 다시 확인해주세요.');
        this.logged = false;
      })
    },
    clickLogout(){
      axios.get('api/auth/logout')
      .then((res)=>{
        if(res.data==='logged_out'){
          alert('로그아웃 되었습니다.');
          this.logged = false;
        }
      })
    },
  },
}
</script>

<style scoped>
@import url("../assets/css/unify.css");
</style>