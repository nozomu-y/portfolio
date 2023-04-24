<template>
  <div class="max-w-5xl mx-auto px-4">
    <article class="prose max-w-none">
      <h1 class="text-center">Works</h1>

      <div class="columns-1 md:columns-2">
        <Work
          title="eTiCKet"
          demo_link="https://chorkleines.com/eTiCKet_demo"
          repo_link="https://github.com/nozomu-y/eTiCKet"
          image_link="images/eTiCKet_thumbnail.png"
          image_alt="eTiCKet thumbnail"
        >
          <template v-slot:description>
            <p class="prose text-sm mb-2">
              eTiCKet is an electronic ticketing system developed for the
              university choir.
              <br />
              Personal information (name and contact information) can be
              collected prior to prevent infection of COVID.
            </p>
            <p class="prose text-xs mb-2">
              The username and the password of the demo account are as follows.
              <br />
              Username: Admin
              <br />
              Password: Admin123
            </p>
          </template>
          <template v-slot:badges>
            <div class="badge badge-ghost mr-1">Laravel</div>
            <div class="badge badge-ghost mr-1">PHP</div>
            <div class="badge badge-ghost mr-1">MySQL</div>
          </template>
        </Work>

        <Work
          title="Kleines Mypage"
          demo_link="https://nozomu.dev/kleines-mypage"
          repo_link="https://github.com/nozomu-y/kleines-mypage"
          image_link="images/kleines_mypage_thumbnail.png"
          image_alt="Kleines Mypage thumbnail"
        >
          <template v-slot:description>
            <p class="prose text-sm mb-2">
              Kleines Mypage is an accounting system developed for the
              university choir.
            </p>
            <p class="prose text-xs mb-2">
              The email address and the password of the demo account are as
              follows.
              <br />
              Email: kleines@nozomu.dev
              <br />
              Password: Admin123
            </p>
          </template>
          <template v-slot:badges>
            <div class="badge badge-ghost mr-1">PHP</div>
            <div class="badge badge-ghost mr-1">MySQL</div>
          </template>
        </Work>

        <Work
          title="Chor Kleines Website"
          demo_link="https://nozomu.dev/chorkleines"
          repo_link=""
          image_link="images/chorkleines_thumbnail.jpg"
          image_alt="Chor Kleines Website thumbnail"
        >
          <template v-slot:description>
            <p class="prose text-sm mb-2">
              An official website for the university choir.
            </p>
          </template>
          <template v-slot:badges>
            <div class="badge badge-ghost mr-1">Bootstrap</div>
          </template>
        </Work>

        <Work
          title="Portfolio Website"
          demo_link=""
          repo_link="https://github.com/nozomu-y/portfolio"
          image_link="images/og_image.jpg"
          image_alt="Portfolio Website thumbnail"
        >
          <template v-slot:description>
            <p class="prose text-sm mb-2">This website.</p>
          </template>
          <template v-slot:badges>
            <div class="badge badge-ghost mr-1">Vue.js</div>
            <div class="badge badge-ghost mr-1">Tailwind CSS</div>
            <div class="badge badge-ghost mr-1">daisyUI</div>
            <div class="badge badge-ghost mr-1">TypeScript</div>
          </template>
        </Work>

        <Work
          title="Movable Do Plugin for MuseScore 3"
          demo_link=""
          repo_link="https://github.com/nozomu-y/MovableDo"
          image_link="https://github.com/nozomu-y/MovableDo/raw/media/demo.gif?raw=true"
          image_alt="Movable Do plugin thumbnail"
        >
          <template v-slot:description>
            <p class="prose text-sm mb-2">
              A MuseScore plugin that inserts movable do texts.
            </p>
          </template>
          <template v-slot:badges>
            <div class="badge badge-ghost mr-1">MuseScore</div>
            <div class="badge badge-ghost mr-1">QML</div>
          </template>
        </Work>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Work from "../components/Work.vue";

export default {
  components: {
    Work,
  },
};
</script>
