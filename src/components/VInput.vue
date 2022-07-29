<template>
  <input type="text" class="form-control" v-model="value" />
</template>

<script setup lang="ts">
import { defineEmits, defineProps, computed, withDefaults } from "vue";

const emits = defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();

const props = withDefaults(
  defineProps<{
    value?: string;
  }>(),
  {
    value: "",
  }
);

const value = computed({
  get() {
    return props.value;
  },
  set(newValue: string) {
    emits("update:modelValue", newValue);
  },
});
</script>
