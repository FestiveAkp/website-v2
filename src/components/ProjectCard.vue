<template>
    <div class="">
        <header>
            <h3 class="text-lg font-semibold">
                <a :href="props.view || props.code" class="hover:underline">
                    {{ props.title }}
                </a>
            </h3>
            <h4 class="text-sm text-gray-400 text-opacity-80">{{ props.tools }}</h4>
        </header>
        <p class="my-3">{{ props.description }}</p>
        <footer v-if="props.view || props.code" class="text-sm">
            <a v-if="props.view" :href="props.view" class="text-green-400 hover:underline">View Project</a>
            <span v-if="props.view && props.code">&nbsp;&ndash;&nbsp;</span>
            <a v-if="props.code" :href="props.code" class="text-green-400 hover:underline">Source Code</a>
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
