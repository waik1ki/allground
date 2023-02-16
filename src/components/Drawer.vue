<template>
  <v-navigation-drawer
  app
  z-index="12"
  disable-resize-watcher
  v-model="drawerBool"
  temporary
  right
  color="black"
  width="100%"
  style="opacity:1;"
  >
  <!-- 모바일 반응형 햄버거 메뉴-->
    <div class="d-flex align-center pr-9" >
      <v-spacer></v-spacer>
      <v-icon :style="'height: ' + headerHeight + 'px;'" dark @click="drawerBool=false;">mdi-close</v-icon>
    </div>
    <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.6), rgba(0,0,0,1)" :height="'calc(100vh - ' + headerHeight + 'px)'" src="@/assets/main/1.jpg">
      <v-row class="d-flex mx-auto" :style="'height: calc(100vh - ' + headerHeight + 'px);'">
        <v-col cols="12">
        </v-col>
        <v-col cols="12" data-aos-duration="2000" data-aos="zoom-out" >
          <!-- 탭 리스트 -->
          <v-list-item
            v-for="item in menuList"
            :key="item.title"
            link
            :to="item.to"
            color="rgba(255,255,255)"
          >
            <v-list-item-content>
              <v-list-item-title class="Font fontScale"><p class="drawerMenuFont">{{ item.name }}</p></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed:{
    menuList(){
      return this.$store.state.menuList;
    },
    drawerBool:{
      get(){
        return this.$store.state.drawerBool;
      },
      set(bool){
        return this.$store.commit('set_drawerBool',bool);
      },
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
    contentsWidth(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "width: 95%";
        case 'sm' : return "width: 95%";
        case 'md' : return "width: 900px";
        case 'lg' : return "width: 1000px";
        case 'xl' : return "width: 1000px";
        default : return "width: 1000px";
      }
    },    
  },
}
</script>

<style scoped>
.fontScale {
  -webkit-transition: all 0.4s ease;
          transition: all 0.4s ease;   
}
.fontScale:hover {
  transform: scale( 1.3 );  
}
.Font{
  color:white;
  text-align: center;
}
@import url("../assets/css/unify.css");

</style>
