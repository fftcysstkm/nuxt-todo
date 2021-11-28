export const state = () => ({
  counter: 0,
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
}

export const mutations = {
  countUp(state) {
    state.counter++
  },
  reset(state) {
    state.counter = 0
  },
}
