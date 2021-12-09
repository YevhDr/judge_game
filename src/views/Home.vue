<template>
  <div class="home">

  <div>
    <div id="robe-wrapper">
      <img class="" id="judge-robe" alt="Vue logo" src="../assets/02_w.gif">
    </div>

   <transition name="slide">
   <button v-on:click='letPlay()' id="game-title" class="uppercase">Зірвати<br>мантію</button> 
   </transition> 
  </div>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: 'Home',  
  components: {
    /*  HelloWorld */
  },
  ready: function() {   
   
  },  
  created: function() {

  },
  methods: {
  letPlay: function(){
    const that = this;
    that.$status.reload = 'false'

    document.getElementById("robe-wrapper").classList.add('play');
    document.getElementById("game-title").classList.add('fade-button')
    setTimeout(function() {
      that.$router.push({ name: 'pageOne' });}, 1000);
     
    }
  }
}
</script>
