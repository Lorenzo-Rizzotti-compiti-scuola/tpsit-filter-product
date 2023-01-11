<script lang="ts" setup>
import Navbar from "~/components/Navbar.vue";
import {computed} from "@vue/reactivity";

const {data} = await useFetch('/api/products');

const route = useRoute();


const products = computed(() => {
  if (!data.value) {
    return [];
  }

  return data.value.filter((product) => {
    if (typeof route.query.search == "string") {
      if (route.query.search.length > 0) {
        return product.productName.toLowerCase().includes(route.query.search.toLowerCase());
      }
    } else if (typeof route.query.cat == "string") {
      if (route.query.cat.length > 0) {
        return product.category.toLowerCase().includes(route.query.cat.toLowerCase());
      }
    }
    return true;
  })
})

</script>

<template>
  <ColorScheme>
    <Navbar/>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div v-for="product in products" class="col">
          <Product :category="product.category" :image="product.image" :name="product.productName"
                   :price="product.price"
                   :sale="product.sale" :size="product.size"></Product>
        </div>
      </div>
    </div>
  </ColorScheme>
</template>