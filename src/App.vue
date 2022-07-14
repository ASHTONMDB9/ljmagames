<template>
<Navbar />
  <router-view/>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 75% 27%, rgb(12, 74, 110) 0, transparent 18%), radial-gradient(at 50% 71%, rgb(88, 28, 135) 0, transparent 19%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
nav {
  padding: 30px;
}
</style>
