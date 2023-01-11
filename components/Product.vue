<script lang="ts" setup>
const props = defineProps<{
  name: string,
  category: string,
  price: number,
  image: string,
  size: string[],
  sale: boolean
}>()
</script>

<template>
  <div class="card text-center" :class="sale ? 'border-danger' : ''">
    <img :alt="'Image of ' + props.name" :src="props.image" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ props.name }}</h5>
      <p class="card-text">
        {{ props.size.join(", ") }}<br>
        <span v-if="props.sale" class="text-danger">On sale</span>
      </p>
    </div>
  </div>
</template>