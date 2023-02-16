<template>
  <div id="app">
    <v-text-field v-model="title" background-color="green darken-1" label="제목" solo hide-details></v-text-field>
    <jodit-editor v-model="content" />
    <div class="grey d-flex justify-center">
      <v-btn @click="clickSubmit" width="100px" color="green">등록하기</v-btn>
      <v-btn @click="clickCancel" width="100px" color="red">취소</v-btn>
    </div>
  </div>
</template>

<script>
import 'jodit/build/jodit.min.css'
import { JoditEditor } from 'jodit-vue'
import axios from 'axios'

export default {
  name: 'JoditWrite',
  components: { JoditEditor },
  data () {
    return {
      title:'',
      content: '',
    }
  },
  methods: {
    clickSubmit(){
      axios.post('api/board/write',{
        title: this.title,
        contents: this.content,
      })
      .then(()=>{
        this.$store.dispatch('get_board_find');
        this.$emit('carouselMove',0);
        this.title = '';
        this.content = '';
      })
    },
    clickCancel(){
      this.$emit('carouselMove',0);
    },
  },
}
</script>
