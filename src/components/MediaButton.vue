<template>
    <a
        class="inline-block rounded text-primary px-3 py-3 hover:bg-primary hover:text-primary-bg focus:shadow-outline"
        :href="props.link"
        :title="props.title"
        target="_blank"
        rel="noopener noreferrer"
    >
        <svg class="w-7 md:w-8"  viewBox="0 0 24 24">
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
