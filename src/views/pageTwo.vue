<template>
  <div class="pageTwo">     
    <div class="quiz-result text-width">
      <img v-if="this.$result.value === 'true'" style="max-width: 100px;" class="guessed" src="../assets/right_hand.gif"/>
      <img v-if="this.$result.value === 'false'" style="max-width: 100px; transform: rotate(180deg);" class="guessed-wrong" src="../assets/left_hand.gif"/>
      
      <h3 v-if="this.$result.value === 'true'" style="color: green" class="uppercase">Вгадали :)</h3>
      <h3 v-if="this.$result.value === 'false'" style="color: #CD2E2E" class="uppercase">Не вгадали :(</h3>
      <div style="font-weight: bold;">
          <p>{{ getTrueAnswer.letter}} : {{ getTrueAnswer.variant }} </p>
      </div>
    </div>

    <div class="full-story text-width">
      <hr>
      <div v-html="myVar.full_text"></div>
      
      <!-- <div v-for="item in myVar.full_text" v-bind:key="item.id" v-html="item"></div>-->
      <p v-if="myVar.read_more_link" class="find-more" v-html="myVar.read_more_link"></p>
  </div>

  <router-link to="/let_play"  v-on:click="selectNewCase()" class="play-again uppercase">Грати ще</router-link>  
  
  <!-- Поширити -->
        <div class="socio-wrapper">          

            <div class="socio-icons-box">

                <!--fb-->
                <a href="https://www.facebook.com/sharer/sharer.php?u="
                   target="_blank" class="share-btn">                   
                    <img id="fb" style="width: 50px" src="../assets/facebook.png"/>
                   
                </a>

                <!--tw -->
                <a href="https://twitter.com/intent/tweet?text="
                   target="_blank" class="share-btn">                   
                  <img id="tw" style="width: 50px" src="../assets/twitter.png"/>                 
                </a>

            </div>
        </div>

        <div id="credits" class="text-width" style="display: flex; align-items:center;">
        <p style="font-style: italic; color:grey; text-align: justify;">Цю гру створили Євгенія Моторевська, Наталка Соколенко та Галина Чижик спільно з командою <a href='https://texty.org.ua/'>TEXTY.ORG.UA</a> у співпраці із Представництвом "Фонду Фрідріха Науманна за Свободу" в Україні. Грудень 2021</p>
        <div id="logo" style="display: block;">
        <a href='https://www.freiheit.org/ukr/kyiv'><img style="max-height:100px;" src="../assets/FNF_logo.png"/></a>
       <!-- <a href='https://texty.org.ua/'><img style="max-height:18px;" src="../assets/texty_logo.png"/></a> -->
        </div>
        
        </div>

  </div>  
</template>

<script>

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

//{{ globalVar[0].name }}
export default {
   name: 'pageTwo',  
   data: function () {
    return {    
      myVar: this.data[this.$index.new]      
    }    
  },
  created: function() {

  },
  methods: { 
    selectNewCase: function(){  
      var that = this  
      //суддя, якого зараз дивились стає "старим"    
      that.$index.old = that.$index.new 
      //виключємо його з можливого вибору
      var array = that.$index.array.filter(function(n){return n != that.$index.old});   
      
      //хто наступний
      var new_index;     
      if (array.length >= 2){
        that.$index.array = array //можливий вибір для наступної ітерації зменшується
        new_index = array.sample(); // будь-який з тих, кого не показули        
      } else if(array.length === 1){
        that.$index.array = array
        new_index = array[0] //немає вибору, хто лишився        
      } else {
        //коли всі скінчились, генеруємо наново з усіх можливих варіантів
        that.$index.array = Array.from(Array(that.data.length).keys()).filter(function(n){return n != that.$index.old}); 
        new_index = that.$index.array.sample()
      }   
      //міняємо номер наступного вибору   
      that.$index.new = new_index               
    }
  },
  computed: {
    getTrueAnswer: function(){
      var tt = this.myVar.quiz_test.filter(function(d){
        return d.result === "true"
      });          
      return(tt[0])
    }
    
       
  } 
};

</script>
