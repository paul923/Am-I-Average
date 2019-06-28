import { firebaseAction } from 'vuexfire'
import db from '../firebase'

const state = {
  blQuestion: []
}

const actions = {
  init: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('blQuestion', db.collection('blQuestion'))
    console.log('Vuexfire/Firestore BindRef Action Inititated - store/testData.js')
  })
}

export default {
  namespaced: true,
  state,
  actions
}