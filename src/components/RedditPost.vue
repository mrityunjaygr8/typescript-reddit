<template>
  <div v-if="post" class="m-4 bg-white text-sm">
    <div class="grid grid-cols-12">
      <div class="sm:col-span-2 col-span-12 mx-auto">
        <a :href="post.url_overridden_by_dest">
          <img :src="post.thumbnail" alt="" class="">
        </a>
      </div>
      <div class="sm:col-span-9 col-span-12 text-left m-2">
        <div class="mb-4">
          <a :href="post.url_overridden_by_dest" class="text-blue-600">{{ post.title }}</a>
        </div>
        <div class="flex flex-row flex-wrap text-xs">
          <div class="flex-grow-0">
            <router-link :to="getSubLink">
              {{ post.subreddit_name_prefixed }}
            </router-link>
            <span class="mr-1"> |</span>
          </div>
          <div class="flex-grow-0">
            u/{{ post.author.name }} <span class="mr-1">|</span>
          </div>
          <div class="flex-grow-0">
            {{ post.num_comments }} comments <span class="mr-1">|</span>
          </div>
          <div class="flex-grow-0">
            {{ humanDate }}
          </div>
        </div>
      </div>
      <div
        class="sm:col-span-1 col-span-12
        flex flex-col
        grid grid-cols-12 sm:grid-cols-none">
        <div class="col-span-4 text-center">
          up
        </div>
        <div class="col-span-4">
          {{ post.score }}
        </div>
        <div class="col-span-4">
          down
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// import zeroOffset from '@/utils/general';
import utils from '@/utils/general';

@Component
export default class RedditPost extends Vue {
  @Prop() readonly post!: object;

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
}
</script>
