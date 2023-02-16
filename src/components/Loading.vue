<template>
<!-- 로딩 처리할 때 나오는 마크 -->
  <div v-show="loading">
    <v-overlay color="black" opacity=".8">
      <v-card elevation="0" width="100px" height="100px" color="transparent">
        <v-card id="aftercard" style="position:absolute;" width="100%" height="100%" class="d-flex justify-center overflow-y-hidden align-slef-end" elevation="0" color="transparent">
        <img src="@/assets/logo/animationlogo_resize.gif" id="gif" height="50px">
        </v-card>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  computed:{
    loading(){
      return this.$store.state.loading;
    },
  },
  watch:{
    loading(){
    var gif = document.getElementById('gif');
    gif.src = "";
    gif.src = require('@/assets/logo/animationlogo.gif');
    }
  },
}
</script>