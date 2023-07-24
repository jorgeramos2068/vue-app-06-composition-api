<template>
  <h1>Slots</h1>
  <button @click="openModal">Open Modal</button>
  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:body>
      <p>Lorem ipsum</p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Close</button>
    </template>
    <template v-slot:header>
      <h2>Modal title (named)</h2>
    </template>
    <template v-slot:exposed="{ newTitle }">
      <h3>{{ newTitle }}</h3>
    </template>
  </modal>
</template>

<script>
import { ref } from 'vue';
import Modal from '@/components/Modal';

export default {
  components: { Modal },
  name: 'CustomSlotsView',
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
  },
};
</script>

<style scoped></style>
