<template>
  <div class="post-card">
    <p class="author">
      <span
        ><b>{{ author.username }}</b></span
      >
      escreveu
    </p>
    <p class="text">{{ text }}</p>
    <p class="time">{{ created }}</p>
  </div>
</template>

<script setup>
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
