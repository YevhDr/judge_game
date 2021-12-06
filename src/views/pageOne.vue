<template>
  <div class="pageOne">

  <div class="title text-width">
    <img class="face-pic" :src="photo"/>
    <h2>{{ data.name }}</h2>   
    <div id="wrapper">
    <div class="hands-container">
      <img id="left-hand" style="" src="../assets/left_hand.svg">
    </div>
  
    <div class="contents">
          <span class="anim-text">{{ data.hint }}</span>
          <span class="anim-rect"></span> 
    </div>

    <div class="hands-container">
      <img id="right-hand" style="" src="../assets/right_hand.svg">
    </div>
  </div>
  </div>

  <div class="description text-width">
  <hr>
    <div v-html="data.description"></div>
  <hr>

   <h4 class="quiz-title">{{data.quiz_question}}</h4>
  </div>

  <div class="quiz">
    <div class="quiz-test">
      <router-link to="./result"      
      v-for="item in data.quiz_test" v-bind:key="item.id">
        <span class="letter">{{item.letter}}</span>
        <span v-on:click="changeCorrectAnswer($event)" class="answer" :value="item.result" >{{ item.variant}}</span>
      </router-link> 
    </div>
  </div>  
  </div>
</template>

<script>
//import Router from 'Router.vue'
//import JSON from "../assets/test_data.json";

export default {  
  name: "pageOne",  
  data: function () {
    return {
      data: this.data[this.$index.new],
      photo: require('@/assets'+ this.data[this.$index.new].foto)    
    }    
  },  
  ready: function() {
   
  },  
  created: function() {
    
  },
  methods: { 
    changeCorrectAnswer: function(e){   
      this.$result.value = e.currentTarget.getAttribute('value')
    } 
  
  },
  computed: {
    
       
  } 
}
</script>

<style lang="scss">
  //@import "../assets/styles.scss";
</style>