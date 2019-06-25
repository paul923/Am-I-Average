import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import "bootstrap";

// Components import
import InitScreen from './components/InitScreen.vue';
import AgeScreen from './components/AgeScreen.vue';
import UIQuestion from './components/UIQuestion.vue';
import BLQuestion from './components/BLQuestion.vue';



import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: "/", 
    name: 'init',
    component: InitScreen
  },
  {
    path: "/age", 
    name: "age",
    component: AgeScreen
  },
  {
    path: "/ui-question", 
    name: "ui-question",
    component: UIQuestion
  },
  {
    path: "/bl-question", 
    name: "bl-question",
    component: BLQuestion
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
