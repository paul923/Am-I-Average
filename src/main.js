import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import "bootstrap";
import VueFirestore from 'vue-firestore';
import store from './store'
import firebase from 'firebase'

// Components import
import InitScreen from './components/InitScreen.vue';
import AgeScreen from './components/AgeScreen.vue';
import UIQuestion from './components/UIQuestion.vue';
import BLQuestion from './components/BLQuestion.vue';
import BLResult from './components/BLResult.vue';
import UIResult from './components/UIResult.vue';

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

Vue.config.productionTip = false;

//Firebase init
const config = {
  apiKey: "AIzaSyAg7M_-b7epJVuMoBcvlUTWct7gFnVIOco",
  authDomain: "am-i-average.firebaseapp.com",
  databaseURL: "https://am-i-average.firebaseio.com",
  projectId: "am-i-average",
  storageBucket: "am-i-average.appspot.com",
  messagingSenderId: "247200672415",
  appId: "1:247200672415:web:75094b7bd1722d82"
}
firebase.initializeApp(config)
export const db = firebase.firestore()


Vue.use(VueFirestore);
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
