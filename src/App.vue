<template>
    <section id="home" class="bg-primary-bg h-screen relative flex justify-center items-center p-9">
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
            <div>
                <h1 id="name" class="text-5xl md:text-8xl font-fredoka-one text-primary tracking-wide">Akash Pillai</h1>
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
            <div id="scroll-hint" class="absolute bottom-6 flex flex-col items-center text-gray-300">
                <svg id="down-arrow" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
            </div>
        </div>
    </section>
    <section id="projects" class="bg-purple-100 flex justify-center p-9">
        <div class="max-w-3xl">
            <h2 class="text-2xl font-semibold">Projects</h2>
            <div class="h-px bg-purple-200 mt-3" />

            <div class="mt-8 flex flex-col justify-between space-y-5">
                <ProjectCard
                    title="Splashpoll.app"
                    tools="React – Next.js – Chakra UI – Vercel"
                    description="A full stack poll web application where users can create realtime multiple choice or open ended polls."
                    view="https://splashpoll.app/"
                    code="https://github.com/FestiveAkp/splashpoll.app"
                />
                <ProjectCard
                    title="Personal Website v2"
                    tools="Vue – Tailwind CSS – GSAP – Vite"
                    description="This website. Fully redesigned with colors and buttons taken from the first iteration."
                    view="https://akash.dev/"
                    code="https://github.com/FestiveAkp/website-v2"
                />
                <ProjectCard
                    title="Gradient Clock"
                    tools="React – Next.js – Granim.js – Chakra UI – GitHub Pages"
                    description="A simple date and time display in front of a colorful moving gradient."
                    view="https://akash.dev/clock/"
                    code="https://github.com/FestiveAkp/clock"
                />
                <ProjectCard
                    title="Anime Tracker"
                    tools="Python – DigitalOcean"
                    description="A Twitter bot that fetches data from the AniList API daily and analyzes it, tracking changes in the rankings and tweeting out the results afterward."
                    view="https://twitter.com/AnimeTrackerBot"
                    code="https://github.com/FestiveAkp/animetracker"
                />
                <ProjectCard
                    title="Decader"
                    tools="Unity (C#)"
                    description="The final project for CS 426 – Video Game Design and Development, made by an interdisciplinary team of 2 Computer Science students and 1 Design student. You click on an advertisement online for a time-traveling bracelet and suddenly get sent back in time! You must pass through the different decades (the '90s and '80s), collect objects and fight enemies so you can return home."
                />
                <ProjectCard
                    title="Memeflix"
                    tools="Flutter – Firebase"
                    description="A meme generator mobile app which uses high resolution movie images from the TMDb API, showing memes from different users in a public feed. Group project made during the PickHacks 2021 Hackathon."
                    code="https://github.com/SunveerSingh/memeflix"
                />
                <ProjectCard
                    title="IT 202 – Project 3"
                    tools="JavaScript – HTML Canvas"
                    description="A vertical scrolling desktop game where you dodge incoming objects."
                    view="https://akash.dev/it202-project3"
                    code="https://github.com/FestiveAkp/it202-project3"
                />
                <ProjectCard
                    title="Personal Website v1"
                    tools="11ty – Handlebars – Tailwind CSS – Matter.js"
                    description="The first iteration of my personal website."
                    code="https://github.com/FestiveAkp/website"
                />
                <ProjectCard
                    title="RPS"
                    tools="JavaScript – Skeleton CSS"
                    description="My first coding project, play rock-paper-scissors against the computer."
                    view="https://akash.dev/rps/"
                    code="https://github.com/FestiveAkp/rps"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import LinkButton from './components/LinkButton.vue';
    import MediaButton from './components/MediaButton.vue';
    import GithubIcon from './components/icons/GitHubIcon.vue';
    import BracketsIcon from './components/icons/BracketsIcon.vue';
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
            .from('#links', { duration: 0.75, x: -100, opacity: 0, ease: 'expo.out' }, '-=0.55')
            .from('.bar', { x: -200, ease: 'expo.out', stagger: .2 }, '-=0.45')
            .from('#scroll-hint', { duration: 0.75, y: 50, opacity: 0, ease: 'expo.out' }, '-=0.4')
            .to('#down-arrow', { duration: 0.4, y: 10, ease: 'power4.in' }, '-=0.2')
            .to('#down-arrow', { duration: 0.5, y: 0, ease: 'expo.out' });
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
