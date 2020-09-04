<template>
  <div v-if="post" class="m-4 bg-white text-sm">
    <div class="grid grid-cols-12">
      <div class="sm:col-span-2 col-span-12 mx-auto w-full sm:w-auto bg-none">
        <a :href="post.url_overridden_by_dest">
          <img :src="post.thumbnail" alt="" class="w-full">
        </a>
      </div>
      <div class="sm:col-span-9 col-span-12 text-left m-2">
        <div class="mb-4">
          <a :href="post.url_overridden_by_dest" class="text-blue-600">
            <span v-if="post.stickied" class="mr-1 text-green-600">[Sticky]</span>
            <span v-if="post.is_self" class="mr-1 text-teal-600">[Self]</span>
            <span v-if="post.over_18" class="mr-1 text-red-600">[NSFW]</span>
            {{ post.title }}
            <span class="text-gray-600 text-xs">
              {{ getAwardText }}
            </span>
          </a>
        </div>
        <div class="flex flex-row flex-wrap text-xs">
          <div class="flex-grow-0 hover:underline">
            <router-link :to="getSubLink">
              {{ post.subreddit_name_prefixed }}
            </router-link>
            <span class="mr-1"> |</span>
          </div>
          <div class="flex-grow-0 hover:underline">
            u/{{ post.author.name }} <span class="mr-1">|</span>
          </div>
          <div class="flex-grow-0 hover:underline" >
            <router-link :to="commentURL">
              {{ post.num_comments }} comments <span class="mr-1">|</span>
            </router-link>
          </div>
          <div class="flex-grow-0">
            {{ humanDate }}
          </div>
        </div>
      </div>
      <hr class="col-span-12 mt-4 pb-4 sm:hidden">
      <div
        class="sm:col-span-1 col-span-12
        flex flex-col
        grid grid-cols-12 sm:grid-cols-none
        pb-4 sm:pb-0 sm:py-2">
        <div class="col-span-4 text-center">
          up
        </div>
        <div class="col-span-4">
          <span class="font-bold">{{ post.score }}</span>
        </div>
        <div class="col-span-4">
          down
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { Post } from '@/types/post';
import { URL } from '@/types/url';
// import zeroOffset from '@/utils/general';
import utils from '@/utils/general';

@Component
export default class RedditPost extends Vue {
  @Prop() readonly post!: Post;

  get humanDate(): string {
    return `${utils.shortHumanizer(
      Date.now() - this.post.created * 1000,
    )} ago`;
  }

  get getSubLink(): object {
    const obj = {
      name: 'Subreddit',
      params: {
        subreddit: this.post.subreddit.display_name,
      },
    };

    return obj;
  }

  get getAwardText(): string {
    if (this.post.total_awards_received === 1) {
      return `${this.post.total_awards_received} award`;
    }

    if (this.post.total_awards_received > 1) {
      return `${this.post.total_awards_received} awards`;
    }
    return '';
  }

  get commentURL(): object {
    const url: URL = { name: '', params: {} };
    url.name = 'Comments';
    url.params = {
      subreddit: this.post.subreddit.display_name,
      id: this.post.id,
    };
    return url;
  }
}
</script>
