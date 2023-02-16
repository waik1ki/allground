<template>
  <div class="main mb-16">
    <v-img class="d-flex align-center" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.3), rgba(0,0,0,1)" height="100vh" src="@/assets/main/6.jpg">
      <v-row class="d-flex align-center mx-auto" :style="contentsWidth + '; height: 50vh;'">
        <v-col cols="12">
          <p class="logoFont text-center mb-10" data-aos-duration="2000" data-aos="zoom-out">About US</p>
        </v-col>
      </v-row>
    </v-img>
    <v-img class="d-flex align-center" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.6), rgba(0,0,0,1)" width="100%" src="@/assets/main/2.jpg">
      <v-row class="d-flex align-center mx-auto" :style="contentsWidth">
        <v-col xl="6" md="6" sm="12" cols="12" data-aos-duration="2000" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <p class="aboutCategoryFont mb-3">Allground Team</p>
          <p class="aboutCategorySubFont mb-6">TEAMWORK MAKES THE DREAM WORK</p>
        </v-col>
        <v-col xl="6" md="6" sm="6" cols="12" v-if="!this.$vuetify.breakpoint.smAndDown"  data-aos-duration="2000" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <p class="categoryContentssFont">What does sports need to develop?<br>
          We are constantly running for the development of sports and soccer.</p>
        </v-col>
        <v-col cols="12">
            <v-card color="rgba(255,255,255,.3)" rounded="0" :height="contentsAboutImageHeight">
              <v-img src="@/assets/단체샷1.png" width="100%" height="100%"></v-img>
            </v-card>
            <div class="d-flex mt-2" style="width: 100%">
              <v-card class="mr-auto" width="49%" :height="contentsAboutImageHeight2" color="rgba(255,255,255,.3)" rounded="0">
                <v-img src="@/assets/단체샷2.jpeg" width="100%" height="100%"></v-img>
              </v-card>          
              <v-card width="49%" :height="contentsAboutImageHeight2" color="rgba(255,255,255,.3)" rounded="0">
                <v-img src="@/assets/개인사진.jpeg" width="100%" height="100%"></v-img>
              </v-card>          
            </div>          
        </v-col>
      </v-row>
    </v-img>
    <v-img class="d-flex align-center my-13" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.8), rgba(0,0,0,1)" width="100%" src="@/assets/백그라운드2.jpg">
      <v-row class="mx-auto" :style="contentsWidth">
        <v-col xl="6" md="6" sm="12" cols="12">
            <p v-if="!this.$vuetify.breakpoint.smAndDown" class="aboutCategoryFont" style="width: 70%">A Unique Way Of Thinking</p><br>
            <p v-if="this.$vuetify.breakpoint.smAndDown" class="aboutCategoryFont">A Unique Way Of Thinking</p><br>
            <p class="aboutCategorySubFont">VALUES WITH I.M.P.A.C.T</p>
        </v-col>
        <v-col xl="6" md="6" sm="12" cols="12">
          <div class="mb-10">
            <p class="aboutValueFont mb-1">Innovative</p><br v-if="!this.$vuetify.breakpoint.smAndDown">
            <p class="aboutValueSubFont">If you’re not setting the standard, you’re left behind. We constantly innovate to stay top of our game.</p>
          </div>
          <div class="mb-10">
            <p class="aboutValueFont mb-1">Measurable</p><br v-if="!this.$vuetify.breakpoint.smAndDown">
            <p class="aboutValueSubFont">Good marketing drives growth that you can measure. We make sure you’re always on track.</p>
          </div>
          <div class="mb-10">
            <p class="aboutValueFont mb-1">Passionate</p><br v-if="!this.$vuetify.breakpoint.smAndDown">
            <p class="aboutValueSubFont">If you care, you work harder. We genuinely love what we do – delivering exceptional quality for clients.</p>
          </div>
          <div class="mb-10">
            <p class="aboutValueFont mb-1">Adaptable</p><br v-if="!this.$vuetify.breakpoint.smAndDown">
            <p class="aboutValueSubFont">We don’t do square pegs. We adapt our services to your business’ individual needs.</p>
          </div>
          <div class="mb-10">
            <p class="aboutValueFont mb-1">Creative</p><br v-if="!this.$vuetify.breakpoint.smAndDown">
            <p class="aboutValueSubFont">No matter the task, it’s our creative approach that lets us find better ways to meet your needs.</p>
          </div>
          <div class="mb-10">
            <p class="aboutValueFont mb-1">Transparent</p><br v-if="!this.$vuetify.breakpoint.smAndDown">
            <p class="aboutValueSubFont">We’re proud of being honest. You’ll always get the truth from us, with the data to support it.</p>
          </div>
        </v-col>
      </v-row>
    </v-img>
    <v-row class="d-flex align-center mx-auto">
      <v-col xl="10" md="11" sm="12" cols="12">
        <v-card color="rgba(255,255,255,.3)" rounded="0" class="d-flex justify-center align-center" :height="missionHeight">
          <p class="aboutBigFont" style="width: 80%" v-if="!this.$vuetify.breakpoint.smAndDown">We demonstrate our best abilities in an atmosthere of freedom. We are proud of our talented team and have the expertise to take the soccer industry to the next level.</p>
          <p class="aboutBigFont px-3" v-if="this.$vuetify.breakpoint.smAndDown">We demonstrate our best abilities in an atmosthere of freedom. We are proud of our talented team and have the expertise to take the soccer industry to the next level.</p>
        </v-card>   
      </v-col>    
    </v-row>    
    <v-img class="d-flex align-center" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.75), rgba(0,0,0,1)" width="100%" src="@/assets/백그라운드.jpg">
      <v-row class="mx-auto my-16" :style="contentsWidth">
        <v-col cols="12">
            <p class="aboutCategoryFont" style="width: 70%">Company History</p><br>
            <p class="aboutCategorySubFont">VALUES WITH I.M.P.A.C.T</p>
        </v-col>      
        <v-col cols="12" class="d-flex flex-column align-center">
            <div class="d-flex">
              <p class="aboutHistoryYearFont" style="position: absolute; transform: translate(50%, -50%);">2021</p>
              <v-card width="15" height="15" rounded="circle" style="position: absolute; transform: translate(-40%, -50%);"></v-card>
              <v-card width="2" :height="historyHeight2021" color="rgba(255,255,255)">
              </v-card>
              <div style="position: absolute;" class="pt-10 pl-7 pr-4">
                <p class="aboutHistoryFont mb-1">"하이부" 서비스 캐릭터 디자인, 상표 출원</p><p class="aboutHistoryDateFont mb-2">2021.11</p>
                <p class="aboutHistoryFont mb-1">기술 특허 등록 (스포츠 팀 포지션 추천 시스템 및 방법)</p><p class="aboutHistoryDateFont mb-2">2021.11</p>
                <p class="aboutHistoryFont mb-1">"2021 고양 MICE 창업경진대회" 장려상</p><p class="aboutHistoryDateFont mb-2">2021.11</p>
                <p class="aboutHistoryFont mb-1">"2021 워크 스타트업" 우수상</p><p class="aboutHistoryDateFont mb-2">2021.08</p>
                <p class="aboutHistoryFont mb-1">기술 특허 출원 (스포츠 팀 포지션 추천 시스템 및 방법)</p><p class="aboutHistoryDateFont mb-2">2021.06</p>
                <p class="aboutHistoryFont mb-1">"ALLGROUND", "HIPLE" 상표출원</p><p class="aboutHistoryDateFont mb-2">2021.05</p>
                <p class="aboutHistoryFont mb-1">"차세대 융합기술 연구원 기술 사업" 선정</p><p class="aboutHistoryDateFont mb-2">2021.05</p>
                <p class="aboutHistoryFont mb-1">"서울시 캠퍼스타운" 입주 기업선정</p><p class="aboutHistoryDateFont mb-2">2021.04</p>
                <p class="aboutHistoryFont mb-1">"EY한영사업계획 경연대회" 최우수상</p><p class="aboutHistoryDateFont mb-2">2021.04</p>
                <p class="aboutHistoryFont mb-1">주식회사 올그라운드 법인 설립</p><p class="aboutHistoryDateFont mb-2">2021.04</p>
                <p class="aboutHistoryFont mb-1">나이스앤디앤비 기술 기업 인증</p><p class="aboutHistoryDateFont mb-2">2021.03</p>
                <p class="aboutHistoryFont mb-1">'굿모닝 베트남' 잡지 및 언론 송출</p><p class="aboutHistoryDateFont mb-2">2021.03</p>
                <p class="aboutHistoryFont mb-1">START-UP CAMP 장려상</p><p class="aboutHistoryDateFont mb-2">2021.02</p>
                <p class="aboutHistoryFont mb-1">세종 창업 활동 경진대회 대상</p><p class="aboutHistoryDateFont mb-2">2021.02</p>
              </div>                
            </div>
            <div class="d-flex">
              <p class="aboutHistoryYearFont" style="position: absolute; transform: translate(-150%, -50%);">2020</p>
              <v-card width="15" height="15" rounded="circle" style="position: absolute; transform: translate(-40%, -50%);"></v-card>
              <v-card width="2" :height="historyHeight2020" color="rgba(255,255,255)">
              </v-card>
              <div style="position: absolute; transform: translate(-100%);" class="pt-10 pr-7 text-end">
                <p class="aboutHistoryFont mb-1">'올데이 풋볼' 상표 출원</p><p class="aboutHistoryDateFont mb-2">2020.12</p>
                <p class="aboutHistoryFont mb-1">스포츠 용품 오픈마켓 오픈</p><p class="aboutHistoryDateFont mb-2">2020.06</p>
              </div>             
            </div>
            <div class="d-flex">
              <p class="aboutHistoryYearFont" style="position: absolute; transform: translate(50%, -50%);">2019</p>
              <v-card width="15" height="15" rounded="circle" style="position: absolute; transform: translate(-40%, -50%);"></v-card>
              <v-card width="2" :height="historyHeight2019" color="rgba(255,255,255)">
              </v-card>
              <div style="width: 300px; position: absolute;" class="pt-10 pl-7">
                <p class="aboutHistoryFont mb-1">올데이풋볼 설립<br>(개인사업자)</p><p class="aboutHistoryDateFont">2019.06</p>
              </div>            
            </div>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'

export default {
  mounted(){
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},500 ); // 로딩이 끝났다는 걸 알려주기 위한 메소드
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
    contentsAboutImageHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "140px";
        case 'sm' : return "350px";
        case 'md' : return "350px";
        case 'lg' : return "370px";
        case 'xl' : return "400px";
        default : return "400px";
      }
    },        
    contentsAboutImageHeight2(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "130px";
        case 'sm' : return "230px";
        case 'md' : return "230px";
        case 'lg' : return "250px";
        case 'xl' : return "270px";
        default : return "270px";
      }
    },
    historyHeight2021(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "760px";
        case 'sm' : return "760px";
        case 'md' : return "760px";
        case 'lg' : return "760px";
        case 'xl' : return "760px";
        default : return "760px";
      }        
    },
    historyHeight2020(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "180px";
        case 'sm' : return "200px";
        case 'md' : return "200px";
        case 'lg' : return "200px";
        case 'xl' : return "200px";
        default : return "200px";
      }        
    },
    historyHeight2019(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "110px";
        case 'sm' : return "130px";
        case 'md' : return "130px";
        case 'lg' : return "130px";
        case 'xl' : return "130px";
        default : return "130px";
      }        
    },
    missionHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "170px";
        case 'sm' : return "240px";
        case 'md' : return "350px";
        case 'lg' : return "350px";
        case 'xl' : return "350px";
        default : return "350px";
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
