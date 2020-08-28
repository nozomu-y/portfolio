<template>
  <div>
    <Header />
    <div id="content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <h1>Skills</h1>
          </div>
        </div>
        <div class="row grid">
          <div class="grid-sizer col-md-6"></div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">HTML</h4>
                <div class="slider">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="active"></span>
                </div>
                <p>大学で所属している合唱団で、多くのサイトをコーディングした経験があります。</p>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">CSS</h4>
                <div class="slider">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="active"></span>
                  <span></span>
                </div>
                <p>
                  このサイトはbootstrapをベースにCSSを追記することで制作しました。詳しくは
                  <a href>こちら</a>をご覧ください。
                  <br />上記のスライダーもCSSで自作したものです。
                </p>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">JavaScript</h4>
                <div class="slider">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="active"></span>
                  <span></span>
                </div>
                <p>このサイトはvue.jsを用いて制作しました。</p>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">PHP</h4>
                <div class="slider">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="active"></span>
                  <span></span>
                </div>
                <p>
                  大学で所属している合唱団で会計システムを開発した経験があります。
                  フレームワークは利用せず、1から開発しました。
                </p>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">MySQL</h4>
                <div class="slider">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="active"></span>
                  <span></span>
                </div>
                <p>大学で所属している合唱団で会計システムを開発する際に利用しました。</p>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">Illustrator</h4>
                <div class="slider">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="active"></span>
                  <span></span>
                </div>
                <p>
                  大学で所属している合唱団の演奏会チラシを制作した経験があります。詳しくは
                  <router-link :to="{name: 'Portfolio', hash: '#portfolio_2019_concert'}">こちら</router-link>をご覧ください。
                </p>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">Photoshop</h4>
                <div class="slider">
                  <span></span>
                  <span></span>
                  <span class="active"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">InDesign</h4>
                <div class="slider">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="active"></span>
                  <span></span>
                </div>
                <p>大学で所属している合唱団の演奏会プログラムを制作した経験があります。</p>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">LaTeX</h4>
                <div class="slider">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="active"></span>
                </div>
                <p>大学の課題や授業で利用します。マクロやスタイルシートを作成した経験があります。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "Skills",
  components: {
    Header,
  },
  mounted() {
    window.onload = function () {
      $(".grid").masonry({
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });
    };
    $(".grid").masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
    });
  },
};
</script>
