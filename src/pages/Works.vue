<template>
  <div class="max-w-5xl mx-auto px-4">
    <article class="prose max-w-none">
      <h1 class="text-center">Works</h1>

      <div class="columns-1 md:columns-2">
        <Work
          title="eTiCKet"
          demo_link="https://chorkleines.com/eTiCKet_demo"
          image_link="eTiCKet_thumbnail.png"
          image_alt="eTiCKet thumbnail"
        >
          <template v-slot:description>
            eTiCKet is an electronic ticketing system developed for the
            university choir.
            <br />
            Personal information (name and contact information) can be collected
            prior to prevent infection of COVID.
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
          image_link="kleines_mypage_thumbnail.png"
          image_alt="Kleines Mypage thumbnail"
        >
          <template v-slot:description>
            Kleines Mypage is an accounting system developed for the university
            choir.
          </template>
          <template v-slot:badges>
            <div class="badge badge-ghost mr-1">PHP</div>
            <div class="badge badge-ghost mr-1">MySQL</div>
          </template>
        </Work>

        <Work
          title="Chor Kleines Website"
          demo_link="https://nozomu.dev/chorkleines"
          image_link="chorkleines_thumbnail.jpg"
          image_alt="Chor Kleines Website thumbnail"
        >
          <template v-slot:description>
            An official website for the university choir.
          </template>
          <template v-slot:badges>
            <div class="badge badge-ghost mr-1">Bootstrap</div>
          </template>
        </Work>

        <Work
          title="Movable Do Plugin for MuseScore 3"
          demo_link=""
          image_link="https://github.com/nozomu-y/MovableDo/raw/media/demo.gif?raw=true"
          image_alt="Movable Do plugin thumbnail"
        >
          <template v-slot:description>
            A MuseScore plugin that inserts movable do texts.
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
