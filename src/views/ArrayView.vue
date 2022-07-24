<template>
  <div class="arrays">
    <h1>Массивы</h1>

    <div>
      Ниже должна появиться надпись, что массив был изменен, после нажатия на
      кнопку или изменения первого input или удаления input, но почему-то этого
      не происходит. Вопрос, как это исправить? Почему при текущей реализации не
      срабатывает watch?
    </div>

    <div v-if="isArrayChanged" class="my-2">Массив был изменен</div>

    <div class="my-2" v-for="(value, index) in data" :key="index">
      <div class="row">
        <div class="col-8">
          <input type="text" class="form-control" v-model="data[index]" />
        </div>
        <div class="col-4">
          <button
            type="button"
            class="btn btn-block btn-danger"
            @click="removeInput(index)"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-primary" @click="addInput">
      Добавить input
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const data = ref<string[]>([""]);
const isArrayChanged = ref(false);

function addInput() {
  data.value.push("");
}

function removeInput(index: number) {
  data.value.splice(index, 1);
}

watch(data, () => {
  isArrayChanged.value = true;
});
</script>
