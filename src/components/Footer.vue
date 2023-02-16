<template>
  <div style="background-color: black">
    <v-img class="mt-16 d-flex align-center" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" width="100%" height="300px" src="@/assets/main/4.jpg">
      <v-row>
        <v-col cols="12"></v-col>
      </v-row>
      <v-row justify="center" class="text-center">
        <v-col cols="12">
          <p>official@allground.co.kr</p><br>
          <p>+82 02 - 6953 - 0618</p><br>
          <p>Hyundai Harriet #335,<br> 222, Samsong-ro, Deokyang-gu, 10592</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="d-flex text-center justify-center">
            <v-card class="mr-2" width="28" height="28" elevation="0" color="rgba(0,0,0,.0)">
              <v-img src="../assets/instagram_.png"></v-img>
            </v-card>
            <v-card class="mr-2"  width="28" height="28" elevation="0" color="rgba(0,0,0,.0)">
              <v-img src="../assets/facebook_.png"></v-img>
            </v-card>
            <v-card width="28" height="28" elevation="0" color="rgba(0,0,0,.0)">
              <v-img src="../assets/blog.png"></v-img>
            </v-card>
          </div>
        </v-col>
      </v-row>      
    </v-img>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p {
  color: white;
}
</style>