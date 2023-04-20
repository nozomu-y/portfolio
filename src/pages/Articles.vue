<template>
  <div class="max-w-5xl mx-auto px-4">
    <article class="prose max-w-none">
      <h1 class="text-center">Articles</h1>

      <div class="grid grid-cols-1 md:grid-cols-2">
        <Article
          title="【インターンレポート】LINE NEWS における負荷テストとシナリオ生成の自動化"
          date="2022/10/31"
          article_link="https://engineering.linecorp.com/ja/blog/automated-load-testing-scenario"
          image_link="https://vos.line-scdn.net/landpress-content-v2_1761/1666859715639.jpg?updatedAt=1666859716000"
        >
        </Article>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Article from "../components/Article.vue";

export default {
  components: {
    Article,
  },
};
</script>
