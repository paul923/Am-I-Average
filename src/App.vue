<template>
  <div id="app" class='container'>
    <transition 
    mode="out-in"
    enter-active-class="animated fadeInLeft"
    leave-active-class="animated fadeOutRight">
        <router-view></router-view>
    </transition>
  </div>

</template>

<script>
export default {
  beforeCreate: function() {
    this.$store.dispatch('setItems')
  },
  name: "app",
  components: {
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
