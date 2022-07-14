<template>
      <div id="container">
      <div class="container">
      <div class="LG">
      <h1 id="logo1">LG</h1>
      <h3 id="logo2">LJMA GAMES</h3>
      <img id="controller" src="https://i.postimg.cc/T2KyN6YZ/home-removebg-preview.png" alt="">
</div>
      </div>
      </div>
</template>

<script>
</script>

<style scoped>
#container {
    margin-top: -100px;
    background-color: white;
    height: 100vh;
    overflow-x: hidden;
}
.container {
    padding-top: 50px;
}
.LG {
    margin-top: 100px;
    z-index: 150;
}
#controller{
    margin-top: 150px;
    margin-left: 60px;
    width: 90vw;
    position: absolute;
    left: 15px;
    transition: all 3.5s ease-in-out;
    top:40px;
    transform: rotate(20deg);
    margin-left: -380px;
    filter: drop-shadow(20px 8px 8px #343333fa);
}
#controller:hover {
    transform: rotate(365deg);
}
#logo1 {
    background: -webkit-linear-gradient(rgb(5, 202, 156), rgb(184, 14, 184));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: serif;
    display: flex;
    justify-content: center;
    font-size: 500px;
    text-shadow: 2px 10px 80px;
    z-index: 100;
}
#logo2 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    letter-spacing: 20px;
    justify-content: center;
    border-color: black;
    border-width: 10px;
    font-size:  100px;
    color: white;
    text-shadow: 3px 3px 15px black;
    margin-top: -350px;
    margin-bottom: 80px;
}
</style>