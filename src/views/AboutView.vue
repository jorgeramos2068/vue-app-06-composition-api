<template>
  <div class="about">
    <h1>Lifecycle Hooks</h1>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onActivated,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
} from '@vue';

export default {
  name: 'About',
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('onMounted');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });

    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });

    onRenderTracked(() => {
      console.log('onRenderTracked');
    });

    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });

    onActivated(() => {
      console.log('onActivated');
    });

    onDeactivated(() => {
      console.log('onDeactivated');
    });
  },
};
</script>

<style></style>
