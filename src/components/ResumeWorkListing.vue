<template>
    <div class="job">
        <h3>
            {{ job.company }}
            <span class="job__title"> - {{ job.role }}</span>
            <span class="job__date-range dates">{{ job.dateRange }}</span>
        </h3>
        <div class="job__description description">
            <p v-for="description in job_descriptions" :key="description.title"><strong>{{ description.title}}:</strong> {{ description.details }}</p>
            <p><strong>Tech Stack:</strong> {{ tech_stack.toString().replaceAll(',',', ') }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumeWorkListing',
    props: {
        job: Object
    },
    data() {
        return {
            job_descriptions: this.job.descriptions,
            tech_stack: this.job.tech_stack
        }
    }
}
</script>
