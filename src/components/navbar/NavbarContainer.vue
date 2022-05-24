<template>
  <div class="min-h-full">
    <nav class="bg-gray-800 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center flex-1">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div class="flex-1">
              <div class="ml-10 flex items-baseline space-x-4 flex-1">
                <div class="relative flex-1">
                  <NavbarSearch @search="searchUsers($event.text)" />
                  <NavbarSearchResult
                    v-show="users && users.length"
                    :users="users"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: outline/bell -->
                <BellIcon class="w-6" />
              </button>

              <!-- Profile dropdown -->
              <div class="ml-3 relative" @click="showMenu = !showMenu">
                <div>
                  <button
                    type="button"
                    class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  v-show="showMenu"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                    >Your Profile</a
                  >

                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                    >Settings</a
                  >

                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                    >Sign out</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BellIcon } from "@heroicons/vue/outline";
import NavbarSearch from "./NavbarSearch.vue";
import NavbarSearchResult from "./NavbarSearchResult.vue";
import { searchUsers } from "@/api";
import { IUserOutDto } from "@/models";

export default defineComponent({
  name: "NavbarComponent",
  components: {
    BellIcon,
    NavbarSearch,
    NavbarSearchResult,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      users: [] as IUserOutDto[],
      searchText: "",
      showMenu: false,
    };
  },
  methods: {
    async searchUsers(searchText: string) {
      this.searchText = searchText;
      this.users = searchText ? await searchUsers(searchText) : [];
    },
  },
});
</script>

<style scoped lang="scss"></style>
