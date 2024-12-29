<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
      <div class="mx-auto max-w-[48rem] px-4">
        <div class="w-full flex justify-between py-8 border-b-2">
          <div>
            <RouterLink to="/" class="text-2xl">eunael</RouterLink>
          </div>
  
          <nav>
            <ul class="flex">
              <li><RouterLink to="/about">Sobre</RouterLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
</template>