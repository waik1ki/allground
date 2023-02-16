<template>
  <div class="news" style="background-color:black;">
    <v-img class="d-flex align-center" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.6), rgba(0,0,0,1)" height="100vh" src="@/assets/백그라운드3.png">
      <v-row class="d-flex align-center mx-auto" :style="contentsWidth + '; height: 50vh;'">
        <v-col cols="12">
          <p class="logoFont text-center mb-10" data-aos-duration="2000" data-aos="zoom-out">Our Blog</p>
        </v-col>
      </v-row>
    </v-img>
    <v-row class="mx-auto mt-10" :style="contentsWidth">
      <v-col cols="12" class="mb-5">
        <p class="categoryTitleFont">OUR BLOG</p>
        <p class="categorySubTitleFont">News</p>
        <p class="categoryContentssFont">Stories from us & our industry</p>
      </v-col>
    </v-row>    
    <v-row class="mx-auto" :style="contentsWidth">
      <v-col xl="4" md="4" sm="4" cols="12" v-for="(i,index) in boardsResult" :key="index" class="newsContainer" @click="viewNews(i.seq)" style="cursor: pointer;">
        <v-card v-if="i.thumb != ''" style="overflow: hidden;" :height="contentsNewsHeight" color="rgba(255,255,255,.0)" rounded="0">
          <v-img class="newsCard" width="100%" height="100%" :src="i.thumb"></v-img>
        </v-card>
        <v-card v-else style="overflow: hidden; border: 1px solid rgba(70,70,70)" :height="contentsNewsHeight" color="rgba(255,255,255,.0)" rounded="0">
          <v-img class="newsCard" width="100%" height="100%" src="../assets/logo/logo_white_news.png"></v-img>
        </v-card>
        <div :class="'mt-3'">
          <p class="newsRegFont mb-2">{{i.regTime.slice(0,10)}}</p>
          <p class="newsTitleFont mb-2">{{i.title}}</p>
          <a href="#"><span class="thin">Read</span><span class="thick"> More</span></a>
        </div>    
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="100%" height="100%">
      <div class="d-flex align-center" style="position:fixed; z-index:203; background-color:rgba(0,0,0,.8); height:50px; width:100%;">
          <div style="position:absolute; z-index:204; width:100%; height:100%; top:0;" class="d-flex justify-center align-center">
              <v-tooltip v-if="!this.$vuetify.breakpoint.smAndDown" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span  v-bind="attrs" v-on="on" style="z-index:99;" class="newsTitleText">
                    {{output.title}}
                  </span>
                </template>
                <span>{{output.title}}</span>
              </v-tooltip>
              <v-tooltip v-if="this.$vuetify.breakpoint.smAndDown" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span  v-bind="attrs" v-on="on" style="z-index:99;" class="newsTitleText">
                    News
                  </span>
                </template>
                <span>{{output.title}}</span>
              </v-tooltip>
          </div>
          <div class="d-flex justify-end align-center" style="position:absolute; z-index:205; width:100%; height:100%; top:0;">
            <v-btn @click="dialog=false" icon>
              <v-icon class="mr-5" style="color:white; z-index:100;">mdi-close-thick</v-icon>
            </v-btn>
          </div>
      </div>
      <v-card class="scrollDiv" :style="{paddingRight:newsContainer,paddingLeft:newsContainer}" style="top:50px; padding-top:10px; padding-bottom:60px;" width="100%" height="80vh" elevation="0">
        <JoditView :output="output"/>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
import axios from 'axios'
import JoditView from '@/components/Jodit/JoditView.vue'
export default {
  components:{
    JoditView,
  },
  data(){
    return{
      dialog:false,
      boards:null,
      boardsResult:null,
      output:{id:null,title:null,contents:null},
      id: 0,
    }
  },
  computed:{
    listTitleLeft(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '0%';
        case 'sm' : return '0%';
        case 'md' : return '0%';
        case 'lg' : return '25%';
        case 'xl' : return '25%';
        default : return '100%';
      }
    },
    listContainer(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '100%';
        case 'sm' : return '100%';
        case 'md' : return '80%';
        case 'lg' : return '80%';
        case 'xl' : return '80%';
        default : return '100%';
      }
    },
    newsContainer(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '5%';
        case 'sm' : return '5%';
        case 'md' : return '10%';
        case 'lg' : return '20%';
        case 'xl' : return '20%';
        default : return '0%';
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
  created(){
    this.findBoards();
  },
  mounted(){
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},1000 ); // 로딩이 끝났다는 걸 알려주기 위한 메소드
    });
  },
  methods:{
    viewNews(num) {
      this.id = num;
      this.$router.push('news/' + num)
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
    findBoards(){
      axios.get('api/board/find')
      .then((res)=>{
        this.boards=res.data;
        this.findThumb();
        this.findPretext();
        this.boardsResult=this.boards;
      })
    },
  }
}
</script>



<style scoped>
p {
  color: white;
  font-family: 'Roboto', sans-serif;
}
.hovercard {
  transition: opacity .4s ease-in-out;
  opacity: .7;
}
.newsContainer > div > a {
  font-size: 18px;
  padding-bottom: 4px;
  color: white;
  text-decoration: none;
  position: relative;
}
.hovercard:not(.on-hover) {
  opacity: 1;
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
img{
  max-width: 100% !important;
}
.listTitleText{
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size:16px;
}
.listTitleText:hover{
  color: green;
  font-family: 'Noto Sans KR', sans-serif;
  font-size:16px;
}
.listSubText{
  color:grey;
  font-family: 'Noto Sans KR', sans-serif;
  font-size:14px;
}

@media (max-width:1270px){
  .listTitleText{
    font-size:16px;
  }
  .listSubText{
    font-size:14px;
  }
}
@media (max-width:1000px){
  .listTitleText{
    font-size:16px;
  }
  .listSubText{
    font-size:14px;
  }
}
@media (max-width:680px){
  .listTitleText{
    font-size:15px;
  }
  .listSubText{
    font-size:13px;
  }
}
@media (max-width:520px){
  .listTitleText{
    font-size:14px;
  }
  .listSubText{
    font-size:12px;
  }
}
</style>
