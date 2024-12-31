<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
      <div class="mx-auto max-w-[48rem] px-4">
        <div class="w-full flex justify-between items-center py-8 border-b-2">
          <div>
            <RouterLink to="/" class="text-2xl">eunael</RouterLink>
          </div>
  
          <nav>
            <ul class="flex gap-8">
              <li><RouterLink to="/projects">Projetos</RouterLink></li>
              <li><RouterLink to="/about">Sobre</RouterLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
</template>