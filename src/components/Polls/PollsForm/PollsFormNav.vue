<template>
  <nav class="d-flex form-nav">
    <BaseButton v-for="step in steps"
                :key="step.name"
                :text="step.text"
                :class="activeButtonClassName(step)"
                type="button"
                class="button_form-nav"

                @click="changeStep(step)"
    />
  </nav>
</template>

<script>
  import BaseButton from '../../Form/BaseButton';

  export default {
    name: 'PollsFormNav',
    components: {BaseButton},
    props: {
      currentStep: {
        type: String,
        required: true,
      },
      steps: {
        type: Array,
        required: true,
      },
    },
    methods: {
      activeButtonClassName(step) {
        return this.currentStep.includes(step.name) ? 'button_form-nav-active' : '';
      },

      changeStep(step) {
        this.$emit('click', `PollsForm${step.name}`);
      },
    }
  }
</script>

<style scoped>
  .form-nav {
    border-bottom: var(--border-sm-light-green);
  }
</style>