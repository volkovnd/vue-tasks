<template>
  <button class="btn" :class="computedClassName" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";

const props = defineProps<{
  state: {
    type: string;
  };
}>();

const state = ref(props.state);

const computedClassName = computed(() => `btn-${state.value.type}`);

function onClick() {
  state.value.type = "default";
}
</script>
