<script setup lang="ts">
  import GithubIcon from '@/components/icons/GithubIcon.vue';
  import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';
  import EmailIcon from '@/components/icons/EmailIcon.vue';
  import SectionTitle from '@/components/SectionTitle.vue';
  import ProjectCard from '@/components/ProjectCard.vue';
  import PostCard from '@/components/PostCard.vue';

</script>

<template>
  <section>
    <div class="mx-auto max-w-[48rem] px-4">
        <div class="w-full py-8 border-b-2">

          <SectionTitle title="E aí!" />

          <p class="mb-4">
            Desenvolvedor Full Stack com mais de 4 anos de experiência. Tenho sólido conhecimento em desenvolvimento e manutenção de sistemas, com ênfase em PHP, Laravel e Livewire.
          </p>
          <p class="mb-4">
            Possuo experiência nos processos de desenvolvimento de software, desde a ideação até o deploy, resolução de problemas, desenvolvendo novas features, garantindo a qualidade do código e participando de discussões técnicas.
          </p>

          <ul class="flex gap-2 mb-4">
            <li>Social:</li>
            <li class="hover:scale-110 transition ease-in-out"><a href="https://github.com/eunael" target="_blank"><GithubIcon/></a></li>
            <li class="hover:scale-110 transition ease-in-out"><a href="https://linkedin.com/in/eunael" target="_blank"><LinkedinIcon/></a></li>
            <li class="hover:scale-110 transition ease-in-out"><a href="mailto:natanaelallves@gmail.com" target="_blank"><EmailIcon/></a></li>
          </ul>
        </div>

        <div class="w-full py-8 border-b-2">
          <h2 class="text-2xl font-bold mb-8">Posts</h2>

          <div class="space-y-8">
              <PostCard date="26 jan. 2025" link="https://dev.to/eunael/minha-experiencia-com-symfony-e-angular-32il" title=" Minha experiência com       Symfony e Angular" description="Asssim foi para mim o cantato com Symfony e Angular." />

              <PostCard date="26 jan. 2025" link="https://dev.to/eunael/quatro-palavras-da-mensageria-6ep" title="Quatro palavras da mensageria" description="Neste post falo sobre 4 termos importantes quando falamso sobre mensageria." />

              <PostCard date="24 set. 2024" link="https://dev.to/eunael/execute-processos-no-linux-sem-interrupcoes-com-o-nohup-1eoj" title="Execute processos no linux sem interrupções com o nohup" description="Post que ensino como usar o nohup do linux para deixar processos sendo excutados sem precisar manter o terminal aberto." />

              <PostCard date="17 set. 2024" link="https://dev.to/eunael/enums-e-lang-no-laravel-43am" title="Enums e lang no Laravel" description="Ensinando uma abordagem com enums e lang num projeto Laravel." />
          </div>
        </div>

        <div class="w-full py-8">
          <h2 class="text-2xl font-bold mb-8">Projetos</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ProjectCard
              imageSrc="images/projects/agenda-fisio.png"
              title="Agenda Fisio"
              content="Primeiro projeto freelancer. Sistema de gestão para fisioterapeutas."
              link="https://agendafisio.nziim.com" />

            <ProjectCard
              imageSrc="images/projects/run-factory.png"
              title="Run Factory"
              content="Pacote Laravel para executar Factories via comando artisan. "
              link="https://github.com/eunael/runfactory" />

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
