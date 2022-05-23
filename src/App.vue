<template>
  <div class="min-h-screen flex flex-col">
    <NavbarContainer />
    <HomePage class="flex-1" />
    <FooterContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarContainer from "./components/navbar/NavbarContainer.vue";
import FooterContainer from "./components/FooterContainer.vue";
import HomePage from "./pages/HomePage.vue";

export default defineComponent({
  name: "App",
  components: {
    NavbarContainer,
    HomePage,
    FooterContainer,
  },
});
</script>

<style lang="scss"></style>
