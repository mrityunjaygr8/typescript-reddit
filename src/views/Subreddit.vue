<template>
  <div>
    <h2 class="text-2xl">{{ subreddit }}</h2>
    <reddit-post v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RedditPost from '@/components/RedditPost.vue';
import r from '@/utils/snoo';

@Component({
  components: {
    'reddit-post': RedditPost,
  },
})
export default class Subreddit extends Vue {
  subreddit: string = this.$route.params.subreddit;

  posts: Array<object> = [];

  getSubredditPosts(): void {
    r.getSubreddit(this.subreddit).getHot().then((data) => {
      this.posts = data;
    });
  }

  mounted() {
    this.getSubredditPosts();
  }
}
</script>
