<template>
  <div>
    <div class="form">
      <!-- preventがついているとsubmit後にリロードが走らずページにとどまる -->
      <form @submit.prevent="add">
        <input v-model="name" />
        <button>Add</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      done: false,
    }
  },
  // createdはDOMがまだ作られていない状態。その状態で初期化
  created() {
    this.$store.dispatch('todos/init')
  },
  methods: {
    add() {
      this.$store.dispatch('todos/add', this.name)
    },
  },
}
</script>
