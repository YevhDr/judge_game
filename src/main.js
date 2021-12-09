//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import json from "./assets/test_data.json";

//Vue.config.productionTip = false;


// 1. Assign app to a variable
let app = createApp(App)



// 3. Use router and mount app
app.use(router).mount('#app') 



// 2. Assign the global variable before mounting
app.config.globalProperties.$status = {"reload": "true"}
app.config.globalProperties.data = json
app.config.globalProperties.$index = {"array": Array.from(Array(json.length).keys()), "old": 0, "new": 4}
app.config.globalProperties.$result = {"value": "false"}

/* var shared = new Vue({
  data: function() {
    return {
    items: json, 
    global: []  
    } 
}
});

shared.install = function() {
  Object.defineProperty(Vue.prototype, "$mygb", {
    get() {
      return shared;
    }
  });
};

Vue.use(shared);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') */