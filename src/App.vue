<template>
  <div id="app" class='container'>
    
    <div id="init-screen" class="col-11 mx-auto h-75" style="display:">
      <div class="text-center">
        <p>Were you ever curious if you are an average person in certain situation?</p>
        <p>
          <span>Am I Average</span> will ask you interesting questions and provide results collected from honest and reliable users.
        </p>
        <p>So now...</p>
        <p>Are You Average?</p>
      </div>
      <div class="text-center">
        <button class="btn btn-primary">Let's get started!</button>
      </div>
    </div>

    <div id="ui_question"></div>

    <div id="ui_result" style="display:none"></div>
    <div id="bl_question" style="display:none"></div>
    <div id="bl_result" style="display:none"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
