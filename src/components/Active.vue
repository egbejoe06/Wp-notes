<template>
  <div style="font-family: inter" v-if="activeArticle" class="flex flex-col gap-5">
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
  <div
    v-if="useStore().articles.length > 1"
    style="font-family: inter"
    class="flex flex-col gap-8"
  >
    <div class="flex flex-col gap-6">
      <div class="font-bold text-title">{{ comments.length }} Comments</div>
      <div v-for="comment in comments" class="flex gap-1 border-b border-border p-2">
        <div>
          <img src="../assets/Img03.png" alt="" />
        </div>
        <div class="flex gap-1 flex-col">
          <span class="text-title">{{ comment.user.username }}</span>
          <span class="text-textcolor text-xs">{{ comment.body }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <div class="font-bold text-title">Post Comments</div>
      <div class="w-full flex flex-col gap-6">
        <div class="flex justify-between gap-5 w-full">
          <div class="flex flex-col gap-2 w-full">
            <span>Name</span
            ><span
              ><input v-model="name" class="p-3 bg-border rounded-lg w-full" type="text"
            /></span>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <span>Email</span
            ><span
              ><input v-model="email" class="p-3 bg-border rounded-lg w-full" type="text"
            /></span>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span>Website</span
          ><span
            ><input v-model="website" class="p-3 bg-border rounded-lg w-full" type="text"
          /></span>
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span>Your comment</span
          ><span
            ><input
              v-model="yourComment"
              class="p-3 bg-border rounded-lg w-full"
              type="text"
          /></span>
        </div>
        <div>
          <button
            @click="postComment()"
            class="p-4 rounded-lg bg-primary text-white cursor-pointer"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount, onMounted, watch } from "vue";
import { useStore } from "../store/store.js";

const activeArticle = ref(null);
const comments = ref([]);
const name = ref("");
const yourComment = ref("");
const email = ref("");
const website = ref("");

const fetchComment = async () => {
  const apiUrl = "https://dummyjson.com/comments?limit=3";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    comments.value = data.comments;

    console.log(data);
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

const postComment = async () => {
  const newComment = {
    user: {
      username: name.value,
    },
    body: yourComment.value,
  };
  comments.value.push(newComment);
  name.value = "";
  yourComment.value = "";
  email.value = "";
  website.value = "";
};

onBeforeMount(() => {
  activeArticle.value = useStore().selectedArticle;
});
onMounted(() => {
  fetchComment();
});
watch(
  () => useStore().selectedArticle,
  (newValue) => {
    activeArticle.value = newValue;
  }
);
</script>
<style></style>
