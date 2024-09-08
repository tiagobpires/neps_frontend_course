<template>
  <div>
    <h1>Create Post</h1>
    <form @submit.prevent="createPost">
      <textarea rows="15" placeholder="Text" v-model="text" />

      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAxios } from "@/composables/useAxios";
import { useToast } from "vue-toast-notification";

const { post } = useAxios();
const $toast = useToast();

const text = ref("");

const createPost = () => {
  post("/posts/", { text: text.value })
    .then(() => {
      text.value = "";
      $toast.success("Post created!", { position: "bottom" });
    })
    .catch(() => {
      $toast.info("First you need to login!", { position: "bottom" });
    });
};
</script>

<style lang="scss" scoped></style>
