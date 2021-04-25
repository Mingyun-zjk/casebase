<template>
  <div class="App">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>

</style>