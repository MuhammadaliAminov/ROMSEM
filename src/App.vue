<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppComp from "../src/components/AdsComp.vue"
</script>

<template>
  <AppComp/>
  <RouterLink to="/"></RouterLink>
  <RouterLink to="/about"></RouterLink>


  <RouterView />
</template>

<style scoped></style>
