import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import "bootstrap";
import VueFirestore from 'vue-firestore';
import store from './store/state'
import VeeValidate from 'vee-validate';


// Components import
import InitScreen from './components/InitScreen.vue';
import AgeScreen from './components/AgeScreen.vue';
import UIQuestion from './components/UIQuestion.vue';
import BLQuestion from './components/BLQuestion.vue';
import BLResult from './components/BLResult.vue';
import UIResult from './components/UIResult.vue';
import AgeResult from './components/AgeResult.vue';
import EndScreen from './components/EndScreen.vue';

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";


Vue.config.productionTip = false;


Vue.use(VueFirestore);
Vue.use(VueRouter);
Vue.use(VeeValidate);


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
    path: "/age-result",
    name: "age-result",
    component: AgeResult
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
  },
  {
    path: "/bl-result",
    name: "bl-result",
    component: BLResult
  },
  {
    path: "/ui-result",
    name: "ui-result",
    component: UIResult
  },
  {
    path: "/end",
    name: "end",
    component: EndScreen
  },
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
