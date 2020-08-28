<template>
  <div>
    <Header />
    <div id="content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto text-center">
            <h1 class="mb-3">Portfolio</h1>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto text-center">
            <h2 class="mb-3">Website</h2>
          </div>
        </div>
        <div class="row mb-3 text-center">
          <div class="col-md-6 mb-4">
            <img src="@/assets/img/portfolio_this.png" class="portfolio" alt />
            <h3 class="mt-3">Nozomu's Portfolio</h3>
            <p>
              本サイトです。
              <br />vue.jsを用いて作られています。
              <br />スタイルはbootstrapをベースにSCSSを編集しています。
            </p>
            <a
              href="https://github.com/nozomu-y/"
              class="btn btn-github"
              role="button"
              target="_blank"
            >
              <i class="fab fa-github fa-lg mr-2"></i>View Code
            </a>
          </div>

          <div class="col-md-6 mb-4">
            <a href="https://chorkleines.com/" target="_blank">
              <img src="@/assets/img/portfolio_ck.png" class="portfolio" alt />
            </a>
            <h3 class="mt-3">Chor Kleines</h3>
            <p>大学で所属している合唱団用に制作したホームページです。</p>
            <a
              href="https://chorkleines.com"
              class="btn btn-outline-light"
              target="_blank"
              role="button"
            >View Website</a>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto text-center">
            <h2 class="mb-3">Graphic Design</h2>
          </div>
        </div>
        <div class="row mb-3 justify-content-center text-center">
          <div class="col-md-6" id="portfolio_2019_concert">
            <img src="@/assets/img/portfolio_2019_concert.jpg" class="portfolio" alt />
            <h3 class="mt-3">Chor Kleines 54th Concert</h3>
            <p>
              大学で所属している合唱団で制作した演奏会のビラです。
              <br />Adobe Illustratorを用いてデザインしました。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "Portfolio",
  components: {
    Header,
  },
};
</script>
