<template>
    <div class="error-404">
        <div class="glitch" title="404">404</div>
        <div>
            <div class="glitch sub-header" title="Page Not Found">Page Not Found</div>
            <router-link to="/">Home</router-link> | <GoBack message="Go Back where you came from?!"/>
        </div>
    </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'

export default {
    name: '404View',
    components: { GoBack }
}
</script>

<style scoped>
.error-404 {
    display: flex;
    width: 100%;
    height: 40vh;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0;
    text-align: center;
}
div.glitch, .sub-header {
    font-weight: 400;
}
div.glitch {
    color: #fff;
    letter-spacing: -7px;
    font-size: 10rem;
    animation: glitch 1s linear infinite;
    padding-right: 1rem;
}
.glitch.sub-header {
    font-size: 4rem;
    font-weight: normal;
    padding-bottom: 3rem;
}

@keyframes glitch {
    2%, 64% {
        transform: translate(2px, 0) skew(0deg);
    }
    4%, 60% {
        transform: translate(-2px, 0) skew(0deg);
    }
    62% {
        transform: translate(0, 0) skew(5deg);
    }
}

div.glitch:before,
div.glitch:after {
    content: attr(title);
    position: absolute;
    left: 0;
}

div.glitch:before {
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {
    2%, 64% {
        transform: translate(2px, -2px);
    }
    4%, 60% {
        transform: translate(-2px, 2px);
    }
    62% {
        transform: translate(13px, -1px) skew(-13deg);
    }
}

div.glitch:after {
    animation: glitchBottom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBottom {
    2%, 64% {
        transform: translate(-2px, 0);
    }
    4%, 60% {
        transform: translate(-2px, 0);
    }
    62% {
        transform: translate(-22px, 5px) skew(21deg);
    }
}
</style>
