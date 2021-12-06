<template>
  <div class="home">

  <div>
    <div id="robe-wrapper">
      <img class="" id="judge-robe" alt="Vue logo" src="../assets/02_w.gif">
    </div>

   <transition name="slide">
   <button v-on:click='letPlay()' id="game-title" class="uppercase">Зірвати<br>мантію</button> 
      <!-- <router-link to="/pageOne" id="game-title" class="uppercase">Зірвати<br>мантію</router-link>   -->
    </transition> 
  </div>
  </div>
</template>

<script>
import 'animate.css'
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

export default {
  name: 'Home',
  components: {
    /*  HelloWorld */
  },
  methods: {
  letPlay: function(){
    const that = this;

    document.getElementById("robe-wrapper").classList.add('play');
    document.getElementById("game-title").classList.add('fade-button')
    setTimeout(function() {
      that.$router.push('/let_play');}, 1000);
     
    }
  }
}
</script>
