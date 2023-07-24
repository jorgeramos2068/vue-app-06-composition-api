<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>
    <button @click="changeIronman()">Change Ironman</button>
    <button @click="changeHulk()">Change Hulk</button>
    <h3>{{ isIronmanActive }}</h3>
    <h3>{{ isHulkActive }}</h3>
    <button @click="changeStatus()">Change status</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'Home',
  setup() {
    const ironman = ref({ name: 'Tony', age: 40 });
    const hulk = reactive({ name: 'Bruce', age: 45 });
    const isIronmanActive = ref(true);
    const isHulkActive = reactive(true);

    return {
      ironman,
      hulk,
      isIronmanActive,
      isHulkActive,
      changeIronman: () => {
        ironman.value.name = 'Tony Stark';
        ironman.value.age = 30;
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner';
        hulk.age = 35;
      },
      changeStatus: () => {
        isIronmanActive.value = !isIronmanActive.value;
        isHulkActive = !isHulkActive; // It will show an error
      },
    };
  },
};
</script>
