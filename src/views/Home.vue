<template>
  <div class="flex h-full">
    <div class="flex">
      <div><Sidemenu /></div>
      <div class="pt-16 border-r border-border"><Blog /></div>
    </div>
    <div>
      <Active />
    </div>
  </div>
</template>
<script setup>
import Active from "../components/Active.vue";
import Sidemenu from "../components/Sidemenu.vue";
import Blog from "../components/Blog.vue";
</script>
<style></style>
