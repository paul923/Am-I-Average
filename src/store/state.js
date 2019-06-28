import Vue from 'vue'
import Vuex from 'vuex'
import { firebase } from "@firebase/app";
import "@firebase/firestore";
// import { db } from "../firebase";

Vue.use(Vuex);

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
const db = firebase.firestore()

export default new Vuex.Store({
  state: {
    blQuestion: [],
    uiQuestion: [],
    question : [{
      title: 'hi'
    },
    {
      title: 'hi2'
    }
    ]
  },
  getters: {
    getQ (state) {
      return state.question[1].title
    },
    getBLQuestion (state){
      let blArray = state.blQuestion.sort(() => Math.random() - 0.5);
      return blArray;
    },
    getBLResult (state){
      return state.blQuestion[0]
    },
    getUIQuestion (state){
      let uiArray = state.uiQuestion.sort(() => Math.random() - 0.5);
      return uiArray[0];
    },
    getUIResult (state){
      return state.uiQuestion[0]
    }
  },
  mutations: {
    setItems: state => {
      let blQuestion = []
      db.collection('blQuestion').get().then((snapshot) => {
        blQuestion = []
        snapshot.forEach((doc) => {
          blQuestion.push({
            id: doc.id,
            content: doc.data().content,
            yesCount: doc.data().yesCount,
            noCount: doc.data().noCount
          })
        })
        state.blQuestion = blQuestion
      })
      let uiQuestion = []
      db.collection('uiQuestion').get().then((snapshot) => {
        uiQuestion = []
        snapshot.forEach((doc) => {
          uiQuestion.push({ 
            id: doc.id, 
            content: doc.data().content })
        })
 
        state.uiQuestion = uiQuestion
      })
    }
  },
  actions: {
    setItems: context => {
      context.commit('setItems')
    }
  }
})
