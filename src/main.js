import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import json from "./assets/test_data.json";

let app = createApp(App)

app.use(router).mount('#app') 
var random_value = Math.floor(Math.random() * 25) + 1;

app.config.globalProperties.$status = {"reload": "true"}
app.config.globalProperties.data = json
app.config.globalProperties.$index = {"array": Array.from(Array(json.length).keys()), "old": random_value, "new": random_value}
app.config.globalProperties.$result = {"value": "false"}