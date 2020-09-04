<template>
    <div>
        yo
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RedditComment extends Vue {
    showSubmissionId(): void {
        console.log(this.$route.params.id);
    }

    mounted() {
        this.showSubmissionId();
    }
}
</script>
