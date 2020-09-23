<template>
  <div>
    <h1>Home</h1>
    <h2>Contador: {{ counter }}</h2>
    <button @click="llamarASumarDos">Sumar Dos</button>
  </div>
</template>

<script>
export default {
  
  methods: {
    llamarASumarDos() {
      this.$store.dispatch('sumarDos')
    }
  },
  
  computed: {
    counter() {
      return this.$store.getters['getCounter']
    }
  }
}
</script>