<template>
  <div class="home">
    <h1>Вопрос 1</h1>
    <p>
      Из-за какой ошибки цвет при клике на кнопку меняется у всех, а не у одной?
    </p>

    <v-button :state="DEFAULT_BUTTON_STATE">test1</v-button>

    <v-button :state="DEFAULT_BUTTON_STATE">test2</v-button>
  </div>
</template>

<script setup lang="ts">
import VButton from "@/components/VButton.vue";
import { DEFAULT_BUTTON_STATE } from "@/constants";
</script>
