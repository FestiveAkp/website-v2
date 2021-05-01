<template>
    <div class="bg-white shadow rounded-md px-4 py-3">
        <header class="mb-3">
            <h3 class="text-lg font-semibold">{{ props.title }}</h3>
            <h4 class="text-sm italic text-gray-700">{{ props.tools }}</h4>
        </header>
        <p>{{ props.description }}</p>
        <footer v-if="props.view || props.code" class="text-sm mt-3">
            <a v-if="props.view" :href="props.view" class="underline">View Project</a>
            <span v-if="props.view && props.code">&nbsp;-&nbsp;</span>
            <a v-if="props.code" :href="props.code" class="underline">Source Code</a>
        </footer>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        tools: String,
        description: String,
        view: String,
        code: String
    });
</script>
