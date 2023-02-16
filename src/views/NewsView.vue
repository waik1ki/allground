<template>
  <div class="main">
    <v-img class="d-flex" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.8), rgba(0,0,0,1)" src="@/assets/백그라운드4.png">
      <v-row class="d-flex mx-auto" :style="contentsWidth + '; padding-top: 130px;'">
        <div style="width: 100%">
          <p class="mb-5" style="color: white; font-size: 2.1rem">{{this.title}}</p>
          <p class="mb-5 text-end" style="color: white; font-size: 1.1rem;">{{this.regTime}}</p>
        </div>
        <JoditView :output="output"/>
      </v-row>
    </v-img>
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
      boards:null,
      title: '',
      contents: '',
      regTime : null,
      image : null,
      output:{title:null,contents:null},
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
    this.getBoard();
  },
  mounted(){
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},1000 ); // 로딩이 끝났다는 걸 알려주기 위한 메소드
    });
  },
  methods:{
    getBoard(){
      var n = this.$route.params.id;
      axios.post('http://allground.co.kr/api/board/findone',{
        seq:n
      })
      .then((res)=>{
        this.boards = res.data;
        this.title = res.data.title;
        this.contents = res.data.contents;
        this.regTime = res.data.regTime;
        this.output.title =  this.title;
        this.output.contents = this.contents;
        this.findThumb();
      })
    },    
    preload(){
      for(var i = 0; i<this.preloadImg.length; i++)
      {
        var preloadImage = new Image();
        preloadImage.src = this.preloadImg[i]
      }
    },
    findThumb(){
      if(this.boards.contents.includes('<img')){
        var tagIndex = this.boards.contents.indexOf('<img');
        var tagSrcIndex = this.boards.contents.indexOf('src="',tagIndex+4);
        var tagEndIndex = this.boards.contents.indexOf('"',tagSrcIndex+5);
        this.boards.thumb = this.boards.contents.slice(tagSrcIndex+5,tagEndIndex);
      }else {
        this.boards.thumb = '';
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

</style>