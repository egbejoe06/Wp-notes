<template>
  <div class="pt-12 pl-6 pr-4 bg-background flex flex-col gap-5 h-full sd:hidden md:flex">
    <div class="flex gap-1.5 text-base text-primary items-center">
      <span><img src="../assets/Vector1.png" alt="" class="h-8 w-8" /> </span>
      <span>Wp-notes</span>
    </div>
    <div class="flex gap-3 p-2 bg-white w-56 rounded-lg h-10">
      <div class="flex justify-center items-center" @click="showSearch()">
        <img src="../assets/Frame.svg" alt="" />
      </div>
      <div>
        <input
          class="w-full outline-none text-textcolor text-xs"
          type="text"
          v-model="search"
          placeholder="search"
          @keyup.enter="showSearch()"
        />
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <span class="text-textcolor flex gap-2">
        <div class="w-1 h-5 bg-primary"></div>
        <div>Blog</div></span
      >
      <span class="text-textcolor flex gap-2">
        <div class="w-1 h-5 bg-primary"></div>
        <div>Contacts</div></span
      >
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "../store/store.js";

const search = ref("");
const store = useStore();

const showSearch = () => {
  store.updateSearchAndFetchNews(search.value);
  console.log(store.search);
};
</script>
<style></style>
