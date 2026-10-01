<script setup>
  import Button from './Button.vue';
  
  defineProps({
    buttons: Array
  })
</script>

<template>
  <section class="toolbar">
    <Button v-for="button in buttons" :icon="button.icon" :action="button.action" />
  </section>
</template>
