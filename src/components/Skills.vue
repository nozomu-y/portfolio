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

        <div class="row justify-content-center">
          <div class="col-auto text-center">
            <h2 class="my-3">Languages</h2>
          </div>
        </div>

        <div class="row grid mb-3">
          <div class="grid-sizer col-md-6"></div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">Python</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4年</td>
                      <td class="rating">
                        <span class="rate rate4"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  主に研究でディープラーニングモデルの実装に使用しています。
                  また、日常的に単純作業の自動化などに利用しています。
                </p>
              </div>
            </div>
          </div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">PHP</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3年</td>
                      <td class="rating">
                        <span class="rate rate4"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  大学で所属している合唱団のために開発した<router-link
                    :to="{
                      name: 'Portfolio',
                      hash: '#portfolio_kleines_mypage'
                    }"
                    >会計システム</router-link
                  >や電子チケットの実装に使用しています。
                  <br />
                  <i class="fab fa-github fa-lg" style="color: #333;"></i>
                  <a
                    href="https://github.com/nozomu-y/kleines-mypage"
                    target="_blank"
                  >
                    nozomu-y/kleines-mypage
                  </a>
                  <br />
                  <i class="fab fa-github fa-lg" style="color: #333;"></i>
                  <a href="https://github.com/nozomu-y/eTiCKet" target="_blank">
                    nozomu-y/eTiCKet
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">C/C++</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2年</td>
                      <td class="rating">
                        <span class="rate rate3"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  競技プログラミング (<a
                    href="https://atcoder.jp/users/nyama39"
                    target="_blank"
                    >AtCoder</a
                  >) で使用しています。
                </p>
              </div>
            </div>
          </div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">Go</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1年</td>
                      <td class="rating">
                        <span class="rate rate3"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  インターン先で開発しているホテルのチェックインシステムの実装に使用しています。
                </p>
              </div>
            </div>
          </div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">HTML</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3年</td>
                      <td class="rating">
                        <span class="rate rate5"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  大学で所属している合唱団の<a
                    href="https://nozomu.dev/chorkleines"
                    target="_blank"
                    >ホームページ</a
                  >の制作に使用しました。
                </p>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">CSS</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3年</td>
                      <td class="rating">
                        <span class="rate rate4"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  このサイトはbootstrapをベースにCSSを追記することで制作しました。詳しくは
                  <a
                    href="https://github.com/nozomu-y/portfolio/tree/master/src/assets/scss/_custom_styles.scss"
                    target="_blank"
                    >こちら</a
                  >をご覧ください。
                </p>
              </div>
            </div>
          </div>
          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">JavaScript</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3年</td>
                      <td class="rating">
                        <span class="rate rate4"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  このサイトはVue.jsを用いて制作しました。
                  <br />
                  <i class="fab fa-github fa-lg" style="color: #333;"></i>
                  <a
                    href="https://github.com/nozomu-y/portfolio"
                    target="_blank"
                  >
                    nozomu-y/portfolio
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">LaTeX</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4年</td>
                      <td class="rating">
                        <span class="rate rate4"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  大学の課題や板書に利用しています。
                  マクロやスタイルシートを作成した経験もあります。
                  <br />
                  <i class="fab fa-github fa-lg" style="color: #333;"></i>
                  <a
                    href="https://github.com/nozomu-y/nylecnote"
                    target="_blank"
                  >
                    nozomu-y/nylecnote
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-auto text-center">
            <h2 class="my-3">Tools</h2>
          </div>
        </div>

        <div class="row grid mb-3">
          <div class="grid-sizer col-md-6"></div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">Git</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3年</td>
                      <td class="rating">
                        <span class="rate rate5"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  インターン先でチーム開発の経験があります。
                  また個人で開発しているプロジェクトも Git で管理しています。
                </p>
              </div>
            </div>
          </div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">MySQL</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3年</td>
                      <td class="rating">
                        <span class="rate rate4"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  大学で所属している合唱団のために開発した<router-link
                    :to="{
                      name: 'Portfolio',
                      hash: '#portfolio_kleines_mypage'
                    }"
                    >会計システム</router-link
                  >のデータベースに使用しています。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-auto text-center">
            <h2 class="my-3">Frameworks</h2>
          </div>
        </div>

        <div class="row grid mb-3">
          <div class="grid-sizer col-md-6"></div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">Laravel</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1年</td>
                      <td class="rating">
                        <span class="rate rate4"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  大学で所属している合唱団のために開発した電子チケットの実装に使用しています。
                  また、インターン先で開発しているホテルのチェックインシステムの実装に使用しています。
                  <br />
                  <i class="fab fa-github fa-lg" style="color: #333;"></i>
                  <a href="https://github.com/nozomu-y/eTiCKet" target="_blank">
                    nozomu-y/eTiCKet
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">Bootstrap</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4年</td>
                      <td class="rating">
                        <span class="rate rate5"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  大学で所属している合唱団のために開発した<router-link
                    :to="{
                      name: 'Portfolio',
                      hash: '#portfolio_kleines_mypage'
                    }"
                    >会計システム</router-link
                  >や電子チケットの実装に使用しています。
                  <br />
                  <i class="fab fa-github fa-lg" style="color: #333;"></i>
                  <a
                    href="https://github.com/nozomu-y/kleines-mypage"
                    target="_blank"
                  >
                    nozomu-y/kleines-mypage
                  </a>
                  <br />
                  <i class="fab fa-github fa-lg" style="color: #333;"></i>
                  <a href="https://github.com/nozomu-y/eTiCKet" target="_blank">
                    nozomu-y/eTiCKet
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-auto text-center">
            <h2 class="my-3">Applications</h2>
          </div>
        </div>

        <div class="row grid mb-3">
          <div class="grid-sizer col-md-6"></div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">Illustrator</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3年</td>
                      <td class="rating">
                        <span class="rate rate3"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  大学で所属している合唱団の演奏会チラシを制作する際に使用しました。詳しくは<router-link
                    :to="{ name: 'Portfolio', hash: '#portfolio_2019_concert' }"
                    >こちら</router-link
                  >をご覧ください。
                </p>
              </div>
            </div>
          </div>

          <div class="grid-item col-md-6">
            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title text-center">InDesign</h4>
                <table
                  class="table table-borderless table-sm"
                  style="text-align: center;"
                >
                  <thead>
                    <tr>
                      <th>経験年数</th>
                      <th>スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4年</td>
                      <td class="rating">
                        <span class="rate rate3"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  大学で所属している合唱団の演奏会パンフレットを制作する際に使用しました。
                </p>
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
    Header
  },
  mounted() {
    window.onload = function() {
      $(".grid").masonry({
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true
      });
    };
    $(".grid").masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true
    });
  }
};
</script>
