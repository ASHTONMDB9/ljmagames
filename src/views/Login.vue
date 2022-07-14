<template>
  <div class="loginPage">
    <form class="box glow" @submit.prevent="login">
      <div class="log">
      <h3 id="logo2">LJMA GAMES</h3>
      <input type="text" v-model="email" placeholder="Email" />
      <input type="text" v-model="password" placeholder="Password" />
      <button id="login" type="submit">Login</button>
      <router-link to="/signUp">Don't have an account, Sign up</router-link>
      <div id="person" v-if="user"> Welcome {{ user.full_name }}</div>
      </div>
    </form>
  </div>
</template>
<script>

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>



<style scoped>
body {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 75% 27%, rgb(12, 74, 110) 0, transparent 18%), radial-gradient(at 50% 71%, rgb(88, 28, 135) 0, transparent 19%);
}
.loginPage {
    background-color: rgba(0, 0, 0, 0.205);
    display: flex;
    height: 100vh;
}
.box{
  position: relative;
  display: flex;
  justify-content: center;
  margin: 10% auto 0;
  width: 50%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.342);
}
.log {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 700px;
}
#logo2 {
    background: -webkit-linear-gradient(rgb(5, 202, 156), rgb(184, 14, 184));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    letter-spacing: 20px;
    justify-content: center;
    border-color: black;
    border-width: 10px;
    font-size: 50px;
    color: white;
    text-shadow: 3px 3px 15px black;
    margin-top: -35px;
}
#login {
  margin-top: 20px;
  width: 200px;
}
#login:hover {
  background-color: black;
  color: white;
}
.glow::before , .glow::after{
  content:'';
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(45deg , crimson, blue, crimson, blue);
  background-size: 400%;
  width: calc(100% + 5px);
  height: calc(100% + 5px);
  z-index: -5;
  animation: animate 20s linear infinite;
}
@keyframes animate{
  0%{
    background-position: 0 0;
  }
  50%{
    background-position: 400% 0;
  }
  100%{
    background-position: 0 0;
  }
}
.glow::after{
  filter: blur(80px)
}
#person { 
    margin-top: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    justify-content: center;
    border-color: black;
    border-width: 10px;
    font-size: 30px;
    color: white;
    text-shadow: 3px 3px 15px black;
}
</style>