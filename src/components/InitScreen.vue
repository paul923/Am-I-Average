<template>
  <div
    id="init-screen"
    class="col-11 mx-auto h-75 border border-primary p-4 rounded">

    <div id="messages" class="text-center">
      <p>Were you ever curious if you are an average person in certain situation?</p>
      <p>Am I Average will ask you interesting questions and provide results collected from honest and reliable users.</p>
      <p>So now...</p>
      <p>Are You Average?</p>
    </div>
    
    <div class="text-center">
      <button 
      class="btn btn-primary"
      @click="nextPage()">Let's get started</button>
    </div>
  </div>
</template>

<script>

export default {
  watch: {
  },
  methods: {
    nextPage(){
      this.$router.push('age')
    }
  }
};
</script>