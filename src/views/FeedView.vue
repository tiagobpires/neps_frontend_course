<template>
  <div>
    <h1>Mini Feed</h1>
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :author="post.author"
      :created="formatDate(post.created)"
      :id="post.id"
      :text="post.text"
    />
    <PaginationRow v-model="page" :pages="pages" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { DateTime } from "luxon";
import PostCard from "@/components/PostCard.vue";
import PaginationRow from "@/components/PaginationRow.vue";
import { useAxios } from "@/composables/useAxios";

const { get } = useAxios();

const posts = ref([]);
const page = ref(1);
const pages = ref(1);

const fetchPosts = async () => {
  get("/posts/", {
    params: {
      page: page.value,
      reversed: true
    }
  }).then((response) => {
    posts.value = response.data.posts;
    page.value = response.data.page;
    pages.value = response.data.pages;
  });
};

const formatDate = (date) => {
  return DateTime.fromISO(date).toFormat("dd/MM/yyyy HH:mm");
};

onMounted(fetchPosts);

watch(page, fetchPosts);
</script>

<style lang="scss" scoped></style>
