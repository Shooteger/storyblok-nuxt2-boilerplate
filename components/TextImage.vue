<template>
  <div v-editable="blok" class="flex justify-evenly mt-20">
    <h1>{{ blok.title }}</h1>
    <div class="prose"><rich-text-renderer :document="blok.text" /></div>
    <div><img class="mx-auto w-96" :src="blok.image.filename" /></div>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>