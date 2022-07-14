<template>
  <div class="CardView">

    <div id="tv-body>">
        <div id="tv">
              <span class="antenna"></span>
              <span class="screen">Minecraft</span>
              <span class="controls-1"></span>
              <span class="controls"></span>
              <span class="controls-3"></span>
        </div>
    </div>

    <h2 id="page1">PRODUCTS</h2>
      <div class="filter">
        <div class="container-fluid">
          <div class="card bg-transparent border-0 me-5 ms-5">
            <div class="card-body d-flex justify-content-center">
              
              <select class="form-select ms-3 me-3" id="track" onchange="filter2()" style="width: 200px;" aria-label="Default select example">
                <option selected value="all">Category</option>
                <option value="">Games</option>
                <option value="">Console</option>
                <option value="">Other</option>
              </select>
  
              <select class="form-select ms-3 me-3" id="nation" onchange="filter3()" style="width: 200px;" aria-label="Default select example">
                <option selected value="all">Price</option>
                <option value="">Ascending</option>
                <option value="">Descending</option>
              </select>
              
              <select class="form-select ms-3 me-3" id="class" onchange="filter1()" style="width: 200px;" aria-label="Default select example">
                <option selected value="all">Company</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>  
                    
              </div>
            </div>
          </div>
        </div>
<div class="flex">
    <div id="body" v-for="product of product" :key="product.id">
      <div class="everything">
        <div id="cards" class="card col-lg-4 bg-black" style="width: 290px; height: 700px;">
          <img v-bind:src="product.image" alt="" />
          <h5 class="card-title" style="color: white;">{{ product.title }}</h5>
          <p class="card-text" style="color: white;">{{ product.description }}</p>
          <p style="color: white;">
            {{ product.category }}
          </p>
          <p style="color: white;"> {{ product.company }}</p>
          <p style="color: white;"> {{ product.price }}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: { Card },
  mounted() {
    this.$store.dispatch("ShowProducts");
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
};
</script>


<style scoped>
#tv {
    box-shadow: 8px 8px 8px 2px rgba(0, 0, 0, 0.4);
    border-radius:5px;
    border: 2px lightgrey solid;
    position: relative;
    display: inline-block;
    background: #464646;
    z-index: 0;
    margin-top: 150px;
    margin-left: 300px;
    text-shadow: rgb(61, 61, 59) 1px 0 10px;
    width: 234px;
    transition: all 3s ease-in-out;
    height: 163px;}
#tv::before {
    border-radius: 2px 2px 0 0;
    content: " ";
    position: absolute;
    display: block;
    background: #464646;
    width: 52px;
    height: 3px;
    }
#tv::after {
    border-radius: 2px 2px 0 0;
    content: " ";
    position: absolute;
    display: block;
    background: #464646;
    width: 26px;
    height: 4px;
    top: -7px;
    left: 36px;
    }
#tv:hover{
    transform: scale(1.8) rotate(12deg);
    }
.screen {
    border-radius: 3px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    position: absolute;
    display: block;
    background-image: url(https://i.ibb.co/NYLR5Rh/giphy.gif);
  background-size: cover;
    width: 173px;
    height: 147px;
    color:white;
border: 1px grey solid;
    top: 8px;
    left: 8px;
  }
.antenna::before {
      transform: rotate(-15deg);
      content: " ";
      position: absolute;
      display: block;
      background: #464646;
      width: 2px;
  border:white 1px solid;
      height: 70px;
      top: -72px;
      left: 37px;
    }
    .antenna:after {
      transform: rotate(35deg);
      content: " ";
      position: absolute;
      display: block;
       border:white 1px solid;
      background: #464646;
      width: 2px;
      height: 50px;
      top: -52px;
      left: 66px;
    }
.controls {
    border-radius: 2px ;
    position: absolute;
    display: block;
    background: #A49870;
    width: 37px;
    height: 57px;
    top: 98px;
    left: 189px;
}
.controls-1 {
    border-radius: 2px;
    position: absolute;
    display: block;
    background: black;
border: 1px grey solid;
    width: 37px;
    height: 82px;
    top: 8px;
  left: 189px;}
.controls-1::before {
     border-radius: 50%;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2), 8px 4px 3px 1px rgba(0, 0, 0, 0.2),
        6px 2px 3px 1px rgba(0, 0, 0, 0.2);
      content: " ";
      position: absolute;
      display: block;
      background: grey;
      z-index: 1;
      width: 23px;
      height: 23px;
      top: 10px;
      left: 7px;
    }
    .controls-1:after {
      transform:rotate(40deg);
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      border: 0.5px grey solid;
      content: " ";
      position: absolute;
      display: block;
      background: black;
      z-index: 10;
      width: 3px;
      height: 25px;
      top: 9px;
      left: 17px;
       transition: all 0.35s ease-in-out;
    }
.controls-1:hover:after{
  transform:rotate(360deg)
}
.controls-3{
  display: block;
  border: 1px solid black grey;
  height: 58px;
  width: 39px;
  position: absolute;
  background: grey;
  z-index: 100;
  bottom: 6.5px;
  right: 5.5px;
}
.controls-3::before{
  content:'';
  background-color:black;
  width: 25px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  height :5px;
  position: absolute;
  top: 15px;
  border-radius: 30%;
  left: 6px;
}
#page1 {
    background: -webkit-linear-gradient(rgb(5, 202, 156), rgb(184, 14, 184));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: serif;
    display: flex;
    justify-content: center;
    font-size: 200px;
    text-shadow: 2px 10px 80px;
    z-index: 100;
    margin-bottom: -100px;
}
</style>
