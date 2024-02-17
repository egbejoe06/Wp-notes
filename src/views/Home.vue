<template>
  <div class="sd:flex w-full md:hidden"><Mobile /></div>
  <div class="md:flex h-full">
    <div class="flex">
      <div><Sidemenu /></div>
      <div v-show="isBlog" class="md:pt-16 border-r border-border sd:pt-0 w-full">
        <Blog />
      </div>
      <div @click="showBlog()" class="relative h-8 -left-4 top-48">
        <svg
          v-show="isBlog"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <circle cx="14" cy="14" r="13.5" fill="white" stroke="#E7E7E9" />
          <path
            d="M16.5515 18.0394C16.5985 18.0863 16.625 18.1502 16.625 18.2169C16.625 18.2835 16.5985 18.3474 16.5515 18.3943L16.0247 18.9243C15.9796 18.9726 15.9166 19 15.8507 19C15.7848 19 15.7219 18.9726 15.6768 18.9243L11.1093 14.33C11.0394 14.2597 11.0001 14.1644 11 14.065L11 13.935C11.0001 13.8356 11.0394 13.7403 11.1093 13.6701L15.6768 9.07575C15.7219 9.02742 15.7848 9 15.8507 9C15.9166 9 15.9796 9.02742 16.0247 9.07575L16.5515 9.60567C16.5985 9.6526 16.625 9.71649 16.625 9.78314C16.625 9.84979 16.5985 9.91368 16.5515 9.96061L12.5357 14L16.5515 18.0394Z"
            fill="#898989"
          />
        </svg>
        <svg
          v-show="!isBlog"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <circle cx="14" cy="14" r="13.5" fill="white" stroke="#E7E7E9" />
          <path
            d="M12.0784 9.96061C12.0282 9.91368 12 9.84979 12 9.78314C12 9.71649 12.0282 9.6526 12.0784 9.60567L12.6403 9.07575C12.6884 9.02742 12.7556 9 12.8259 9C12.8962 9 12.9633 9.02742 13.0114 9.07575L17.8834 13.6701C17.958 13.7403 17.9999 13.8356 18 13.935V14.065C17.9999 14.1644 17.958 14.2597 17.8834 14.33L13.0114 18.9243C12.9633 18.9726 12.8962 19 12.8259 19C12.7556 19 12.6884 18.9726 12.6403 18.9243L12.0784 18.3943C12.0282 18.3474 12 18.2835 12 18.2169C12 18.1502 12.0282 18.0863 12.0784 18.0394L16.3619 14L12.0784 9.96061Z"
            fill="#898989"
          />
        </svg>
      </div>
    </div>
    <div class="md:flex flex-col gap-9 md:pt-16 pr-4 sd:pt-0 pl-3 pr-3">
      <Active />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Active from "../components/Active.vue";
import Sidemenu from "../components/Sidemenu.vue";
import Blog from "../components/Blog.vue";
import Mobile from "../components/Mobile.vue";

const isBlog = ref(true);

const showBlog = () => {
  isBlog.value = !isBlog.value;
};
</script>
<style></style>
