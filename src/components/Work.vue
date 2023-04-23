<template>
  <div class="not-prose p-2 w-full h-full break-inside-avoid-column">
    <div class="card bg-base-100 shadow-xl h-full">
      <figure class="m-0">
        <img
          :src="image"
          :alt="image_alt"
          class="object-cover"
          style="aspect-ratio: 1200/630"
        />
      </figure>
      <div class="card-body p-4">
        <div>
          <div class="font-bold">
            {{ title }}
          </div>
          <slot name="description"></slot>

          <div v-if="repo_link" class="prose text-sm">
            <a :href="repo_link" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" />
              {{ repo_link.split("/")[3] }}/{{ repo_link.split("/")[4] }}
            </a>
          </div>

          <div v-if="demo_link" class="prose text-sm">
            <a :href="demo_link" target="_blank">
              <font-awesome-icon icon="fa-solid fa-link" /> Demo
            </a>
          </div>
          <hr class="my-3" />
          <slot name="badges" class="not-prose"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: ["title", "demo_link", "repo_link", "image_link", "image_alt"],
  setup(props) {
    const image = ref();
    if (props.image_link.includes("http")) {
      image.value = props.image_link;
    } else {
      image.value = new URL("/src/assets/" + props.image_link, import.meta.url);
    }
    return {
      image,
    };
  },
};
</script>
