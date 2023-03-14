<template>
  <div
    class="not-prose bg-base-100 rounded-box w-full max-w-lg shadow-xl p-4 pt-4 pb-4 mb-3"
  >
    <div class="flex items-center gap-5 my-2">
      <div class="flex-none">
        <div
          class="bg-white h-24 w-24 bg-opacity-10 p-px flex items-center justify-center"
        >
          <img
            class="align-middle max-h-full max-w-full"
            :src="logo_url"
            :alt="logo_alt"
          />
        </div>
      </div>

      <div class="flex-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
          <div>
            <div class="text-lg font-extrabold">{{ language }}</div>
            <div class="text-base-content/70 text-sm">{{ experience }}</div>
          </div>
          <div>
            <Rating :rating="rating" :language="language"></Rating>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-3" />
    <slot name="description"></slot>
    <slot name="badges"></slot>
  </div>
</template>

<script lang="ts">
import Rating from "./Rating.vue";

export default {
  components: {
    Rating,
  },
  props: ["language", "experience", "rating", "logo_url", "logo_alt"],
};
</script>
