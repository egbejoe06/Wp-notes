<template>
  <div v-for="article in articles.slice(0, 4)">
    {{ article.title }} <br />
    {{ article.content }} <br />
    <br />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const articles = ref([]);

const fetchNews = async () => {
  const apiKey = "6341230755904c1d92abca1f957ccfc0";
  const apiUrl =
    "https://api.worldnewsapi.com/search-news?api-key=d63b30de905647b0b7405f745cd0072c&text=sport&language=en";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    articles.value = data.news;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchNews();
});
</script>
<style></style>
