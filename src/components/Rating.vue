<template>
  <div class="rating">
    <input
      type="radio"
      :name="'rating-' + language"
      class="rating-hidden"
      :checked="rating == '0'"
    />
    <input
      type="radio"
      :name="'rating-' + language"
      class="mask mask-star-2 bg-blue-400"
      :checked="rating == '1'"
    />
    <input
      type="radio"
      :name="'rating-' + language"
      class="mask mask-star-2 bg-blue-400"
      :checked="rating == '2'"
    />
    <input
      type="radio"
      :name="'rating-' + language"
      class="mask mask-star-2 bg-blue-400"
      :checked="rating == '3'"
    />
    <input
      type="radio"
      :name="'rating-' + language"
      class="mask mask-star-2 bg-blue-400"
      :checked="rating == '4'"
    />
    <input
      type="radio"
      :name="'rating-' + language"
      class="mask mask-star-2 bg-blue-400"
      :checked="rating == '5'"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: ["rating", "language"],
};
</script>
