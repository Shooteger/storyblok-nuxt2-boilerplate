<template>
  <div
    v-editable="blok"
    class="prose my-24 mx-auto">
    <h1>{{ blok.title }}</h1>
    <rich-text-renderer
      :document="blok.text"
    />
    <img
      class="mx-auto"
      :src="blok.image" />
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>