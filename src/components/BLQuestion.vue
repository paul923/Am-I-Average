<template>
  <div id="bl-screen" class="screen col-11 mx-auto h-75 border border-primary p-4 rounded">
    <div id="questionBox" class="text-center">
      <h3>{{ getQuestion }}</h3>
    </div>

    <div class="text-center">
      <button class="btn btn-success" @click="yesClick()">yes</button>
      <button class="btn btn-danger" @click="noClick()">no</button>
      <p @click="randomQuestion()">skip to next question</p>
    </div>
  </div>
</template>

<script>
import { db } from "../store/state"
export default {
  computed: {
    getQuestion(){
      return this.$store.getters.getBLQuestion[0].content;
    }
  },
  methods: {
    yesClick(){
      let mId = this.$store.getters.getBLQuestion[0].id
      let count = this.$store.getters.getBLQuestion[0].yesCount
      db.collection("blQuestion").doc(mId).update({"yesCount" : count + 1})

      this.$router.push("bl-result");
    },
    noClick(){
      let mId = this.$store.getters.getBLQuestion[0].id
      let count = this.$store.getters.getBLQuestion[0].yesCount
      db.collection("blQuestion").doc(mId).update({"noCount" : count + 1})

      this.$router.push("bl-result");
    },
    randomQuestion() {
      let number = Math.floor(Math.random() * 2 + 1); // number between 1 and 2;
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