<script setup>
  defineProps({
    url: String
  })
</script>

<template>
  <svg class="icon">
    <use :href="url"></use>
  </svg>
</template>
