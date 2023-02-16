<template>
  <div id="header">
    <v-app-bar
    :height="headerHeight"
    color="transparent"
    flat
    fixed
    style="z-index:5;"
    >
      <v-row class="d-flex align-center">
        <v-col class="d-flex align-center px-5" cols="12">
          <div>
            <router-link to="/"><v-card :ripple="false" class="transparent" elevation="0" :width="logoWidth" :height="logoHegiht"><v-img contain width="100%" height="100%" src="@/assets/logo/white_wide_logo_resize.png" ></v-img></v-card></router-link>
          </div>
          <v-spacer></v-spacer>
          <div v-if="!this.$vuetify.breakpoint.smAndDown">
            <!-- 탭 리스트 -->
            <v-tabs hide-slider fixed-tabs color="white" background-color="transparent">
              <v-tab :to="i.to" class="headerTab" :ripple="false" v-for="i in menuList" :key="i.title">
                <p v-if="i.name == 'News'" style="white-space:nowrap;" class="headerTitle">News</p>
                <p v-else style="white-space:nowrap;" class="headerTitle">{{i.name}}</p>
                <span class="activespan"></span>
                <span class="hoverspan"></span>
              </v-tab>
            </v-tabs>
          </div>
          <v-app-bar-nav-icon color="white" @click="OpenDrawer" v-if="this.$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  beforeCreate(){
    axios.get('api/setting/find')
    .then((res)=>{
      if(!res.data[0].newsTab)this.$store.commit('set_newsTab');
    })
  },
  methods:{
    OpenDrawer(){ // drawer를 띄우는 메소드 //
      this.$store.commit('set_drawerBool',!this.$store.state.drawerBool);
    },
    tabEffect(routeName){
      if(!this.$vuetify.breakpoint.smAndDown)
      {
        if(this.$route.name==='Main')
        {
          for(var a=0; a<this.menuList.length; a++){
            document.getElementsByClassName('headerTab')[a].style.backgroundColor = "transparent";
            document.getElementsByClassName('headerTab')[a].style.borderRadius = "0px 0px 0px 0px";
          }
          return;
        }
        for(var i =0; i<this.menuList.length; i++){
          if(this.menuList[i].title!=routeName){
            document.getElementsByClassName('headerTab')[i].style.backgroundColor = "transparent";
            document.getElementsByClassName('headerTab')[i].style.borderRadius = "0px 0px 0px 0px";
          }
          else{
            document.getElementsByClassName('headerTab')[i].style.backgroundColor = "rgba(86,245,105,.2)";
            document.getElementsByClassName('headerTab')[i].style.borderRadius = "20px 0px 20px 0px";
          }
        }
      }
    },
  },
  computed:{
    menuList(){
      return this.$store.state.menuList;
    },
    headerHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "50";
        case 'sm' : return "60";
        case 'md' : return "80";
        case 'lg' : return "80";
        case 'xl' : return "80";
        default : return "80";
      }
    },
    logoWidth(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "120";
        case 'sm' : return "150";
        case 'md' : return "150";
        case 'lg' : return "150";
        case 'xl' : return "150";
        default : return "150";
      }
    },
    logoHegiht(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "30";
        case 'sm' : return "70";
        case 'md' : return "70";
        case 'lg' : return "70";
        case 'xl' : return "70";
        default : return "70";
      }
    },
  },
}
</script>

<style>
#header .v-card--link:before , .v-tab:before {
  background-color: transparent !important;
}
</style>

<style scoped>
.headerHolder{
  max-width:1400px;
  display: flex;
  justify-content: center;
}
.headerTitle{
  transition:800ms ease all;
  font-size:14px;
  color:rgba(255,255,255,.7);
}

.v-tab:hover .hoverspan {
  width:80%;
  opacity:1;
}
.hoverspan{
  background-color:white;
  bottom:2px; left:10%; width:0; height:1px;
  position:absolute;
  transition: all .8s;
  z-index:2;
  opacity:0;
}
.activespan{
  background-color:white;
  bottom:2px; left:10%; width:0; height:1px;
  position:absolute;
  transition: all .8s;
  z-index:2;
  opacity:0;
}

.headerTab:hover .headerTitle{
  color:white;
}
</style>