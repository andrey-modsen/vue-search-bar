<template>
  <div class="min-h-screen flex flex-col">
    <NavbarContainer :user="user" />
    <HomePage class="flex-1" />
    <FooterContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarContainer from "./components/navbar/NavbarContainer.vue";
import FooterContainer from "./components/FooterContainer.vue";
import HomePage from "./pages/HomePage.vue";
import { getCurrentUser } from "@/api";
import { IUserOutDto } from "@/models";

export default defineComponent({
  name: "App",
  components: {
    NavbarContainer,
    HomePage,
    FooterContainer,
  },
  data() {
    return {
      user: null as IUserOutDto | null,
    };
  },
  async mounted() {
    this.user = await getCurrentUser();
  },
});
</script>

<style lang="scss"></style>
