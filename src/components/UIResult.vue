<template>
  <div
    id="age-screen"
    class="screen col-11 mx-auto h-75 border border-primary p-4 rounded">

    <div id="messages" class="text-center">
      <h3>User Input Result Page</h3>
      <p>{{ getResult }}</p>
    </div>
    
    <div class="text-center">
      <button 
      class="btn btn-primary"
      @click="randomQuestion()">Next</button>
    </div>
  </div>
</template>

<script>


export default {
  destroyed() {
    // this.$store.state.blQuestion.shift();
  },
  computed: {
    getResult(){
      return this.$store.getters.getUIResult
    }
  },
  methods: {
    randomQuestion(){
      let blSize = this.$store.state.blQuestion.length;
      let uiSize = this.$store.state.uiQuestion.length;
      if(uiSize > 1) {
        // Decides a question between user input and boolean
        let number = Math.floor((Math.random() * 2) + 1); // number between 1 and 2;
        switch(number){
          case 1:
            this.$router.push('ui-question');
            break;
          case 2:
            this.$router.push('bl-question');
            break;
        }
        this.$store.state.uiQuestion.shift();
      } else if (blSize == uiSize){
        //TODO: no more question component
        this.$router.push('end')
      } else {
        this.$router.push('bl-question');
      }
      
    }
  }
};
</script>