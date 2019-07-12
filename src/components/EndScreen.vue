<template>
  <div
    id="init-screen"
    class="screen col-11 mx-auto h-75 border border-primary p-4 rounded">

    <div id="messages" class="text-center">
      <h1>No Question left!</h1>
    </div>
    
    <div class="text-center">
      <button 
      class="btn btn-primary"
      @click="refresh()">End</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    refresh(){
      location.reload();
    }
  }
};
</script>