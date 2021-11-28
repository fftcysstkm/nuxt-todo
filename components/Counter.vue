<template>
  <div>
    <h1>Counter App</h1>
    <div>counter:{{ $store.getters['counter/getCounter'] }}</div>
    <button @click="increment">+1</button>
    <button @click="reset">reset</button>
  </div>
</template>
<script>
export default {
  methods: {
    increment() {
      return this.$store.commit('counter/countUp')
    },
    reset() {
      return this.$store.commit('counter/reset')
    },
  },
}
</script>
