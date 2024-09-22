<template>
  <div class="post-card">
    <p class="author">
      <span
        ><b>{{ author.username }}</b></span
      >
      wrote
    </p>
    <Markdown class="text" :source="text" />
    <p class="time">{{ created }}</p>
  </div>
</template>

<script setup>
import Markdown from "vue3-markdown-it";
import "highlight.js/styles/monokai.css";

defineProps({
  author: {
    type: Object,
    required: true
  },
  created: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.post-card {
  background: $background-secondary;
  width: 100%;
  border-radius: 8px;
  margin-top: 24px;
  padding: 12px;

  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.11);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.11);

  // Fix based on https://stackoverflow.com/questions/271067/how-can-i-make-a-textarea-100-width-without-overflowing-when-padding-is-present
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  p {
    color: $text-primary;
  }

  .text {
    font-size: 1.1rem;
  }

  .time {
    color: $text-muted;
  }
}
</style>

<style lang="scss">
.post-card {
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: $text-primary;
  }
}
</style>
