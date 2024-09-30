<template>

    <h1>About</h1>
    <div class="about">
        <div class="contact">
            <h2>Contact</h2>
            <p>For more information:</p>
            <teleport to=".modals">
                <SlotTemplateModal :slotModalHeading="slotModalHeading" :showSlotModal="showSlotModal" :theme="theme"
                                   @closeSlotModal="toggleSlotModal">
                    <template v-slot:contactInfo>
                        <button class="btn">Hire Me</button>
                        <button class="btn">Interview Me</button>
                    </template>
                </SlotTemplateModal>
            </teleport>
            <button @click="toggleSlotModal">{{ slotModalBtnText }}</button>
        </div>
    </div>
    <section class="introduction">
        <div class="about__github-profile">
            <github-user-card username="zsadler" />
        </div>
        <resume-introduction />
    </section>
    <section class="jobs">
        <h2>Work Experience</h2>
        <resume-work-listing v-for="job in jobs" :key="job.id" :job="job" />
    </section>

    <section class="freelance-gigs">
        <h2>Freelance</h2>
        <resume-freelance-listing v-for="gig in freelanceGigs" :key="gig.id" :gig="gig" />
    </section>

    <section class="education">
        <h2>Education</h2>
        <resume-education-listing v-for="school in schools" :key="school.id" :school="school" />
    </section>
</template>

<script>
import ResumeIntroduction from '@/components/ResumeIntroduction.vue'
import GithubUserCard from '@/components/GithubUserCard.vue'
import ResumeWorkListing from '@/components/ResumeWorkListing.vue'
import ResumeEducationListing from '@/components/ResumeEducationListing.vue'
import ResumeFreelanceListing from '@/components/ResumeFreelanceListing.vue'
import resumeData from '@/data/resumeData.json'
import SlotTemplateModal from '@/components/modals/SlotTemplateModal.vue'

export default {
    name: 'AboutView',
    components: {
        SlotTemplateModal,
        ResumeEducationListing,
        ResumeFreelanceListing,
        ResumeWorkListing,
        ResumeIntroduction,
        GithubUserCard
    },
    data() {
        return {
            jobs: resumeData.work_experience,
            freelanceGigs: resumeData.freelance,
            schools: resumeData.education,
            slotModalBtnText: 'Get in Touch!',
            slotModalHeading: 'Let\'s Connect!',
            showSlotModal: false,
            theme: 'dark',
        }
    },
    methods: {
        toggleSlotModal() {
            this.showSlotModal = !this.showSlotModal
        }
    }
}
</script>
<style>
.about {
    display: grid;
    grid-template-columns: 1fr 75%;
    align-items: center;
    gap: 1rem;
}
</style>
