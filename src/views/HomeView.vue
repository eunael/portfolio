<script setup lang="ts">
  import GithubIcon from '../components/icons/GithubIcon.vue';
  import LinkedinIcon from '../components/icons/LinkedinIcon.vue';
  import EmailIcon from '../components/icons/EmailIcon.vue';
  import SectionTitle from '../components/SectionTitle.vue';

</script>

<template>
  <section>
    <div class="mx-auto max-w-[48rem] px-4">
        <div class="w-full py-8">

          <SectionTitle title="E aí!" />
          
          <p class="text-justify mb-4">
            Sou desenvolvedor Full Stack há mais de 4 anos, focado em simplificar a vida dos usuários por meio de soluções de software eficazes. Tenho sólido conhecimento em desenvolvimento e manutenção de sistemas, com ênfase em PHP, Laravel e Livewire.
          </p>
          <p class="text-justify mb-4">
            Possuo experiência nos processos de desenvolvimento de software, desde a ideação até o deploy, incluindo resolução de problemas, desenvolvendo novas features, participando de discussões técnicas e garantindo a qualidade do código.
          </p>
          <p class="text-justify mb-4">
            <ul class="flex gap-2">
              <li>Social:</li>
              <li><a href="https://github.com/eunael" target="_blank"><GithubIcon/></a></li>
              <li><a href="https://linkedin.com/in/einael" target="_blank"><LinkedinIcon/></a></li>
              <li><a href="mailto:natanaelallves@gmail.com" target="_blank"><EmailIcon/></a></li>
            </ul>
          </p>
        </div>
    </div>
  </section>
</template>
