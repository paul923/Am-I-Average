const myModule = {
  firestorePath: 'blQuestion',
  firestoreRefType: 'collection', // or 'doc'
  moduleName: 'myModule',
  statePropName: 'data',
  namespaced: true, // automatically added
  
  state: {},
  mutation: {},
  actions: {},
  getters: {
    getBLQuestion (state){
      let blArray = state.blQuestion.sort(() => Math.random() - 0.5);
      return blArray[0].content;
    },
    getBLResult (state){
      return state.blQuestion[0].content
    },
    getUIQuestion (state){
      let uiArray = state.uiQuestion.sort(() => Math.random() - 0.5);
      return uiArray[0].content;
    },
    getUIResult (state){
      return state.uiQuestion[0].content
    }
  }
}

export default myModule