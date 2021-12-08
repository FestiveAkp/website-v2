<template>
    <section id="home" class="pattern-cross-dots-md text-gray-700 bg-primary-bg h-screen relative flex justify-center items-center p-9">
        <div class="loading absolute flex space-x-4">
            <div id="loading-1" class="h-3 w-3 rounded-sm bg-gray-600" />
            <div id="loading-2" class="h-3 w-3 rounded-sm bg-gray-600" />
            <div id="loading-3" class="h-3 w-3 rounded-sm bg-gray-600" />
        </div>
        <div id="animated" class="invisible flex justify-center">
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
    import { gsap } from 'gsap';
    import MediaButton from './components/MediaButton.vue';
    import GithubIcon from './components/icons/GitHubIcon.vue';
    import LinkedInIcon from './components/icons/LinkedInIcon.vue';
    import EmailArrowIcon from './components/icons/EmailArrowIcon.vue';

    // Loading animation while assets are being fetched
    const startLoading = () => {
        const distance = 7;
        const duration = 0.2;
        const ease = 'power2.out';
        gsap.timeline({ repeat: -1 })
            .to('#loading-1', { duration, y: -distance, ease })
            .to('#loading-1', { duration, y: 0, ease })
            .to('#loading-2', { duration, y: -distance, ease })
            .to('#loading-2', { duration, y: 0, ease })
            .to('#loading-3', { duration, y: -distance, ease })
            .to('#loading-3', { duration, y: 0, ease })
    }

    // Hide the loading animation and clean up afterwards
    const stopLoading = () => {
        gsap.to('.loading', { duration: 0.4, opacity: 0 });

        setTimeout(() => {
            document.querySelector('.loading').remove();
        }, 3000);
    }

    // Piecewise animation routine
    const animate = () => {
        gsap.timeline()
            .from('#animated', { autoAlpha: 0 })
            .from('#name', { duration: 0.75, x: -100, opacity: 0, ease: 'expo.out' })
            .from('#links', { duration: 0.75, y: 100, opacity: 0, ease: 'expo.out' }, '-=0.55');
    }

    // Do main animation after page has fully loaded
    window.addEventListener('load', () => {
        stopLoading();
        animate();
    });

    // Start loading animation
    onMounted(() => startLoading());
</script>
