<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <main class="min-h-screen flex flex-col justify-between bg-slate-50">
    <Header />

    <RouterView class="flex-grow"/>

    <Footer />
  </main>
</template>

<style scoped>
</style>
