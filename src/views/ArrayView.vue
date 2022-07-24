<template>
  <div class="arrays">
    <h1>Массивы</h1>

    <div>
      Ниже должна появиться надпись, что массив был изменен, после нажатия на
      кнопку, но почему-то этого не происходит. Вопрос, как это исправить? Еще
      более интересный вопрос, как правильно реализовать изменение в input
    </div>

    <div v-if="isArrayChanged">Массив был изменен</div>

    <div class="form-group mb-2" v-for="(value, index) in data" :key="index">
      <input type="text" class="form-control" v-model="data[index]" />
    </div>

    <button class="btn btn-primary" @click="addInput">Добавить input</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const data = ref<string[]>([]);
const isArrayChanged = ref(false);

function addInput() {
  data.value.push("");
}

watch(data, () => {
  isArrayChanged.value = true;
});
</script>
