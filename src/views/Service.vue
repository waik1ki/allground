<template>
  <div class="main mb-16">
    <v-img class="d-flex align-center" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" height="100vh" src="@/assets/백그라운드5.jpg">
      <v-row class="d-flex align-center mx-auto" :style="contentsWidth + '; height: 50vh;'">
        <v-col cols="12">
          <p class="logoFont text-center mb-10" data-aos-duration="2000" data-aos="zoom-out">Service</p>
        </v-col>
      </v-row>
    </v-img>
    <v-row class="d-flex mx-auto" :style="contentsWidth">
      <v-col cols="12">
        <p class="aboutCategoryFont mb-3">Overview</p>
      </v-col>      
      <v-col xl="12" md="6" sm="12" cols="12">
        <p class="serviceCategorySubFont">We are doing our best to understand and grow problems in the field through fast communication. It helps you plan and implement a complete digital strategy and researches and develops sports.</p>
      </v-col>
    </v-row>


    <v-row class="d-flex align-center mx-auto mb-6" :style="contentsWidth + '; height:' + contentsAboutHeight">
      <v-card class="d-flex align-center pa-7" color="rgba(190,190,190,.7)" rounded="0"  v-if="!this.$vuetify.breakpoint.smAndDown">
        <v-col xl="6" md="6" sm="12" cols="12">
          <v-card :height="contentsAboutImageHeight" rounded="0" elevation="15">
            <v-img src="@/assets/main/1.jpg" width="100%" height="100%"></v-img>
          </v-card>   
        </v-col>
        <v-col xl="6" md="6" sm="12" cols="12" data-aos-duration="2000" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <p class="serviceCategoryFont mb-3">Data Platform</p>
          <p class="categoryContentsFont">Team Management Solution ‘Hiple’, It helps you manage your team efficiently and grow rapidly in modern Football.</p><br><br v-if="!this.$vuetify.breakpoint.smAndDown">
        </v-col>
      </v-card>
      <v-col xl="6" md="6" sm="12" cols="12" v-if="this.$vuetify.breakpoint.smAndDown">
        <v-card :height="contentsAboutImageHeight" rounded="0" elevation="15">
          <v-img src="@/assets/main/1.jpg" width="100%" height="100%" class="d-flex align-end">
            <v-card color="rgba(0,0,0,.7)" elevation="0" rounded="0" class="px-3 pt-3">
              <p class="serviceCategoryFont mb-3">Data Platform</p>
              <p class="categoryContentsFont">Team Management Solution ‘Hiple’, It helps you manage your team efficiently and grow rapidly in modern Football.</p><br><br v-if="!this.$vuetify.breakpoint.smAndDown">          
            </v-card>
          </v-img>
        </v-card>   
      </v-col>
    </v-row>

    <v-row class="d-flex align-center mx-auto mb-6" :style="contentsWidth + '; height:' + contentsAboutHeight"> 
      <v-card class="d-flex align-center pa-7" color="rgba(190,190,190,.7)" rounded="0"  v-if="!this.$vuetify.breakpoint.smAndDown">      
        <v-col xl="6" md="6" sm="12" cols="12" v-if="!this.$vuetify.breakpoint.smAndDown"  data-aos-duration="2000" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <p class="serviceCategoryFont mb-3">Sport Agent</p>
          <p class="categoryContentsFont">It increases the value of products by investing in promising players with future value, brokering the management and transfer of their players, and grasping their potential.</p><br><br v-if="!this.$vuetify.breakpoint.smAndDown">
        </v-col>
        <v-col xl="6" md="6" sm="12" cols="12">
          <v-card :height="contentsAboutImageHeight" rounded="0" elevation="15">
            <v-img src="@/assets/main/2.jpg" width="100%" height="100%"></v-img>
          </v-card>   
        </v-col>
      </v-card>
      <v-col xl="6" md="6" sm="12" cols="12" v-if="this.$vuetify.breakpoint.smAndDown">
        <v-card :height="contentsAboutImageHeight" rounded="0" elevation="15">
          <v-img src="@/assets/main/2.jpg" width="100%" height="100%" class="d-flex align-end">
            <v-card color="rgba(0,0,0,.7)" elevation="0" rounded="0" class="px-3 pt-3">
              <p class="serviceCategoryFont mb-3">Sport Agent</p>
              <p class="categoryContentsFont">It increases the value of products by investing in promising players with future value, brokering the management and transfer of their players, and grasping their potential.</p><br><br v-if="!this.$vuetify.breakpoint.smAndDown">  
            </v-card>          
          </v-img>
        </v-card>   
      </v-col>
    </v-row>

    <v-row class="d-flex align-center mx-auto mb-6" :style="contentsWidth + '; height:' + contentsAboutHeight">    
      <v-card class="d-flex align-center pa-7" color="rgba(190,190,190,.7)" rounded="0" v-if="!this.$vuetify.breakpoint.smAndDown">      
        <v-col xl="6" md="6" sm="12" cols="12">
          <v-card :height="contentsAboutImageHeight" rounded="0" elevation="15">
            <v-img src="@/assets/main/5.jpg" width="100%" height="100%"></v-img>
          </v-card>   
        </v-col>
        <v-col xl="6" md="6" sm="12" cols="12" data-aos-duration="2000" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <p class="serviceCategoryFont mb-3">Video analysis</p>
          <p class="categoryContentsFont">It provides quality content for players to grow further through matches or the process of filming and analyzing players' videos.</p><br><br v-if="!this.$vuetify.breakpoint.smAndDown">
        </v-col>
      </v-card>
      <v-col xl="6" md="6" sm="12" cols="12" v-if="this.$vuetify.breakpoint.smAndDown">
        <v-card :height="contentsAboutImageHeight" rounded="0" elevation="15">
          <v-img src="@/assets/main/5.jpg" width="100%" height="100%" class="d-flex align-end">
            <v-card color="rgba(0,0,0,.7)" elevation="0" rounded="0" class="px-3 pt-3">
              <p class="serviceCategoryFont mb-3">Video analysis</p>
              <p class="categoryContentsFont">It provides quality content for players to grow further through matches or the process of filming and analyzing players' videos.</p><br><br v-if="!this.$vuetify.breakpoint.smAndDown">
            </v-card>             
          </v-img>
        </v-card>   
      </v-col>
    </v-row>

    <v-row class="d-flex align-center mx-auto" :style="contentsWidth + '; height:' + contentsAboutHeight">      
      <v-card class="d-flex align-center pa-7" color="rgba(190,190,190,.7)" rounded="0" v-if="!this.$vuetify.breakpoint.smAndDown">      
        <v-col xl="6" md="6" sm="12" cols="12" v-if="!this.$vuetify.breakpoint.smAndDown" data-aos-duration="2000" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <p class="serviceCategoryFont mb-3">Media</p>
          <p class="categoryContentsFont">Based on trust and sincerity, you can deliver news of world soccer and receive all major soccer news quickly every day through subscription-type services.</p><br><br v-if="!this.$vuetify.breakpoint.smAndDown">
        </v-col>
        <v-col xl="6" md="6" sm="12" cols="12">
          <v-card :height="contentsAboutImageHeight" rounded="0" elevation="15">
            <v-img src="@/assets/main/4.jpg" width="100%" height="100%"></v-img>
          </v-card>   
        </v-col>      
      </v-card>  
      <v-col xl="6" md="6" sm="12" cols="12" v-if="this.$vuetify.breakpoint.smAndDown">
        <v-card :height="contentsAboutImageHeight" rounded="0" elevation="15">
          <v-img src="@/assets/main/4.jpg" width="100%" height="100%" class="d-flex align-end">
            <v-card color="rgba(0,0,0,.7)" elevation="0" rounded="0" class="px-3 pt-3">
              <p class="serviceCategoryFont mb-3">Media</p>
              <p class="categoryContentsFont">Based on trust and sincerity, you can deliver news of world soccer and receive all major soccer news quickly every day through subscription-type services.</p><br><br v-if="!this.$vuetify.breakpoint.smAndDown">
            </v-card>             
          </v-img>
        </v-card>   
      </v-col>
    </v-row>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'

export default {
  mounted(){
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},500 ); // 로딩이 끝났다는걸 알려주기위한 메소드
    });
  },
  computed:{
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
    contentsAboutHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "";
        case 'sm' : return "";
        case 'md' : return "45vh";
        case 'lg' : return "45vh";
        case 'xl' : return "45vh";
        default : return "45vh";
      }
    },        
    contentsAboutImageHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "250px";
        case 'sm' : return "250px";
        case 'md' : return "250px";
        case 'lg' : return "250px";
        case 'xl' : return "250px";
        default : return "250px";
      }
    },
    contentsAboutBackgroundHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "position: absolute; transform: translate(15%, 15%); height: 320px; width: 40%";
        case 'sm' : return "position: absolute; transform: translate(15%, 15%); height: 320px; width: 40%";
        case 'md' : return "position: absolute; transform: translate(15%, 15%); height: 320px; width: 40%";
        case 'lg' : return "position: absolute; transform: translate(15%, 15%); height: 320px; width: 40%";
        case 'xl' : return "position: absolute; transform: translate(10%, 26%); height: 320px; width: 43%";
        default : return "position: absolute; transform: translate(15%, 15%); height: 320px; width: 40%";
      }
    },
    serviceBackgroundCardWidth(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "140px";
        case 'sm' : return "250px";
        case 'md' : return "250px";
        case 'lg' : return "250px";
        case 'xl' : return "250px";
        default : return "250px";
      }
    },
  },
}
</script>

<style>
  .newsContainer > div > a {
    font-size: 18px;
    padding-bottom: 4px;
    color: white;
    text-decoration: none;
    position: relative;
  }
</style>

<style scoped>
p {
  color: white;
  font-family: 'Roboto', sans-serif;
}
.newsCard {
  -webkit-transition: all 0.6s ease;
          transition: all 0.6s ease;    
}
.newsContainer:hover .newsCard{
  transform: scale( 1.07 );
}
.newsContainer:hover a:before, 
.newsContainer:hover a:after {
  width: 50%;
}
.newsContainer a:before,
.newsContainer a:after {
  content: '';
  border-bottom: solid 1px white;
  position: absolute;
  bottom: 0;
  width: 0;
  -webkit-transition: all 0.6s ease;
          transition: all 0.6s ease;  
}
.newsContainer a:before { left: 0; }
.newsContainer a:after { right: 0; }



@import url("../assets/css/unify.css");
@media (max-width:520px){
  .subText {
    font-size: .7rem;
  }
}
.flow{
  animation: f 30s linear infinite;
}
@keyframes f {
  0%{
    left:0vw;
  }
  100%{
    left:-100%;
  }
}
</style>
