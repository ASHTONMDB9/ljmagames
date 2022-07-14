<template>
  <div class="flex">
    <div id="body" v-for="product of product" :key="product.id">
      <div class="everything">
        <div id="cards" class="card col-lg-4" style="width: 290px">
          <img v-bind:src="product.image" alt="" />
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p>
            <i class="fa-solid fa-bolt-lightning"></i>
            {{ product.category }}
          </p>
          <p><i class="fa-solid fa-horse-head"></i> {{ product.company }}</p>
          <p><i class="fa-solid fa-dollar-sign"></i> {{ product.price }}</p>
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
.flex {
  background-color: #000000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 25px;
}
#cards router-link {
  text-decoration: none;
}
.card-display {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 50px;
}
#cards {
  margin-top: 3%;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 1px 1px 2px rgb(0, 0, 0);
}
#cards2 {
  margin-right: auto;
  margin-left: auto;
}
</style>