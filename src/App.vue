<template>
    <section id="home" class="h-screen relative flex justify-center items-center">
        <div class="loading absolute flex space-x-4">
            <div id="loading-1" class="h-3 w-3 rounded-sm bg-gray-600" />
            <div id="loading-2" class="h-3 w-3 rounded-sm bg-gray-600" />
            <div id="loading-3" class="h-3 w-3 rounded-sm bg-gray-600" />
        </div>
        <div id="animated" class="invisible flex justify-center">
            <div class="absolute lg:fixed top-0 left-0 mt-6 ml-8">
                <div class="bar h-2 w-40 rounded-sm bg-gray-600 hover:bg-gray-500" @click="() => jumpTo('#home')" />
                <div class="bar h-2 w-28 rounded-sm bg-gray-600 hover:bg-gray-500 mt-2" @click="() => jumpTo('#projects')" />
            </div>
            <div class="p-8">
                <h1 id="name" class="text-6xl md:text-8xl font-league-spartan font-semibold text-primary whitespace-nowrap">Akash Pillai</h1>
                <h2 id="subtitle" class="text-3xl md:text-5xl font-league-spartan font-medium text-gray-500 mt-1">Software Engineer</h2>
                <p id="description" class="text-gray-200/90 mt-8 max-w-xl" style="width:95%">
                    Hey! I'm based in Chicago and my focus is on creating things for the modern web. I recently graduated from the University of Illinois Chicago and am currently a software engineer at
                    <a href="https://sproutsocial.com/" class="hover:underline text-emerald-400">Sprout Social</a>.
                </p>
                <div id="links" class="space-x-8 mt-12 border-t-2 border-gray-500 pt-2">
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
            <button id="scroll-hint" class="absolute p-4 text-gray-300" style="bottom:7vh" @click="() => jumpTo('#projects')">
                <svg id="down-arrow" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
            </button>
        </div>
    </section>

    <div class="pattern-cross-dots-sm h-8 text-gray-500" />

    <section id="projects" class="text-gray-200/90 p-6 pt-14">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-league-spartan font-semibold border-b-2 border-gray-500 pb-3">Featured Projects</h2>
            <div class="mt-8 flex flex-col justify-between space-y-8">
                <ProjectCard
                    title="Gradient Clock"
                    tools="React &ndash; Next.js &ndash; Granim.js &ndash; Chakra UI &ndash; GitHub Pages"
                    description="A beautifully simple date and time display in front of a colorful moving gradient."
                    view="https://akash.dev/clock/"
                    code="https://github.com/FestiveAkp/clock"
                />
                <ProjectCard
                    title="testfile.io"
                    tools="Clojure &ndash; Heroku"
                    description="Public API for retrieving dummy files of various sizes and filetypes for testing programs and networks."
                    view="http://testfile.io/"
                    code="https://github.com/FestiveAkp/testfile.io"
                />
                <ProjectCard
                    title="splashpoll.app"
                    tools="React &ndash; Next.js &ndash; Chakra UI &ndash; Vercel"
                    description="A full stack poll web application where users can create realtime multiple choice or open ended polls."
                    code="https://github.com/FestiveAkp/splashpoll.app"
                />
                <ProjectCard
                    title="Dark Mode for Laravel Documentation"
                    tools="JavaScript &ndash; Tailwind CSS &ndash; Laravel"
                    description="Designed, implemented, and contributed the official dark theme for the Laravel documentation website. Added theme switcher which selects between light, dark, and system color theme and saves the user's preference between visits."
                    view="https://laravel.com/docs/8.x"
                />
                <ProjectCard
                    title="Personal Website v2"
                    tools="Vue &ndash; GSAP &ndash; Tailwind CSS &ndash; Vite"
                    description="This website. Fully redesigned with colors and buttons taken from the first iteration."
                    view="https://akash.dev/"
                    code="https://github.com/FestiveAkp/website-v2"
                />
                <ProjectCard
                    title="AniList Tracker"
                    tools="Python &ndash; DigitalOcean"
                    description="A Twitter bot that fetches data from the AniList API daily and analyzes it, tracking changes in the rankings and tweeting out the results afterward."
                    view="https://twitter.com/AnimeTrackerBot"
                    code="https://github.com/FestiveAkp/animetracker"
                />
                <ProjectCard
                    title="IT 202 &ndash; Project 3"
                    tools="JavaScript &ndash; HTML Canvas"
                    description="A vertical scrolling desktop game where you dodge incoming objects."
                    view="https://akash.dev/it202-project3"
                    code="https://github.com/FestiveAkp/it202-project3"
                />
                <ProjectCard
                    title="Personal Website v1"
                    tools="11ty &ndash; Handlebars &ndash; Tailwind CSS &ndash; Matter.js"
                    description="The first iteration of my personal website."
                    code="https://github.com/FestiveAkp/website"
                />
                <ProjectCard
                    title="RPS"
                    tools="JavaScript &ndash; Skeleton CSS"
                    description="My first coding project, play rock-paper-scissors against the computer."
                    view="https://akash.dev/rps/"
                    code="https://github.com/FestiveAkp/rps"
                />
            </div>
        </div>
    </section>

    <footer class="h-2 bg-primary mt-24" />
</template>

<script setup>
    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import MediaButton from './components/MediaButton.vue';
    import GithubIcon from './components/icons/GitHubIcon.vue';
    import LinkedInIcon from './components/icons/LinkedInIcon.vue';
    import EmailArrowIcon from './components/icons/EmailArrowIcon.vue';
    import ProjectCard from './components/ProjectCard.vue';

    // Helper to smooth scroll to different sections of the document
    const jumpTo = elem => document.querySelector(elem).scrollIntoView({ behavior: 'smooth' });

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
            .from('#subtitle', { duration: 0.75, x: -100, opacity: 0, ease: 'expo.out' }, '-=0.60')
            .from('#description', { duration: 0.75, x: -100, opacity: 0, ease: 'expo.out' }, '-=0.55')
            .from('#links', { duration: 0.75, x: -100, opacity: 0, ease: 'expo.out' }, '-=0.65')
            .from('.bar', { x: -200, ease: 'expo.out', stagger: .2 }, '-=0.5')
            .from('#scroll-hint', { duration: 0.75, y: 50, opacity: 0, ease: 'expo.out' }, '-=0.5')
            .to('#down-arrow', { duration: 0.4, y: 10, ease: 'power4.in' }, '-=0.3')
            .to('#down-arrow', { duration: 0.4, y: 0, ease: 'expo.out' });
    }

    // Fade everything in quickly
    const show = () => {
        gsap.from('#animated', { autoAlpha: 0 });
    }

    // Do main animation after page has fully loaded
    window.addEventListener('load', () => {
        stopLoading();

        // Don't do full animation if user has scrolled down already
        if (window.scrollY === 0) {
            animate();
        } else {
            show();
        }
    });

    // Start loading animation
    onMounted(() => startLoading());
</script>
