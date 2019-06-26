<template>
  <div id="bl-screen" class="col-11 mx-auto h-75 border border-primary p-4 rounded">
    <div id="questionBox" class="text-center">
      <p>{{ getQuestion }}</p>
    </div>

    <div class="text-center">
      <button class="btn btn-primary" @click="randomQuestion()">yes</button>
      <button class="btn btn-danger" @click="randomQuestion()">no</button>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      questions: [{
        content: "test1"
      },
      {
        content: "test2"
      },
      {
        content: "test3"
      }]
    };
  },
  computed: {
    getQuestion: function(){
      if (this.questions.length == 0){
        return "No more question!"
      } else {
        return this.questions[0].content
      }
    }
  },
  firestore() {
    return {
      // questions: db.collection('blQuestion')
    }
  },
  created() {
    this.question = "helloworld"
  },
  methods: {
    randomQuestion() {
      let number = Math.floor(Math.random() * 2 + 1); // number between 1 and 2;

      // Decides a question between user input and boolean
      switch (number) {
        case 1:
          this.$router.push("ui-question");
          break;
        case 2:
          this.$router.push("bl-question");
          // removes the first item in the array
          this.questions.shift();
          break;
      }
    }
  }
};
</script>