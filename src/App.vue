<template>
  <div id="app" class='container'>
    
    <init-screen></init-screen>



    <div id="ui_question"></div>
    <div id="ui_result" style="display:none"></div>
    <div id="bl_question" style="display:none"></div>
    <div id="bl_result" style="display:none"></div>
  </div>

</template>

<script>
import InitScreen from './components/InitScreen.vue';

export default {
  name: "app",
  components: {
    InitScreen
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
