<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <main class="min-h-screen flex flex-col justify-between">
    <Header />

    <RouterView class="flex-grow"/>

    <Footer />
  </main>
</template>

<style scoped>
</style>
