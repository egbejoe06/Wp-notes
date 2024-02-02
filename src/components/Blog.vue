<template>
  <div class="w-80 p-2.5 flex flex-col gap-4">
    <div
      style="font-family: Inter"
      v-for="article in articles"
      class="flex flex-col gap-1 cursor-pointer p-2.5"
      :class="{ 'selected-article': article === selectedArticle }"
      @click="active(article)"
    >
      <div class="text-title">
        {{ article.title }}
      </div>
      <div class="text-textcolor text-xs overflow-hidden text-ellipsis whitespace-nowrap">
        {{ article.text }}
      </div>
      <div class="text-xs text-textcolor">
        {{ article.publish_date }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useStore } from "../store/store.js";
const articles = ref([]);
const selectedArticle = ref(null);

const fetchNews = async () => {
  await useStore().fetchNews();
};
const active = (article) => {
  selectedArticle.value = article;
  useStore().selectedArticle = article;
  // console.log(useStore().selectedArticle);
  // useStore().select(article);
};
onMounted(() => {
  articles.value = useStore().articles;
  selectedArticle.value = useStore().selectedArticle || articles.value[0];
});
onBeforeMount(async () => {
  await fetchNews();
  articles.value = useStore().articles;
});
</script>
<style>
.selected-article {
  border-radius: 8px;
  background-color: #f6f6f6;
}
</style>
