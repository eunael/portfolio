<script setup lang="ts">
  import SectionTitle from '../components/SectionTitle.vue';
  import ProjectCardHorizontal from '../components/ProjectCardHorizontal.vue';
  import ProjectCard from '../components/ProjectCard.vue';
</script>

<template>
    <section>
        <div class="mx-auto max-w-[48rem] px-4">
            <div class="w-full py-8">

                <SectionTitle title="Projetos" />
                
                <p class="mb-8 italic text-xl">
                    Todos os projetos que já fiz.
                </p>

                <div class="space-y-8 hidden sm:block">
                    <ProjectCardHorizontal
                    imageSrc="images/projects/catch-catch.png"
                    title="Catch-Catch"
                    content="Meu projeto de TCC. Um jogo de forma palavras para crianças em fase de alfabetização."
                    link="https://catch-catch-game.vercel.app/"/>

                    <ProjectCardHorizontal
                    imageSrc="images/projects/agenda-fisio.png"
                    title="Agenda Fisio"
                    content="Primeiro projeto freelancer. Sistema de gestão para fisioterapeutas."
                    link="https://agendafisio.nziim.com/" />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:hidden">
                    <ProjectCard
                    imageSrc="images/projects/catch-catch.png"
                    title="Catch-Catch"
                    content="Meu projeto de TCC. Um jogo de forma palavras para crianças em fase de alfabetização."
                    link="https://catch-catch-game.vercel.app/"/>

                    <ProjectCard
                    imageSrc="images/projects/agenda-fisio.png"
                    title="Agenda Fisio"
                    content="Primeiro projeto freelancer. Sistema de gestão para fisioterapeutas."
                    link="https://agendafisio.nziim.com/" />
                </div>
            </div>
        </div>
    </section>
</template>