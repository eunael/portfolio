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
                        imageSrc="images/projects/agenda-fisio.png"
                        title="Agenda Fisio"
                        content="Primeiro projeto freelancer. Sistema de gestão para fisioterapeutas."
                        link="https://agendafisio.nziim.com/" />

                    <ProjectCardHorizontal
                        imageSrc="images/projects/pegai.png"
                        title="Pegai"
                        content="Projeto no GitHub de um compartilhador de arquivos. Feito com Symfony (API) e Angular"
                        link="https://github.com/eunael/pegai" />
                    
                    <ProjectCardHorizontal
                        imageSrc="images/projects/logs-system.png"
                        title="Logs System"
                        content="Este é projeto-exemplo demostrando um sistema registrador de logs assíncrono utilizando o RabbitMQ como message broker. "
                        link="https://github.com/eunael/log_system" />

                    <ProjectCardHorizontal
                        imageSrc="images/projects/catch-catch.png"
                        title="Catch-Catch"
                        content="Meu projeto de TCC. Um jogo de forma palavras para crianças em fase de alfabetização."
                        link="https://catch-catch-game.vercel.app/"/>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:hidden">
                    <ProjectCard
                        imageSrc="images/projects/agenda-fisio.png"
                        title="Agenda Fisio"
                        content="Primeiro projeto freelancer. Sistema de gestão para fisioterapeutas."
                        link="https://agendafisio.nziim.com/" />

                    <ProjectCard
                        imageSrc="images/projects/pegai.png"
                        title="Pegai"
                        content="Projeto no GitHub de um compartilhador de arquivos. Feito com Symfony (API) e Angular"
                        link="https://github.com/eunael/pegai" />

                    <ProjectCard
                        imageSrc="images/projects/logs-system.png"
                        title="Logs System"
                        content="Este é projeto-exemplo demostrando um sistema registrador de logs assíncrono utilizando o RabbitMQ como message broker. "
                        link="https://github.com/eunael/log_system" />

                    <ProjectCard
                        imageSrc="images/projects/catch-catch.png"
                        title="Catch-Catch"
                        content="Meu projeto de TCC. Um jogo de forma palavras para crianças em fase de alfabetização."
                        link="https://catch-catch-game.vercel.app/"/>
                </div>
            </div>
        </div>
    </section>
</template>