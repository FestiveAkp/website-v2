<template>
    <section id="home" class="pattern-cross-dots-md text-gray-700 bg-primary-bg h-screen relative flex justify-center items-center p-9">
        <div class="flex justify-center">
            <div>
                <h1 id="name" class="text-5xl md:text-8xl text-center font-fredoka-one text-primary tracking-wide cursor-default">Akash Pillai</h1>
                <div id="links" class="mt-12 flex justify-around">
                    <MediaButton title="GitHub" link="https://github.com/FestiveAkp">
                        <GithubIcon />
                    </MediaButton>
                    <MediaButton title="Let's get in touch!" link="mailto:akashp807@gmail.com">
                        <EmailArrowIcon />
                    </MediaButton>
                    <MediaButton title="LinkedIn" link="https://www.linkedin.com/in/akash-pillai-/">
                        <LinkedInIcon />
                    </MediaButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue';
    import MediaButton from './components/MediaButton.vue';
    import GithubIcon from './components/icons/GitHubIcon.vue';
    import LinkedInIcon from './components/icons/LinkedInIcon.vue';
    import EmailArrowIcon from './components/icons/EmailArrowIcon.vue';
</script>
