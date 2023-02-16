<template>
  <v-app>
    <Header v-if="!this.$store.state.adminPage"/>
    <Drawer/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
    <Loading/>
  </v-app>
</template>

<script>
import bus from '@/utils/bus.js'
import Loading from '@/components/Loading.vue'
import Drawer from '@/components/Drawer.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
    Drawer,
    Loading,
  },
  data: () => ({

  }),
  created(){
    // 로딩 마크를 띄우기 위한 메소드
    bus.$on('start:loading',()=>{this.loading=true; });
    bus.$on('end:loading',()=>{this.loading=false});
  },
  beforeDestroy(){ 
    // 로딩이 끝났을 때
    bus.$off('start:loading');
    bus.$off('end:loading');
  },
  computed:{
    loading:{
      get(){
        return this.$store.state.loading;
      },
      set(bool){
        this.$store.commit('set_loading',bool);
      },
    },
  },
};
</script>

<style scoped>
.v-main{
  background-color: black;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(30px);
  opacity: 0;
}


</style>
