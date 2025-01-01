<script lang="ts">
    export default {
        props:  {
            imageSrc: String,
            title: String,
            content: String,
            link: String
        }
    }
</script>

<template>
    <div class="max-h-xs bg-white border border-gray-200 rounded-lg shadow grid grid-cols-2 hover:scale-110 transition ease-in-out">
        <div>
            <a :href="link" target="_blank">
                <img class="rounded-l-lg max-h-xs" :src="imageSrc" alt="" />
            </a>
        </div>

        <div class="p-5">
            <a :href="link" target="_blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ title }}</h5>
            </a>

            <p class="font-normal text-gray-700">{{ content }}</p>
        </div>
    </div>
</template>