<template>
  <div
    id="ui-screen"
    class="screen col-11 mx-auto h-75 border border-primary p-4 rounded">

    <div id="messages" class="text-center">
      <h3>{{ getQuestion }}</h3>
    </div>
    
    <div class="text-center">
      <form id="inputField" @submit.prevent="submit">
        <br>
        <input class="input" type="number" placeholder="Your Answer" v-model="answer"
        v-validate="'required|numeric'">
        <br>
        <div class="helo-block alert alert-danger" v-show="errors.has('answer')">
          {{ errors.first('answer') }}
        </div>
        <input class="btn btn-primary" type="submit"/>
      </form>
      <p @click="randomQuestion()">skip to next question</p>
    </div>
  </div>
</template>

<script>
import { db } from "../store/state"
export default {
  data() {
    return{
      answer: []
    }
  },
  computed: {
    getQuestion(){
      return this.$store.getters.getUIQuestion[0].content;
    }
  },
  methods: {
    submit(){
      //TODO: clear the user input field after submission
      this.$validator.validateAll().then((result) => {
        if(result){
          let mId = this.$store.getters.getUIQuestion[0].id
          let answerArray = this.$store.getters.getUIQuestion[0].answer
          answerArray.push(this.answer)
          db.collection("uiQuestion").doc(mId).update({"answer" : answerArray})
          this.$router.push("ui-result");
          document.getElementById('inputField').reset();
          this.answer = []
        } else {
          alert('Enter your answer!')
        }
      })
    },
    randomQuestion() {
      let number = Math.floor(Math.random() * 2 + 1); // number between 1 and 2
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
