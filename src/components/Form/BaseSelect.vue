<template>
  <select v-bind="$attrs"
          v-on="listeners"
          class="input"
  >
    <option disabled :selected="value === ''" value="">Выберите условие</option>
    <option v-for="option in options"
            :key="option.value"
            :selected="option.value === value"
            :value="option.value"

    >
      {{option.text}}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'BaseSelect',
    props: {
      value: {
        type: String
      },
      options: {
        type: Array
      }
    },
    computed: {
      listeners() {
        return {
          ...this.$listeners,
          change: event => this.$emit('change', event.target.value),
          input: event => this.$emit('input', event.target.value),
        }
      }
    },
  }
</script>

<style scoped>

</style>