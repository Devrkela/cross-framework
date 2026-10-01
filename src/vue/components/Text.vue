<script setup>
  import { ref } from 'vue';
  
  let bold = ref(false);
  let italic = ref(false);
  let underline = ref(false);
  let color = ref(false);

  window["#store"].bold.addEventListener("change", function(e){
    bold.value = e.value;
  });

  window["#store"].italic.addEventListener("change", function(e){
    italic.value = e.value;
  });

  window["#store"].underline.addEventListener("change", function(e){
    underline.value = e.value;
  });

  window["#store"].color.addEventListener("change", function(e){
    color.value = e.value;
  });
</script>

<template>
  <p :bold="bold" :italic="italic" :underline="underline" :color="color">
    Hello world
  </p>
</template>