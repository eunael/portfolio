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
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a :href="link" target="_blank">
            <img class="rounded-t-lg" :src="imageSrc" alt="" />
        </a>
        <div class="p-5">
            <a :href="link" target="_blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ title }}</h5>
            </a>

            <p class="font-normal text-gray-700">{{ content }}</p>
        </div>
    </div>
</template>