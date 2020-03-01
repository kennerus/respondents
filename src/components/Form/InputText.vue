<template>
  <label>
    {{label}}
    <input type="text"
           class="input"
           :class="className"
           v-on="listeners"
           v-bind="$attrs"
    />
    <slot></slot>
  </label>

</template>

<script>
  import InputMixin from '../../mixins/InputMixin';

  export default {
    name: 'InputText',
    mixins: [InputMixin],
    inheritAttrs: false,
    computed: {
      listeners() {
        return {
          ...this.$listeners,
          input: event => this.$emit('input', event.target.value)
        }
      }
    },
    props: {
      label: {
        type: String,
        required: false,
      },
      className: {
        type: String,
        required: false,
      },
    }
  }
</script>

<style scoped>
  .input_search {
    position: relative;

    display: inline-flex;
    width: 100%;
  }
</style>