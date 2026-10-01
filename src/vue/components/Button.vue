<script setup>
  import Icon from './Icon.vue'
  defineProps({
    icon: String,
    action: Function
  })

</script>

<template>
  <button :onclick="action">
    <Icon :url="icon"/>
  </button>
</template>
