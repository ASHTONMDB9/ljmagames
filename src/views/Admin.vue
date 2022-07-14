 <template>
  <div><h1>LJMA GAMES</h1></div>
  <div>
    <table>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Company</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v v-for="product of product" :key="product.id">
          <td scope="row"><img v-bind:src="product.image" alt="" /></td>
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.company }}</td>
          <td>{{ product.price }}</td>
          <td><button @click="deleteProduct">:scissors:</button></td>
          <td><button @click="editProduct">✎</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
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
h1 {
  background: -webkit-linear-gradient(rgb(5, 202, 156), rgb(184, 14, 184));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
th {
  background: -webkit-linear-gradient(rgb(5, 202, 156), rgb(184, 14, 184));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  color: white;
  text-shadow: 3px 3px 15px black;
}
td {
  border: 2px solid white;
  width: 20vw !important;
  font-weight: bold;
}
td:hover {
  background-color: white;
  box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
  animation: gloski 0.5s linear infinite;
  transition: box-shadow 1s;
}
@keyframes gloski {
  0% {
    box-shadow: -5px -5px 30px 5px crimson, 5px 5px 30px 5px blue;
  }
  50% {
    box-shadow: 5px 5px 30px 5px yellow, -5px -5px 30px 5px purple;
  }
  100% {
    box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
  }
}
img {
  width: 10vw;
  height: 15vh;
}
</style>