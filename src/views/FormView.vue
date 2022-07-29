<template>
  <div class="home">
    <h1>Форма</h1>

    <p>Почему не обновляются значения в форме?</p>

    <div class="row">
      <div class="col-6">
        <v-input v-model="formData.login" />
      </div>
      <div class="col-6">
        <v-input v-model="formData.name" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import VInput from "@/components/VInput.vue";

const formData = reactive({
  login: "",
  name: "",
});
</script>
