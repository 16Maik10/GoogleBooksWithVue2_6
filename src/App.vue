<template>
  <div id="app">
    <app-main-wrapper></app-main-wrapper>
  </div>
</template>

<script>

import appMainWrapper from "./components/app-main-wrapper.vue"


export default {

  name: 'App',
  components: {
    appMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
