<template>
  <div
    class="not-prose bg-base-100 rounded-box w-full max-w-lg shadow-xl p-4 pt-4 pb-4 mb-3"
  >
    <div class="flex items-center gap-4 my-2">
      <div class="avatar flex-none">
        <div
          class="mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px"
        >
          <img
            :src="logo_url"
            width="94"
            height="94"
            :alt="logo_alt"
            class="mask mask-squircle bg-white"
          />
        </div>
      </div>
      <div class="flex-auto">
        <div class="text-lg font-extrabold">{{ language }}</div>
        <div class="text-base-content/70 text-sm">{{ experience }}</div>
      </div>
      <div class="flex-auto">
        <Rating :rating="rating"></Rating>
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
