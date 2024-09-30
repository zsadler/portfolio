<script>
import ResumeTechStackIcons from '@/components/ResumeTechStackIcons.vue';
import {icons} from '@/data/iconsData.json';
import resumeData from '@/data/resumeData.json';

export default {
    name: 'ResumeIntroduction',
    components: { ResumeTechStackIcons },
    data() {
        return {
            icons,
            certs: resumeData.certifications,
            general: resumeData.general
        }
    }
}
</script>

<template>
    <h1>Resume</h1>
    <section class="overview">
        <h2>General Overview</h2>
            <div>
                <h3>General:</h3>
                <p class="description">
                    {{ general }}
                </p>
            </div>
            <div><h3>Tech Stack Overview:</h3>
                <resume-tech-stack-icons v-for="icon in icons" :key="icon.id" :icon="icon"/>
            </div>
            <div><h3>Certifications</h3>
                <ul>
                    <li v-for="cert in certs" :key="cert.name">{{ cert.name }} ({{ cert.year }})</li>
                </ul>
            </div>
    </section>
</template>

<style scoped>

</style>
