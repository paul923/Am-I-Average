<template>
  <div
    id="age-screen"
    class="col-11 mx-auto h-75 border border-primary p-4 rounded">

    <div id="messages" class="text-center">
      <h1>This is an Age Screen</h1>
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
  // watch: {
  //   '$route' (to, from){

  //   }
  // },
  // created(){

  // },
  methods: {
    randomQuestion(){
      let number = Math.floor((Math.random() * 2) + 1); // number between 1 and 2;
      
      // Decides a question between user input and boolean
      switch(number){
        case 1:
          this.$router.push('ui-question');
          break;
        case 2:
          this.$router.push('bl-question');
          break;
      }
    }
  }
};
</script>