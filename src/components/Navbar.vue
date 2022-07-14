<template>
       <nav id="nav" class="navbar navbar-dark navbar-expand-lg">
    <div class="container-fluid">
      <div class="brand">
      <a href="./index.html"><img id="navlogo" src="https://i.postimg.cc/SNGPvJ5m/Nice-Png-game-controller-png-300397.png"></a>
      </div>
      <a id="navbrand" class="navbar-brand fw-bold" href="./index.html">LG</a>
      <a href="./index.html"><p id="logo3">Gamers don't die they respawn, what doesn't kill you gives you XP</p></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="Navbar nav">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll p-3 mb-5 rounded me-5 ms-5" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/CardView">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Login">LOGIN</router-link>
        </li>
                <li class="nav-item">
            <router-link class="nav-link" to="/signUp">SIGNUP</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/Contact">CONTACT</router-link>
        </li>
      </ul>
      <form id="bar" class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Looking for something..." aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    components: {

    }
}
</script>


<style>

/*Navbar*/
.navbar {
    z-index: 1000;
    height: 80px;
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 75% 27%, rgb(12, 74, 110) 0, transparent 18%), radial-gradient(at 50% 71%, rgb(88, 28, 135) 0, transparent 19%);
}
.nav-link:hover {
    text-decoration: underline blue 3px;
}
#navlogo {
    color: black;
    margin-bottom: 15px;
    height: 50px;
    width: 55px;
}
.brand {
  background-color: white;
}
#navbrand {
    margin-top: -30px;
}
#logo3 {
  color: white;
    margin-top: 20px;
    margin-left: -40px;
    margin-right: 165px;
    font-style: italic;
    font-weight: bold;
}
#bar {
    width: 20rem;
}
a {
    text-decoration: none;
}
</style>