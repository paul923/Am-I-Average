<template>
  <div
    id="ui-screen"
    class="screen col-11 mx-auto h-75 border border-primary p-4 rounded">

    <div id="messages" class="text-center">
      <h3>{{ getQuestion }}</h3>
    </div>
    
    <div class="text-center">
      <button class="btn btn-primary" @click="storeAnswer()">Next</button>
      <p @click="randomQuestion()">skip to next question</p>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      questions: []
    };
  },
  computed: {
    getQuestion: function(){
      // Randomizing questions array
      this.questions = this.questions.sort(() => Math.random() - 0.5);
      return this.questions[0]
    }
  },
  firestore() {
    return {
      questions: db.collection('uiQuestion')
    }
  },
  methods: {
    storeAnswer(){
      //TODO: Store the user input to the db
      this.$router.push("ui-result");
    },
    randomQuestion() {
      let number = Math.floor(Math.random() * 2 + 1); // number between 1 and 2;

      // removes the first item in the array
      this.questions.shift();

      // Decides a question between user input and boolean
      switch (number) {
        case 1:
          this.$router.push("ui-question");
          break;
        case 2:
          this.$router.push("bl-question");
          break;
      }
    }
  }
};
</script>

<style scoped>
  p {
    color: #4287f5;
    cursor: pointer;
  }

  p:hover {
    color: #0f3d86;
  }

</style>
