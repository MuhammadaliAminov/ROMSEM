<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">Page</RouterLink>


  <RouterView />
</template>

<style scoped></style>
