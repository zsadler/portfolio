<template>
    <div class="freelance-gig">
        <h3>
            {{ gig.client }}
            <span class="freelance-gig__date dates">{{ gig.date }}</span>
        </h3>
        <p class="freelance-gig__description description">{{ gig.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'ResumeFreelanceListing',
    props: {
        gig: Object
    },
    data() {
        return {
        }
    }
}
</script>
