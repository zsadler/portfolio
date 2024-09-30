<template>
    <div class="school">
        <h3>{{ school.name }}</h3>
        <div class="school__description description">
            <p class="school__studies">
                <span class="school__studies-degree">{{ school.degree }}</span><br>
                <span class="school__studies-date-range dates">{{ school.dateRange }}</span>
            </p>
            <p class="school__achievements" v-for="detail in details" :key="detail.title"><strong>{{ detail.title
                }}:</strong> {{ detail.detail }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumeEducationListing',
    props: {
        school: Object
    },
    data() {
        return {
            details: this.school.details
        }
    }
}
</script>
