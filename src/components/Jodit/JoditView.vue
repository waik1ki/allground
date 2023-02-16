<template>
  <div class="JoditView" style="color: white;" v-html="output.contents"></div>
</template>

<script>
export default {
  props: {
    output: {
      type: Object,
    }
  },
}
</script>


<style>
.JoditView img{
  max-width: 100% !important;
  height: auto !important;
}

.JoditView h1,h2,h3,h4,h5,h6{
  font-size:1.2rem;
}
.JoditView p > span{
  font-size: 1.2rem !important;
}

@media (max-width:1000px){
  .JoditView h1,h2,h3,h4,h5,h6{
    font-size:1.2rem;
  }
  .JoditView p{
    font-size:.8rem;
  }
}
@media (max-width:680px){
  .JoditView h1,h2,h3,h4,h5,h6{
    font-size:1rem;
  }
  .JoditView p{
    font-size:.75rem;
  }
}
@media (max-width:520px){
  .JoditView h1,h2,h3,h4,h5,h6{
    font-size:1rem;
  }
  .JoditView p{
    font-size:.7rem;
  }
}

</style>

