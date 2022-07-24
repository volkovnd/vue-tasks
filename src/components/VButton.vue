<template>
  <button class="btn" :class="computedClassName" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, withDefaults } from "vue";
import { DEFAULT_BUTTON_STATE } from "@/constants";

const emits = defineEmits(["click"]);

const props = withDefaults(
  defineProps<{
    state: {
      type: string;
    };
  }>(),
  {
    state: () => DEFAULT_BUTTON_STATE,
  }
);

const state = ref(props.state);

const computedClassName = computed(() => `btn-${state.value.type}`);

function onClick() {
  state.value.type = "default";

  emits("click");
}
</script>
