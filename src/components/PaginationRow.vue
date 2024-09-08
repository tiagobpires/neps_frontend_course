<template>
  <div class="pagination">
    <span
      class="pagination-item"
      :class="{ 'pagination-item-active': i == modelValue }"
      @click="changePage(i)"
      v-for="i in pages"
      :key="`page-${i}`"
      >{{ i }}</span
    >
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  pages: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(["update:modelValue"]);

function changePage(page) {
  emit("update:modelValue", page);
}
</script>

<style lang="scss" scoped>
.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination-item {
  padding: 5px 10px;
  margin: 0 5px 10px 5px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  color: $pagination-item-color;
}

.pagination-item-active {
  background-color: $pagination-item-active-background;
  color: $pagination-item-active-color;
}
</style>
