<script lang="ts">
    export default {
        props: {
            title: String,
            date: String,
            description: String,
            link: String
        }
    }
</script>

<template>
    <div>
        <a class="hover:underline" :href="link" target="_blank">
            <p class="text-xl font-bold">{{ title }}</p>
        </a>
        <p class="text-sm text-gray-500">{{ date }}</p>
        <p>{{ description }}</p>
    </div>
</template>