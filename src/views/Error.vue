<template>
  <div class="error">
    <v-img src="@/assets/error/1.jpg" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" height="100vh" width="100%" class="d-flex justify-center align-center">
      <p style="text-align:center" class="maintext">There is no such page</p>
      <p style="text-align:center" class="subtext">죄송합니다. 그런 페이지는 찾지못했습니다.</p>
    </v-img>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  mounted(){
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},0 ); // 로딩이 끝났다는 걸 알려주기 위한 메소드
    });
  },
}
</script>

<style scoped>
.maintext{
  position: relative;
  font-size:10rem;
  font-family: 'Shrikhand', cursive; 
  color:white;
}
.maintext::selection{
  background-color:transparent;
}
.subtext{
  color:white;
  font-family: 'Nanum Myeongjo', serif;
  text-align: center;
  font-size:2rem;
}
.subtext::selection{
  background-color:grey;
}

@media (max-width:1270px){
  .maintext{
    font-size:2rem;
  }
  .subtext{
    font-size:1rem;
  }
}
@media (max-width:680px){
  .maintext{
    font-size:1.5rem;
    margin-bottom:10%;
  }
  .subtext{
    font-size:.8rem;
  }
}
@media (max-width:500px){
  .maintext{
    font-size:1rem;
    margin-bottom:10%;
  }
  .subtext{
    font-size:.8rem;
  }
}
</style>