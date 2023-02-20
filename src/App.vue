<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppComp from "../src/components/AdsComp.vue"
import NavComp from "../src/components/NavComp.vue"
import SlideComp from "../src/components/SlideComp.vue"
</script>

<template>
  <AppComp />
  <NavComp />
  <RouterLink to="/"></RouterLink>
  <RouterLink to="/about"></RouterLink>
  <header>
    <SlideComp />
  </header>

  <RouterView />
</template>

<style scoped></style>
