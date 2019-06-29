<template>
  <div
    id="age-screen"
    class="screen col-11 mx-auto h-75 border border-primary p-4 rounded">

    <div id="messages" class="text-center">
      <h3>This is an Age Screen</h3>
    </div>
    
    <div class="text-center">
      <p><input class="input" type="number" placeholder="Your Answer" v-model="answer"></p>
      <button class="btn btn-primary" @click="submit()">Submit</button>
    </div>
  </div>
</template>

<script>
import { db } from "../store/state"

export default {
  data() {
    return{
      answer: null
    }
  },
  methods: {
    submit(){
      //TODO: input only number allowed + required
      let ageArray = this.$store.state.userAge
      ageArray.push(this.answer)
      db.collection("userInfo").doc("userDoc").update({"age": ageArray})
      this.$router.push("ui-result");
    },
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