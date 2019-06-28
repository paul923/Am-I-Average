import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../main.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blQuestion: [],
    uiQuestion: []
  },
  getters: {
    getBLQuestion (state){
      let blArray = state.blQuestion.sort(() => Math.random() - 0.5);
      return blArray[0];
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
      let uiQuestion = []

      db.collection('blQuestion').onSnapshot((snapshot) => {
        blQuestion = []
        snapshot.forEach((doc) => {
          blQuestion.push({ 
            id: doc.id, 
            content: doc.data().content })
        })
 
        state.blQuestion = blQuestion
      })
      db.collection('uiQuestion').onSnapshot((snapshot) => {
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
