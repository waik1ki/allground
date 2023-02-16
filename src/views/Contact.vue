<template>
  <div class="contact">
    <v-img class="d-flex align-center" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.6), rgba(0,0,0,1)" height="100vh" src="@/assets/백그라운드3.png">
      <v-row class="d-flex align-center mx-auto" :style="contentsWidth + '; height: 50vh;'">
        <v-col cols="12">
          <p class="logoFont text-center mb-10" data-aos-duration="2000" data-aos="zoom-out">Contact US</p>
        </v-col>
        <v-col cols="12" class="pa-0" v-if="!this.$vuetify.breakpoint.smAndDown">
          <div class="d-flex justify-center text-center">
            <div style="width: 250px;">
              <br>
              <br>
              <v-icon dark class="mb-3">mdi-cellphone</v-icon>
              <p class="contactTitleFont">PHONE</p>
              <p class="contactContentsFont py-4">+82 02 - 6953 - 0618</p>
            </div>
            <div style="width: 380px; border-left: 1px solid white; border-right: 1px solid white;">
              <br>
              <br>
              <v-icon dark class="mb-3">mdi-map-marker</v-icon>
              <p class="contactTitleFont">ADDRESS</p>
              <p class="contactContentsFont py-4">Hyundai Harriet #335,<br> 222, Samsong-ro, Deokyang-gu, 10592</p>
            </div>
            <div style="width: 250px">
              <br>
              <br>
              <v-icon dark class="mb-3">mdi-email</v-icon>
              <p class="contactTitleFont">EMAIL</p>
              <p class="contactContentsFont py-4">official@allground.co.kr</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-img>
    <v-row class="d-flex align-center mx-auto mb-16" :style="contentsWidth">
      <v-col class="mx-auto"  cols="12">
        <p class="mb-3 ourserviceImageTitleFont">Send us a message</p>
        <p class="contactContentsFont">To discuss a project, please complete the form below and one of our Account Directors will be in touch.</p>
      </v-col>
      <v-col class="mx-auto"  cols="12">
        <v-text-field ref="title" solo placeholder="Title" v-model="title" :rules="[rules.required]"></v-text-field>
        <v-text-field ref="email"  solo placeholder="Your E-mail" v-model="email" :rules="[rules.required, rules.email]"></v-text-field>
        <v-textarea @focusout="areaFocus=false;" @focus="typing" ref="contents"  height="200" solo placeholder="Message" v-model="contents" :rules="[rules.required]"></v-textarea>
        <div class="d-flex justify-end">
          <v-btn @click="submit" class="px-7" tile><p style="color: black;">Send</p></v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex align-center mx-auto mb-16" :style="contentsWidth">
      <v-col class="mx-auto"  cols="12">
        <p class="mb-3 ourserviceImageTitleFont">Location</p>
        <p class="contactContentsFont">Come out of Exit 6 of the subway and enter Gate 5.</p>
      </v-col>      
      <v-col cols="12">
        <v-card height="300px" elevation="0" rounded="0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.837856088156!2d126.89627721578736!3d37.65301587978177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c977334f22e17%3A0x25a56d24ab44ddcf!2z7Jis6re465287Jq065Oc!5e0!3m2!1sko!2skr!4v1637130024864!5m2!1sko!2skr" width="100%" height="100%" style="border: none"></iframe>            
        </v-card>
      </v-col>      
    </v-row>
  <!-- 메일보내기전 캡챠   -->
    <v-dialog
      v-model="dialog"
      persistent
      width="50vw"
    >
      <v-card class="yellow darken-3" elevation="0" width="50vw">
        <p style="text-align:center">정답을 골라주세요!!</p>
        <p style="text-align:center">{{q0}} + {{q1}} = ???</p>

        <v-card class="pa-0 ma-0" elevation="0">
          <v-row no-gutters>
            <v-col cols="5">
              <input type="text">
            </v-col>
          </v-row>

          <v-row class="pa-5" no-gutters>
            <v-col v-for="i in b" :key="i.index" class="d-flex justify-center mb-3" cols="12" sm="12" md="3" lg="3" xl="3">
              <v-btn @click="btnClick(i.r)" color="green">{{i.n}}</v-btn>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" sm="12" md="3" lg="3" xl="3">
              <v-btn color="red" @click="dialog=false;">닫기</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-dialog>


    <v-dialog persistent v-model="dialog" width="50%">
      <div class="d-flex align-center" style="position:fixed; z-index:203; background-color:rgba(0,0,0,.8); height:50px; width:50%;">
        <div style="position:absolute; z-index:204; width:100%; height:100%; top:0;" class="d-flex justify-center align-center">
          <p class="newsTitleText">정답을 골라주세요</p>
        </div>
        <div class="d-flex justify-end align-center" style="position:absolute; z-index:205; width:100%; height:100%; top:0;">
          <v-btn @click="dialog=false" icon>
            <v-icon class="mr-5" style="color:white; z-index:100;">mdi-close-thick</v-icon>
          </v-btn>
        </div>
      </div>
      <v-card style="padding-top:60px;" elevation="0" width="50vw">
        <p style="text-align:center">정답을 골라주세요!!</p>
        <p style="text-align:center; color: black;">{{q0}} + {{q1}} = ???</p>

        <v-card class="pa-0 ma-0" elevation="0">
          <v-row no-gutters>
            <v-col cols="5">
              <input type="text">
            </v-col>
          </v-row>

          <v-row class="pa-5" no-gutters>
            <v-col v-for="i in b" :key="i.index" class="d-flex justify-center mb-3" cols="12" sm="12" md="3" lg="3" xl="3">
              <v-btn @click="btnClick(i.r)" color="green">{{i.n}}</v-btn>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" sm="12" md="3" lg="3" xl="3">
              <v-btn color="red" @click="dialog=false;">닫기</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import bus from '@/utils/bus.js'
export default {
  data(){
    return{
      areaFocus:false,

      // 캡챠 관련 변수들  //
      q0:0,
      q1:0,

      b:[
      {n:0,r:false},
      {n:0,r:false},
      {n:0,r:false},
      ],

      dialog: false,

      // 이메일 보내기 관련 변수들  //
      title:null,
      email:null,
      contents:null,
      formHasErrors: false,
      rules: {
        required: value => !!value || '입력이 필요합니다.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '올바른 이메일 형식이 아닙니다.'
        },
      },
    }
  },
  mounted(){
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},1000 ); // 로딩이 끝났다는 걸 알려주기 위한 메소드
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
    Transition(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "slide-y-transition";
        case 'sm' : return "slide-x-transition";
        case 'md' : return "slide-x-transition";
        case 'lg' : return "slide-x-transition";
        case 'xl' : return "slide-x-transition";
        default : return "slide-x-transition";
      }
    },
    reverseTransition(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "slide-y-reverse-transition";
        case 'sm' : return "slide-x-reverse-transition";
        case 'md' : return "slide-x-reverse-transition";
        case 'lg' : return "slide-x-reverse-transition";
        case 'xl' : return "slide-x-reverse-transition";
        default : return "slide-x-reverse-transition";
      }
    },
    mapHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' :return '90vw'
        case 'sm' :return '90vw'
        case 'md': return '40vw'
        case 'lg': return '40vw'
        case 'xl': return '40vw'
        default: return '40vw'
      }
    },
    delimitersLocation(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "right";
        case 'sm' : return "right";
        case 'md' : return null;
        case 'lg' : return null;
        case 'xl' : return null;
        default : return null;
      }
    },
    pageCount(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "1";
        case 'sm' : return "1";
        case 'md' : return 0;
        case 'lg' : return 0;
        case 'xl' : return 0;
        default : return 0;
      }
    },
    // 랜덤값 만들기 위한 메소드 //
    r0(){    
      return Math.floor(Math.random()*(3))+1;
    },
    r1(){
      return Math.floor(Math.random()*(10))+1;
    },
    r2(){
      return Math.floor(Math.random()*(10))+1;
    },
    answer(){ //캡챠의 정답값 // 
      return Math.floor(Math.random()*(20))+1;
    },
    form(){ // 메일보낼때 form //
      return{
        title: this.title,
        email: this.email,
        contents: this.contents,
      }
    },
  },
  methods:{
    typing(e){
      this.areaFocus = e.isTrusted;
    },
    sendEmail(){
      var tem = {
        title:this.title, email:this.email, contents:this.contents,
      }
      setTimeout( ()=>{bus.$emit('start:loading')},0 );
      emailjs.send('contact_allground', 'template_f3qobkq',tem,'user_oVKTMpvtsG0Qm6m521s60')
      .then(() => {
        alert("메일이 발송되었습니다."); 
        location.reload();
        setTimeout( ()=>{bus.$emit('end:loading')},800 );
      }, (error) => {
        alert(`시스템에 에러가 있어 메일발송이 실패했습니다. contactallground@gmail.com로 보내주세요! ${error.text}`); 
        setTimeout( ()=>{bus.$emit('end:loading')},800 );
      });
    },

    capcha(){ // 캡챠 숫자 랜덤으로 뿌려주는 함수 // 
      let r1 = this.r1;
      let r2 = this.r2;
      if(r1===this.answer) r1++;
      if(r2===this.answer) r2++;
      if(r1===r2) r1++;
      this.q0 = this.answer - r1;
      this.q1 = r1;
      for(var i =0; i<3; i++)
      {
        this.b[i].r=false;
      }
      switch(this.r0){
        case 1: {this.b[0].r=true; this.b[0].n=this.answer; this.b[1].n=r1; this.b[2].n=r2;}  break;
        case 2: {this.b[1].r=true; this.b[1].n=this.answer; this.b[0].n=r1; this.b[2].n=r2;}  break;
        default: {this.b[2].r=true; this.b[2].n=this.answer; this.b[0].n=r1; this.b[1].n=r2;}  break;
      }
    },

    btnClick(bool){
      if(bool) { 
        this.dialog=false; 
        this.sendEmail();
      }
      else alert("오답입니다.");
    },

    submit(){
      this.formHasErrors = false
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) {
          this.formHasErrors = true;
        }
        this.$refs[f].validate(true)
      })
      if(!this.formHasErrors&&pattern.test(this.email)) {
        this.capcha();
        this.dialog=true;
      }
    },
  }
}
</script>

<style>
.contact .v-messages__message{
  color:white;
}
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  background-color:rgba(255,255,255,.3) !important;
}
.v-text-field.v-text-field--solo .v-input__control input::placeholder{
  color: rgb(150, 150, 150);
} 
.v-text-field.v-text-field--solo .v-input__control input {
  color: white;
}
.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea::placeholder {
  color: rgb(150, 150, 150);
} 
.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea {
  color: white;
}
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {
  border-radius: 0 !important;
}
</style>

<style scoped>
p {
  color: white;
  font-family: 'Roboto', sans-serif;
}
.subText {
  font-size: 1.2rem;
}
@import url("../assets/css/unify.css");
.doubleTitleText{
  font-size:1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
  color:white;
}
@media (max-width:1000px){
}
@media (max-width:680px){
}
@media (max-width:520px){
  .subText {
    font-size: .8rem;
  }
  .titleText {
    font-size: 2.5rem;
  }
}
</style>
