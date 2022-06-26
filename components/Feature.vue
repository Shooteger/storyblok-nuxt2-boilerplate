<template>
  <div
    v-editable="blok" class="text-center">
    <h1 class="text-lg">{{ blok.name }}</h1>
    <p class="text-gray-600">
      <a :href="`${type}:${blok.description}`">{{blok.description}}</a>
    </p>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    type() {
      return this.blok.type
    }
  }
}
</script>