<template>
  <div class="max-w-5xl mx-auto px-4">
    <article class="prose max-w-none">
      <h2>Languages</h2>

      <Skill
        language="Python"
        experience="4 years of experience"
        rating="4"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
        logo_alt="Python Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>
                More than 2 years of experience in implementing deep learning
                models
              </li>
              <li>
                More than 4 years of experience in automating simple tasks on a
                daily basis
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges>
          <div class="badge badge-ghost mr-1">PyTorch</div>
          <div class="badge badge-ghost mr-1">Machine Learning</div>
          <div class="badge badge-ghost mr-1">Deep Learning</div>
        </template>
      </Skill>

      <Skill
        language="PHP"
        experience="4 years of experience"
        rating="4"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
        logo_alt="PHP Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>
                More than 4 years of experience in my personal project of
                accounting system and electronic ticketing system for the
                university choir
              </li>
            </ul>
            <ul class="mt-2 ml-3">
              <li>
                <font-awesome-icon icon="fa-brands fa-github" />
                <a
                  href="https://github.com/nozomu-y/kleines-mypage"
                  target="_blank"
                >
                  nozomu-y/kleines-mypage
                </a>
              </li>
              <li>
                <font-awesome-icon icon="fa-brands fa-github" />
                <a href="https://github.com/nozomu-y/eTiCKet" target="_blank">
                  nozomu-y/eTiCKet
                </a>
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges>
          <div class="badge badge-ghost mr-1">Laravel</div>
        </template>
      </Skill>

      <Skill
        language="C/C++"
        experience="2 years of experience"
        rating="3"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
        logo_alt="PHP Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>
                More than 2 years of experience in competitive programming
              </li>
            </ul>
            <ul class="mt-2 ml-3">
              <li>
                <font-awesome-icon icon="fa-solid fa-link" />
                <a href="https://atcoder.jp/users/nyama39" target="_blank">
                  AtCoder
                </a>
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges>
          <div class="badge badge-ghost mr-1">Competitive Programming</div>
          <div class="badge badge-ghost mr-1">AtCoder</div>
        </template>
      </Skill>

      <Skill
        language="Go"
        experience="1 year of experience"
        rating="3"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"
        logo_alt="Go Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>
                More than 1 year of experience in developing API for a hotel
                check-in system
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges>
          <div class="badge badge-ghost mr-1">Beego</div>
        </template>
      </Skill>

      <Skill
        language="HTML"
        experience="4 years of experience"
        rating="5"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
        logo_alt="HTML Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>
                More than 4 years of experience in developing a website for the
                uniersity choir
              </li>
            </ul>
            <ul class="mt-2 ml-3">
              <li>
                <font-awesome-icon icon="fa-solid fa-link" />
                <a href="https://nozomu.dev/chorkleines" target="_blank">
                  Chor Kleines Website Archive
                </a>
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges></template>
      </Skill>

      <Skill
        language="CSS"
        experience="4 years of experience"
        rating="4"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
        logo_alt="CSS Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>
                More than 4 years of experience in developing a website for the
                uniersity choir
              </li>
            </ul>
            <ul class="mt-2 ml-3">
              <li>
                <font-awesome-icon icon="fa-solid fa-link" />
                <a href="https://nozomu.dev/chorkleines" target="_blank">
                  Chor Kleines Website Archive
                </a>
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges>
          <div class="badge badge-ghost mr-1">Bootstrap</div>
          <div class="badge badge-ghost mr-1">Tailwind</div>
        </template>
      </Skill>

      <Skill
        language="JavaScript"
        experience="4 years of experience"
        rating="4"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        logo_alt="JavaScript Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>
                More than 4 years of experience in developing a website for the
                uniersity choir
              </li>
              <li>1 year of experience in developing this website</li>
              <li>
                2 months of experience in developing a load testing
                infrastructure for LINE NEWS
              </li>
            </ul>
            <ul class="mt-2 ml-3">
              <li>
                <font-awesome-icon icon="fa-brands fa-github" />
                <a href="https://github.com/nozomu-y/portfolio" target="_blank">
                  nozomu-y/portfolio
                </a>
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-link" />
                <a
                  href="https://engineering.linecorp.com/ja/blog/automated-load-testing-scenario"
                  target="_blank"
                >
                  LINE NEWS Internship Report (Japanese)
                </a>
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges>
          <div class="badge badge-ghost mr-1">Vue.js</div>
          <div class="badge badge-ghost mr-1">Grafana k6</div>
          <div class="badge badge-ghost mr-1">Node.js</div>
          <div class="badge badge-ghost mr-1">jQuery</div>
        </template>
      </Skill>

      <Skill
        language="TypeScript"
        experience="Less than 1 year of experience"
        rating="3"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        logo_alt="TypeScript Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>Less than 1 year of experience in developing this website</li>
              <li>
                Less than 1 year of experience in my personal project of
                accounting system for the university choir
              </li>
            </ul>
            <ul class="mt-2 ml-3">
              <li>
                <font-awesome-icon icon="fa-brands fa-github" />
                <a href="https://github.com/nozomu-y/portfolio" target="_blank">
                  nozomu-y/portfolio
                </a>
              </li>
              <li>
                <font-awesome-icon icon="fa-brands fa-github" />
                <a
                  href="https://github.com/chorkleines/kleines-mypage"
                  target="_blank"
                >
                  chorkleines/kleines-mypage
                </a>
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges>
          <div class="badge badge-ghost mr-1">Vue.js</div>
        </template>
      </Skill>

      <Skill
        language="LaTeX"
        experience="4 years of experience"
        rating="5"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg"
        logo_alt="LaTeX Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>
                More than 4 years of experience in taking notes for lectures and
                creating macros and style sheets
              </li>
            </ul>
            <ul class="mt-2 ml-3">
              <li>
                <font-awesome-icon icon="fa-brands fa-github" />
                <a href="https://github.com/nozomu-y/nylecnote" target="_blank">
                  nozomu-y/nylecnote
                </a>
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges>
          <div class="badge badge-ghost mr-1">tcolobox</div>
        </template>
      </Skill>

      <Skill
        language="Java"
        experience="1 year of experience"
        rating="2"
        logo_url="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1920px-Java_programming_language_logo.svg.png"
        logo_alt="Java Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>
                Less than 1 year of experience in developing API and backend
                system for LINE NEWS
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:badges>
          <div class="badge badge-ghost mr-1">Spring Boot</div>
        </template>
      </Skill>

      <Skill
        language="MATLAB"
        experience="1 year of experience"
        rating="2"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
        logo_alt="MATLAB Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>Less than 1 year of experience in solving assignments</li>
            </ul>
          </div>
        </template>
        <template v-slot:badges></template>
      </Skill>

      <Skill
        language="R"
        experience="1 year of experience"
        rating="2"
        logo_url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/620px-R_logo.svg.png"
        logo_alt="R Logo"
      >
        <template v-slot:description>
          <div class="prose text-sm mb-3">
            <ul class="list-disc list-inside ml-3">
              <li>Less than 1 year of experience in solving assignments</li>
            </ul>
          </div>
        </template>
        <template v-slot:badges></template>
      </Skill>
    </article>
  </div>
</template>

<script lang="ts">
import Skill from "../components/Skill.vue";

export default {
  components: {
    Skill,
  },
};
</script>
