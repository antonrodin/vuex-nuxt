<template>
  <div>
    <h1>Contacto</h1>
    <h2>Contador: {{ counter }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['getCounter']
    }
  }
}
</script>