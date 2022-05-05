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
            <h2 class="mb-3">Webapp</h2>
          </div>
        </div>
        <div class="row mb-3 text-center">
          <div class="col-md-6 mb-4" id="portfolio_kleines_mypage">
            <img
              src="@/assets/img/portfolio_kleines_mypage.png"
              class="portfolio"
              alt
            />
            <h3 class="mt-3">Kleines Mypage</h3>
            <p>
              所属している合唱団用に開発した会計システムです。
            </p>
            <p>
              <a
                href="https://github.com/nozomu-y/kleines-mypage"
                class="btn btn-github"
                role="button"
                target="_blank"
              >
                <i class="fab fa-github fa-lg mr-2"></i>View Code
              </a>
            </p>
            <p>
              デモアカウントのメールアドレスとパスワードは以下の通りです。
              <br />
              Email: kleines@nozomu.dev
              <br />
              Password: Admin123
              <br />
            </p>
            <p>
              <a
                href="https://nozomu.dev/kleines-mypage"
                class="btn btn-outline-light"
                role="button"
                target="_blank"
              >
                View Demo
              </a>
            </p>
          </div>
          <div class="col-md-6 mb-4" id="portfolio_eticket">
            <img
              src="@/assets/img/portfolio_eticket.png"
              class="portfolio"
              alt
            />
            <h3 class="mt-3">eTiCKet</h3>
            <p>
              所属している合唱団用に開発した電子チケットシステムです。
            </p>
            <p>
              <a
                href="https://github.com/nozomu-y/eTiCKet"
                class="btn btn-github"
                role="button"
                target="_blank"
              >
                <i class="fab fa-github fa-lg mr-2"></i>View Code
              </a>
            </p>
            <p>
              デモアカウントのメールアドレスとパスワードは以下の通りです。
              <br />
              Username: Admin
              <br />
              Password: Admin123
              <br />
            </p>
            <p>
              <a
                href="https://chorkleines.com/eTiCKet_demo"
                class="btn btn-outline-light"
                role="button"
                target="_blank"
              >
                View Demo
              </a>
            </p>
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
              <br />vue.jsを用いて作りました。
              <br />スタイルはbootstrapをベースにSCSSを編集しています。
            </p>
            <a
              href="https://github.com/nozomu-y/portfolio"
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
              href="https://nozomu.dev/chorkleines"
              class="btn btn-outline-light"
              target="_blank"
              role="button"
              >View Archive</a
            >
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto text-center">
            <h2 class="mb-3" id="gd">Graphic Design</h2>
          </div>
        </div>
        <div class="row mb-3 justify-content-center text-center">
          <div class="col-md-6" id="portfolio_2019_concert">
            <img
              src="@/assets/img/portfolio_2019_concert.jpg"
              class="portfolio"
              alt
            />
            <h3 class="mt-3">Chor Kleines 54th Concert</h3>
            <p>
              大学で所属している合唱団で制作した演奏会のチラシです。
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
    Header
  }
};
</script>
