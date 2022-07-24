<template>
  <div class="home">
    <h1>Объект</h1>
    <p>
      Из-за какой ошибки цвет при клике на кнопку меняется у всех, а не у одной?
    </p>

    <div class="row">
      <div class="col-auto">
        <v-button :state="DEFAULT_BUTTON_STATE">Button 1</v-button>
      </div>
      <div class="col-auto">
        <v-button :state="DEFAULT_BUTTON_STATE">Button 2</v-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VButton from "@/components/VButton.vue";
import { DEFAULT_BUTTON_STATE } from "@/constants";
</script>
