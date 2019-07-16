import Vue from 'vue'
import Vuex from 'vuex'
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import { config } from "../firebase"

Vue.use(Vuex);

firebase.initializeApp(config)
export const db = firebase.firestore()

export default new Vuex.Store({
  state: {
    blQuestion: [],
    uiQuestion: [],
    userAge : null
  },
  getters: {
    getBLQuestion (state){
      let blArray = state.blQuestion
      return blArray;
    },
    getBLResult (state){
      return state.blQuestion[0]
    },
    getUIQuestion (state){
      let uiArray = state.uiQuestion
      return uiArray;
    },
    getUIResult (state){
      return state.uiQuestion[0]
    },
    getAgeResult (state){
      return state.userAge
    }
  },
  mutations: {
    setItems: state => {
      let blQuestion = []
      db.collection('blQuestion').onSnapshot((snapshot) => {
        blQuestion = []
        snapshot.forEach((doc) => {
          blQuestion.push({
            id: doc.id,
            content: doc.data().content,
            yesCount: doc.data().yesCount,
            noCount: doc.data().noCount
          })
        })
        blQuestion.sort(() => Math.random() - 0.5)
        state.blQuestion = blQuestion
      })
      let uiQuestion = []
      db.collection('uiQuestion').onSnapshot((snapshot) => {
        uiQuestion = []
        snapshot.forEach((doc) => {
          uiQuestion.push({ 
            id: doc.id, 
            content: doc.data().content,
            answer: doc.data().answer })
        })
        uiQuestion.sort(() => Math.random() - 0.5)
        state.uiQuestion = uiQuestion
      })
      db.collection('userInfo').doc("userDoc").get().then((doc) => {
        state.userAge = doc.data().age
      })
    }
  },
  actions: {
    setItems: context => {
      context.commit('setItems')
    }
  }
})
