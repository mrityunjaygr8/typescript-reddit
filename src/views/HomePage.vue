<template>
  <div class="container mx-auto py-1">
    <reddit-post v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RedditPost from '@/components/RedditPost.vue';
import rAPI from '@/utils/snoo';

@Component({
  components: {
    'reddit-post': RedditPost,
  },
})
export default class Homepage extends Vue {
  posts: Array<object> = [];

  getHomepage(): void {
    rAPI.getHot().then((data) => {
      this.posts = data;
    });
  }

  mounted() {
    this.getHomepage();
  }
}
</script>
