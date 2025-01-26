<script setup lang="ts">
  import SectionTitle from '../components/SectionTitle.vue';
  import PostCard from '../components/PostCard.vue';
</script>

<template>
    <section>
        <div class="mx-auto max-w-[48rem] px-4">
            <div class="w-full py-8">

                <SectionTitle title="Posts" />
                
                <p class="mb-8 italic text-xl">
                    Todos os posts que já fiz.
                </p>

                <div class="space-y-8">
                    <PostCard date="26 jan. 2025" link="https://dev.to/eunael/minha-experiencia-com-symfony-e-angular-32il" title=" Minha experiência com Symfony e Angular" description="Asssim foi para mim o cantato com Symfony e Angular." />

                    <PostCard date="26 jan. 2025" link="https://dev.to/eunael/quatro-palavras-da-mensageria-6ep" title="Quatro palavras da mensageria" description="Neste post falo sobre 4 termos importantes quando falamso sobre mensageria." />

                    <PostCard date="24 set. 2024" link="https://dev.to/eunael/execute-processos-no-linux-sem-interrupcoes-com-o-nohup-1eoj" title="Execute processos no linux sem interrupções com o nohup" description="Post que ensino como usar o nohup do linux para deixar processos sendo excutados sem precisar manter o terminal aberto." />

                    <PostCard date="17 set. 2024" link="https://dev.to/eunael/enums-e-lang-no-laravel-43am" title="Enums e lang no Laravel" description="Ensinando uma abordagem com enums e lang num projeto Laravel." />
                </div>
            </div>
        </div>
    </section>
</template>