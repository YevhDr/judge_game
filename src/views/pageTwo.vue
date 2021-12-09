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

<!--<div style="display: flex; justify-content: center;"> -->
  <router-link to="/let_play"  v-on:click="selectNewCase()" class="play-again uppercase">Грати ще</router-link>   
  
  <!-- Поширити -->
    <div class="socio-wrapper">          

              <div class="socio-icons-box">

                  <!--fb-->
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://texty.org.ua/d/2021/judge_game/"
                    target="_blank" class="share-btn">                   
                      <img id="fb" style="width: 50px" src="../assets/facebook.png"/>
                    
                  </a>

                  <!--tw -->
                  <a href="https://twitter.com/intent/tweet?text=https://texty.org.ua/d/2021/judge_game/"
                    target="_blank" class="share-btn">                   
                    <img id="tw" style="width: 50px" src="../assets/twitter.png"/>                 
                  </a>

              </div>
    </div>



  
<div style='margin-bottom: 50px'>

    <h3 class='what-to-do' v-if='!open' @click="open = !open">Що з цим робити</h3>
    <h3 class='what-to-do' v-else @click="open = !open">Сховати</h3>
      
    <div v-show="open" class="text-width" style="text-align:left; font-style: italic; color:grey; font-size: 14px;">
      <p style="line-height:1.8">Як бачите, головна проблема криється у тому, що суддівські долі вершать такі ж негідники. Система влаштована так, що судді самостійно обирають більшість членів Вищої ради правосуддя і Вищої кваліфікаційної комісії суддів.&nbsp;</p>
      <p style="line-height:1.8">Звісно ж, до роботи в цих органах судді делегують тих, хто буде їх покривати і рятувати від покарань. І так це недоброчесне коло замикається.</p>
      <p style="line-height:1.8">Аби його розірвати, треба змінити процедуру призначення членів Вищої ради правосуддя і Вищої кваліфкомісії суддів, за якої кандидати проходитимуть прозорий конкурсний відбір та дієву перевірку на доброчесність. Якщо є сумнів у тому, що кандидат доброчесний, він не має бути призначеним. Оцінювати кандидатів мали б незалежні експерти, що мають репутацію в суспільстві.</p>
      <p style="line-height:1.8">Влітку 2021 року Верховна Рада зробила спробу запровадити такі зміни. Закони <a href="https://zakon.rada.gov.ua/laws/show/1629-20#Text" target='_blank'>№1629-ІХ</a> та <a href="https://zakon.rada.gov.ua/laws/show/1635-20#Text" target='_blank'>№1635-ІХ</a> передбачили створення незалежної Конкурсної комісії для відбору членів Вищої кваліфкомісії суддів та Етичної ради для перевірки на доброчесність членів та кандидатів до Вищої ради правосуддя. Обидва органи наполовину складаються з українських суддів, а наполовину з українських експертів.</p>
      <p style="line-height:1.8">Так, ми поділяємо ваш скептицизм щодо участі українських суддів в цих комісіях. Які ж це тоді зміни? Та головне те, що вирішальний голос і в Конкурсній комісії, і в Етичній раді за законом мають саме міжнародні експерти. Судді не зможуть протягти призначення негідників, тож це дає реальний шанс на справжнє оновлення Вищої ради правосуддя та Вищої кваліфкомісії суддів.</p>
  </div>

  </div>

    <div id="credits" class="text-width">
    <p>Цю гру створили <a href="https://www.facebook.com/motorevska" target="_blank">Євгенія Моторевська</a>, <a href="https://www.facebook.com/natali.sokolenko" target="_blank">Наталка Соколенко</a> та <a href="https://www.facebook.com/halia.chyzhyk" target="_blank">Галина Чижик</a> спільно з командою <a href='https://texty.org.ua/' target="_blank">TEXTY.ORG.UA</a> у співпраці із Представництвом <a href="https://www.freiheit.org/ukr/kyiv" target="_blank">"Фонду Фрідріха Науманна за Свободу"</a> в Україні. Грудень 2021</p>       
    <div id='logo-wrapper'>
      <a href='https://www.freiheit.org/ukr/kyiv'  target='_blank'><img style="max-height:120px;" src="../assets/FNF_logo.png"/></a>   
      <a href='https://texty.org.ua' target='_blank'><img style="max-height:20px;" src="../assets/texty_logo.png"/></a>  
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
      open: false,  
      myVar: this.data[this.$index.new]      
    }    
  },
  created: function() {
   //якщо не була завантажена головна сторінка, то перенапраляє на головну
   var that = this;  
   if(that.$status.reload === 'true'){
      that.$router.replace('/')
   } 
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
