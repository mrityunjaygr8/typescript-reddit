<template>
  <div>
    all comments components
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Comment extends Vue {
  showSubmissionId(): void {
    console.log(this.$route.params);
  }

  mounted() {
    this.showSubmissionId();
  }
}
</script>
