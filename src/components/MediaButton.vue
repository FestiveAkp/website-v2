<template>
    <a
        class="inline-block rounded text-gray-500 px-2 py-2 hover:text-gray-400 focus:shadow-outline"
        :href="props.link"
        :title="props.title"
        target="_blank"
        rel="noopener noreferrer"
    >
        <svg class="w-7"  viewBox="0 0 24 24">
            <slot></slot>
        </svg>
    </a>
</template>

<script setup>
    const props = defineProps({
        title: String,
        link: String
    });

    // Slot is for button icon SVG path element
</script>
