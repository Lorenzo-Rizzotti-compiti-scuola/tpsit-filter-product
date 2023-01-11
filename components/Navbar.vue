<script lang="ts" setup>

const colorMode = useColorMode();

function changeColor(e: any) {
  colorMode.preference = e.target.checked ? 'dark' : 'light'
  console.log(e.target.checked)
}

const isDarkModeEnabled = computed(() => colorMode.value === 'dark');

const search = ref('');

const categories = [
  {
    name: "All",
    to: ""
  }, {
    name: "Shirts",
    to: "shirts",
  },
  {
    name: "Jeans",
    to: "jeans"
  },
  {
    name: "Jackets",
    to: "jackets"
  },
  {
    name: "Accessories",
    sub: [
      {
        name: "Watches",
        to: "watches"
      },
      {
        name: "Sunglasses",
        to: "sunglasses"
      },
      {
        name: "Headphones",
        to: "headphones"
      }
    ]
  }
]
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <Icon name="bi:cart"/>
      </NuxtLink>
      <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              class="navbar-toggler"
              data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="category in categories" :class="category.sub ? 'dropdown' : ''" class="nav-item">
            <div v-if="category.sub">
              <a aria-expanded="false" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                 role="button">
                {{ category.name }}
              </a>
              <ul class="dropdown-menu">
                <li><NuxtLink v-for="subcategory in category.sub" class="dropdown-item" :to="'?cat=' +subcategory.to">{{ subcategory.name }}</NuxtLink></li>
              </ul>
            </div>
            <NuxtLink v-else :to="'?cat=' + category.to" active-class="active" class="nav-link">{{ category.name }}</NuxtLink>
          </li>
        </ul>
        <div class="form-check form-switch">
          <input id="switchColor" :checked="isDarkModeEnabled" class="form-check-input" type="checkbox"
                 @input="changeColor">
          <label class="form-check-label" for="switchColor">
            <Icon name="uil:moon"/>
          </label>
        </div>
        <div class="d-flex">
          <input aria-label="Search" class="form-control me-2" placeholder="Search" type="search" v-model="search">
          <NuxtLink :to="'?search=' + search"><button class="btn btn-outline-success" type="submit">Search</button></NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>