<template>
    <section class="bg-primary-bg h-screen flex flex-col justify-center items-center p-9">
        <div>
            <h1 class="text-5xl md:text-8xl font-knewave text-primary tracking-wide">Akash Pillai</h1>
            <div class="mt-12 flex justify-between max-w-xs">
                <LinkButton title="GitHub" link="https://github.com/FestiveAkp">
                    <GithubIcon />
                </LinkButton>
                <LinkButton title="LinkedIn" link="https://www.linkedin.com/in/akash-pillai-/">
                    <LinkedInIcon />
                </LinkButton>
                <LinkButton title="Email Me" link="mailto:apilla20@uic.edu">
                    <EmailArrowIcon />
                </LinkButton>
            </div>
        </div>
    </section>
    <section class="bg-purple-100 flex justify-center p-9">
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
                    tools="Vue – Tailwind CSS – Vite"
                    description="This website. Fully redesigned with colors and buttons taken from the first iteration."
                    view="https://akash.dev/"
                    code="#"
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
                    title="Anime Tracker"
                    tools="Python – DigitalOcean"
                    description="A Twitter bot that fetches data from the AniList API daily and analyzes it, tracking changes in the rankings and tweeting out the results afterward."
                    view="https://twitter.com/AnimeTrackerBot"
                    code="https://github.com/FestiveAkp/animetracker"
                />
                <ProjectCard
                    title="Gradient Clock"
                    tools="React – Next.js – Granim.js – Chakra UI – GitHub Pages"
                    description="A simple date and time display in front of a colorful moving gradient."
                    view="https://akash.dev/clock/"
                    code="https://github.com/FestiveAkp/clock"
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
                    view="#"
                    code="#"
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
    import LinkButton from './components/LinkButton.vue';
    import GithubIcon from './components/icons/GitHubIcon.vue';
    import LinkedInIcon from './components/icons/LinkedInIcon.vue';
    import EmailArrowIcon from './components/icons/EmailArrowIcon.vue';
    import ProjectCard from './components/ProjectCard.vue';

    console.log('hi (ᵔᴥᵔ)');
</script>
