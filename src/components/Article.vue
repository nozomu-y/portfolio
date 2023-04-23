<template>
  <div class="not-prose p-2 w-full h-full">
    <a :href="article_link" target="_blank" class="block h-full">
      <div class="card bg-base-100 shadow-xl h-full">
        <figure class="m-0">
          <img
            :src="image_link"
            alt="Article Thumbnail Image"
            class="object-contain"
            style="aspect-ratio: 1200/630"
          />
        </figure>
        <div class="card-body p-5 justify-between gap-0">
          <div class="font-bold">
            {{ title }}
          </div>
          <div class="mt-auto">{{ date }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  props: ["title", "date", "article_link", "image_link"],
};
</script>
