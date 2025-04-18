<template>
  <button class="my-widget-button" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  buttonText: { type: String, default: "Click me" },
  onClickMessage: { type: String, default: "Button clicked!" },
});

function handleClick() {
  console.log(props.onClickMessage);
}
</script>

<style scoped>
.my-widget-button {
  background: #42b983;
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.my-widget-button:hover {
  background: #369d72;
}
</style>
