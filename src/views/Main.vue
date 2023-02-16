<template>
  <div class="main mb-16">
    <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.4), rgba(0,0,0,1)" height="100vh" src="@/assets/main/1.jpg">
      <v-row class="d-flex align-center mx-auto" :style="contentsWidth + '; height: 100vh;'">
        <v-col cols="12" data-aos-duration="2000" data-aos="zoom-out" >
          <p class="logoSubFont">WE PURSUE VALUES BEYOND SPORTS.</p>
          <p class="logoFont">ALLGROUND</p><br>
        </v-col>
      </v-row>
    </v-img>
    <v-row class="mx-auto" :style="contentsWidth">
      <v-col cols="12" class="mb-5">
        <p class="categoryTitleFont">WE MAKE FUTURE</p>
        <p class="categorySubTitleFont">Our Service</p>
        <p class="categoryContentssFont">As a football agency, we provide a variety of sports services to create a better future for the football market.</p>
      </v-col>
      <v-col xl="6" md="6" sm="6" cols="12">
        <div :class="contentsCardWrapClassL" :style="contentsCardWrapHeight">
          <v-card :style="contentsCardImage" color="rgba(255,255,255,.3)" rounded="0" data-aos-duration="2000" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true">
            <v-img src="@/assets/main/1.jpg" width="100%" height="100%" >
              <div style="position:relative; top: 65%; left: 20px" v-if="this.$vuetify.breakpoint.smAndDown">
                <p class="ourserviceImageTitleFont">Data Platform</p>
                <p>Team Management Solution ‘Hiple’</p>
              </div>
              <div style="position:relative; top: 70%; left: 20px;" v-if="!this.$vuetify.breakpoint.smAndDown">
                <p class="ourserviceImageTitleFont">Data Platform</p>
                <p>Team Management Solution ‘Hiple’</p>
              </div>
            </v-img>
          </v-card>
        </div>
      </v-col>
      <v-col xl="6" md="6" sm="6" cols="12">
        <div :class="contentsCardWrapClassR" :style="contentsCardWrapHeight">
          <v-card :style="contentsCardImage" color="rgba(255,255,255,.3)" rounded="0" data-aos-delay="500" data-aos-duration="2000" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true">
            <v-img src="@/assets/main/2.jpg" width="100%" height="100%">
              <div style="position:relative; top: 65%; left: 20px" v-if="this.$vuetify.breakpoint.smAndDown">
                <p class="ourserviceImageTitleFont">Sport Agent</p>
                <p>Brokerage and manage the transfer of players.</p>
              </div>
              <div style="position:relative; top: 70%; left: 20px;" v-if="!this.$vuetify.breakpoint.smAndDown">
                <p class="ourserviceImageTitleFont">Sport Agent</p>
                <p>Brokerage and manage the transfer of players.</p>
              </div>
            </v-img>
          </v-card>
        </div>
      </v-col>
      <v-col xl="6" md="6" sm="6" cols="12">
        <div :class="contentsCardWrapClassL" :style="contentsCardWrapHeight">
          <v-card :style="contentsCardImage" color="rgba(255,255,255,.3)" rounded="0" data-aos-delay="500" data-aos-duration="2000" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true">
            <v-img src="@/assets/main/5.jpg" width="100%" height="100%">
              <div style="position:relative; top: 65%; left: 20px" v-if="this.$vuetify.breakpoint.smAndDown">
                <p class="ourserviceImageTitleFont">Video analysis</p>
                <p>Filming and analyzing highlight videos of Football players.</p>
              </div>
              <div style="position:relative; top: 70%; left: 20px;" v-if="!this.$vuetify.breakpoint.smAndDown">
                <p class="ourserviceImageTitleFont">Video analysis</p>
                <p>Filming and analyzing highlight videos of Football players.</p>
              </div>
            </v-img>
          </v-card>
        </div>
      </v-col>
      <v-col xl="6" md="6" sm="6" cols="12">
        <div :class="contentsCardWrapClassR" :style="contentsCardWrapHeight">
          <v-card :style="contentsCardImage" color="rgba(255,255,255,.3)" rounded="0" data-aos-delay="1000" data-aos-duration="2000" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true">
            <v-img src="@/assets/main/4.jpg" width="100%" height="100%">
              <div style="position:relative; top: 65%; left: 20px" v-if="this.$vuetify.breakpoint.smAndDown">
                <p class="ourserviceImageTitleFont">Media</p>
                <p>sharing the news of world Football.</p>
              </div>
              <div style="position:relative; top: 70%; left: 20px;" v-if="!this.$vuetify.breakpoint.smAndDown">
                <p class="ourserviceImageTitleFont">Media</p>
                <p>sharing the news of world Football.</p>
              </div>
            </v-img>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-img class="my-16" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.6), rgba(0,0,0,1)" width="100%" :height="contentsAboutHeight" src="@/assets/main/2.jpg">
      <v-row class="d-flex align-center mx-auto" :style="contentsWidth + '; height:' + contentsAboutHeight">
        <v-col xl="6" md="6" sm="6" cols="12" v-if="this.$vuetify.breakpoint.smAndDown">
          <p class="categoryTitleFont">ABOUT US</p>
          <p class="categorySubTitleFont">Team of Allground</p>
          <p class="categoryContentssFont">We want to solve many problems by focusing on everything that happens in the sports market.</p>
        </v-col>        
        <v-col xl="6" md="6" sm="6" cols="12">
            <v-card :height="contentsAboutImageHeight" color="rgba(255,255,255,.3)" rounded="0">
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
        <v-col xl="6" md="6" sm="6" cols="12" v-if="!this.$vuetify.breakpoint.smAndDown"  data-aos-duration="2000" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">
          <p class="categoryTitleFont">ABOUT US</p>
          <p class="categorySubTitleFont">We Are ALLGROUND</p>
          <p class="categoryContentssFont">We want to solve many problems by focusing on everything that happens in the sports market.</p>
        </v-col>
      </v-row>
    </v-img>
    <v-row class="mx-auto mt-10" :style="contentsWidth" v-if="this.visible">
      <v-col cols="12" class="mb-5">
        <p class="categoryTitleFont">OUR BLOG</p>
        <p class="categorySubTitleFont">News</p>
        <p class="categoryContentssFont">Stories from us & our industry</p>
      </v-col>
    </v-row>
    <v-row class="mx-auto" :style="contentsWidth" v-if="this.$vuetify.breakpoint.smAndDown && this.visible">
      <v-col xl="6" md="6" sm="6" cols="12" v-for="(i,index) in mobileBoardsResult" :key="index" class="newsContainer" @click="viewNews(i.seq)">
        <v-card v-if="i.thumb != ''" style="overflow: hidden;" :class="contentsNewsClassR" :height="contentsNewsHeight" color="rgba(255,255,255,.0)" rounded="0">
          <v-img class="newsCard" width="100%" height="100%" :src="i.thumb"></v-img>
        </v-card>
        <v-card v-else style="overflow: hidden; border: 1px solid rgba(60,60,60)" :class="contentsNewsClassR" :height="contentsNewsHeight" color="rgba(255,255,255,.0)" rounded="0">
          <v-img class="newsCard" width="100%" height="100%" src="../assets/logo/logo_white_news.png"></v-img>
        </v-card>
        <div :class="contentsNewsClassR + ' mt-3'">
          <p class="newsRegFont mb-2">{{i.regTime.slice(0,10)}}</p>
          <p class="newsTitleFont mb-2">{{i.title}}</p>
          <a href="#"><span class="thin">Read</span><span class="thick"> More</span></a>
        </div>    
      </v-col>
    </v-row>
    <v-row class="mx-auto" :style="contentsWidth" v-if="!this.$vuetify.breakpoint.smAndDown && this.visible">
      <v-col xl="6" md="6" sm="6" cols="12" v-for="(i,index) in boardsResult" :key="index" style="cursor: pointer" class="newsContainer" @click="viewNews(i.seq)">
        <v-card v-if="i.thumb != ''" style="overflow: hidden;" :class="contentsNewsClassR" :height="contentsNewsHeight" color="rgba(255,255,255,.0)" rounded="0">
          <v-img class="newsCard" width="100%" height="100%" :src="i.thumb"></v-img>
        </v-card>
        <v-card v-else style="overflow: hidden; border: 1px solid rgba(60,60,60)" :class="contentsNewsClassR" :height="contentsNewsHeight" color="rgba(255,255,255,.0)" rounded="0">
          <v-img class="newsCard" width="100%" height="100%" src="../assets/logo/logo_white_news.png"></v-img>
        </v-card>
        <div :class="contentsNewsClassR + ' mt-3'">
          <p class="newsRegFont mb-2">{{i.regTime.slice(0,10)}}</p>
          <p class="newsTitleFont mb-2">{{i.title}}</p>
          <a href="#"><span class="thin">Read</span><span class="thick"> More</span></a>
        </div>    
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '@/utils/bus.js'

export default {
  data(){
    return{
      boards: null,
      boardsResult: null,
      mobileBoardsResult: null,
      visible: null,
    }
  },
  created(){
    this.findBoards();    
    this.newsVisible();
  },
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
    contentsAboutHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "";
        case 'sm' : return "63vh";
        case 'md' : return "63vh";
        case 'lg' : return "63vh";
        case 'xl' : return "63vh";
        default : return "63vh";
      }
    },        
    contentsAboutImageHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "140px";
        case 'sm' : return "250px";
        case 'md' : return "250px";
        case 'lg' : return "250px";
        case 'xl' : return "250px";
        default : return "250px";
      }
    },        
    contentsAboutImageHeight2(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "130px";
        case 'sm' : return "210px";
        case 'md' : return "210px";
        case 'lg' : return "210px";
        case 'xl' : return "210px";
        default : return "210px";
      }
    },        
    contentsCardWrapHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "";
        case 'sm' : return "height: 450px";
        case 'md' : return "height: 500px";
        case 'lg' : return "height: 600px";
        case 'xl' : return "height: 600px";
        default : return "height: 600px";
      }
    },    
    contentsCardWrapClassL(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "";
        case 'sm' : return "d-flex align-start";
        case 'md' : return "d-flex align-start";
        case 'lg' : return "d-flex align-start";
        case 'xl' : return "d-flex align-start";
        default : return "d-flex align-start";
      }
    },    
    contentsCardWrapClassR(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "";
        case 'sm' : return "d-flex align-end justify-end";
        case 'md' : return "d-flex align-end justify-end";
        case 'lg' : return "d-flex align-end justify-end";
        case 'xl' : return "d-flex align-end justify-end";
        default : return "d-flex align-end justify-end";
      }
    },    
    contentsCardImage(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "width: 100%; height: 250px;";
        case 'sm' : return "width: 250px; height: 300px;";
        case 'md' : return "width: 400px; height: 400px;";
        case 'lg' : return "width: 400px; height: 450px;";
        case 'xl' : return "width: 400px; height: 450px;";
        default : return "width: 400px; height: 450px;";
      }
    },    
    contentsNewsHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "230px";
        case 'sm' : return "270px";
        case 'md' : return "230px";
        case 'lg' : return "230px";
        case 'xl' : return "230px";
        default : return "230px";
      }
    },  
    contentsNewsClassL(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "";
        case 'sm' : return "ml-5";
        case 'md' : return "ml-5";
        case 'lg' : return "ml-16";
        case 'xl' : return "ml-16";
        default : return "ml-16";
      }
    },  
    contentsNewsClassR(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "";
        case 'sm' : return "mr-5";
        case 'md' : return "mr-5";
        case 'lg' : return "mr-16";
        case 'xl' : return "mr-16";
        default : return "mr-16";
      }
    },  
  },
  methods:{
    newsVisible(){
      axios.get('api/setting/find')
      .then((res)=>{
        this.visible = res.data[0].newsTab;
      })
    },    
    viewNews(num) {
      this.id = num;
      this.$router.push('news/' + num)
    },   
    findBoards(){
      axios.get('api/board/find')
      .then((res)=>{
        this.boards=res.data;
        this.findPretext();
        this.findThumb();
        this.boardsResult = this.boards;
        this.mobileBoardsResult = this.boardsResult.slice(0,2);
      })
    },
    findThumb(){
      for(var i = 0; i<this.boards.length; i++){
        if(this.boards[i].contents.includes('<img')){
          var tagIndex = this.boards[i].contents.indexOf('<img');
          var tagSrcIndex = this.boards[i].contents.indexOf('src="',tagIndex+4);
          var tagEndIndex = this.boards[i].contents.indexOf('"',tagSrcIndex+5);
          this.boards[i].thumb = this.boards[i].contents.slice(tagSrcIndex+5,tagEndIndex);
        }else {
          this.boards[i].thumb = '';
        }
      }
    },        
    findPretext(){
      for(var i = 0; i<this.boards.length; i++){
        this.boards[i].pretext = this.boards[i].contents.replace(/(<([^>]+)>|&nbsp;)/ig," ").slice(0,50)+('...');
      }
    },    
  }
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
