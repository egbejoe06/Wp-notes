<template>
  <div
    style="font-family: inter"
    v-if="activeArticle"
    class="flex flex-col gap-5 pt-16 pl-4"
  >
    <div class="gap-1.5 flex flex-col">
      <div>
        <h2 class="text-2xl text-title">{{ activeArticle.title }}</h2>
      </div>
      <div class="text-textcolor text-xs">
        <span>{{ activeArticle.publish_date }} / </span>
        <span>{{ activeArticle.author }}</span>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <img :src="activeArticle.image" alt="" class="w-72 h-44" />
    </div>
    <div>
      {{ activeArticle.text }}
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { useStore } from "../store/store.js";

const activeArticle = ref(null);
onBeforeMount(() => {
  activeArticle.value = useStore().selectedArticle;
});
watch(
  () => useStore().selectedArticle,
  (newValue) => {
    activeArticle.value = newValue;
  }
);
</script>
<style></style>
