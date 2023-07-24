<template>
  <h1>Slots</h1>
  <button>Open Modal</button>
  <modal>
    <template v-slot:body>
      <p>Lorem ipsum</p>
    </template>
    <template v-slot:footer>
      <button>Close</button>
    </template>
    <template v-slot:header>
      <h2>Modal title (named)</h2>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  components: { Modal },
  name: 'CustomSlotsView',
  setup() {},
};
</script>

<style scoped></style>
