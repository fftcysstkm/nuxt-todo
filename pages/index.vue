<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Counter />
      <hr />
      <Counter />
      <hr />
      <Counter />
      <hr />
    </v-col>
  </v-row>
</template>
<script>
import Counter from '~/components/Counter.vue'
export default {
  components: {
    Counter,
  },
}
</script>
