<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
  methods: {
    createPageTitle: function (to) {
      if (to.meta.title) {
        var setTitle = to.meta.title + " | Nozomu's Portfolio";
        document.title = setTitle;
      } else {
        document.title = "Nozomu's Portfolio";
      }
    },
  },
  mounted: function () {
    var to = this.$route;
    this.createPageTitle(to);
  },
  watch: {
    $route(to, from) {
      this.createPageTitle(to);
    },
  },
};
</script>
