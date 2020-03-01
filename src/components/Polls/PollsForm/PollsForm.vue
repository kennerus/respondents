<template>
  <div class="mt-30">
    <PollsFormNav :steps="steps"
                  :currentStep="currentStep"
                  @click="changeStep"
    />

    <h2 style="padding: 15px; font-size: 16px; color: silver">
      Добавить опрос
    </h2>

    <form @submit.prevent>
      <component :is="currentStep"
                 :value="value[currentStep]"

                 @addType="addType"
                 @addCondition="addCondition"
                 @removeCondition="removeCondition"
                 @input="emitFormData"
      ></component>
    </form>

    <footer class="d-flex flex-space-between p-30">
      <BaseButton type="button"
                  class="button_dark-green"
                  text="Протестировать опрос"
      />

      <BaseButton type="button"
                  class="button_green-revers"
                  icon="arrow-right"
                  text="Далее"

                  @click="nextStep"
      />
    </footer>
  </div>
</template>

<script>
  import InputText from '../../Form/InputText';
  import BaseButton from '../../Form/BaseButton';
  import PollsFormNav from './PollsFormNav';
  const PollsFormRespondents = () => import('./PollsFormRespondents');
  const PollsFormConditions = () => import('./PollsFormConditions');
  const PollsFormLogic = () => import('./PollsFormLogic');
  const PollsFormParams = () => import('./PollsFormParams');
  const PollsFormQuestions = () => import('./PollsFormQuestions');

  export default {
    name: 'PollsForm',
    components: {
      PollsFormNav,
      BaseButton,
      InputText,
      PollsFormConditions,
      PollsFormLogic,
      PollsFormParams,
      PollsFormQuestions,
      PollsFormRespondents,
    },
    props: {
      value: {
        type: [Array, Object],
      }
    },
    data() {
      return {
        currentStep: 'PollsFormRespondents',
        steps: [
          {
            text: 'Параметры',
            name: 'Params',
          },
          {
            text: 'Вопросы',
            name: 'Questions',
          },
          {
            text: 'Логика',
            name: 'Logic',
          },
          {
            text: 'Условия',
            name: 'Conditions',
          },
          {
            text: 'Респоненты',
            name: 'Respondents',
          },
        ]
      }
    },
    methods: {
      nextStep() {
        const currentStepIndex = this.steps.findIndex(step => this.currentStep.includes(step.name));
        const nextStepIndex = currentStepIndex + 1;

        if (this.steps.length === currentStepIndex + 1) {
          if (this.value.PollsFormRespondents.data.length) {
            this.$emit('submit');
          }
        } else {
          this.changeStep(`PollsForm${this.steps[nextStepIndex].name}`);
        }
      },

      removeCondition(index) {
        this.$emit('removeCondition', index);
      },

      addType(value) {
        this.$emit('addType', value);
      },

      addCondition() {
        this.$emit('addCondition');
      },

      changeStep(step) {
        this.currentStep = step;
      },

      emitFormData(data) {
        this.$emit('change', data);
      },
    }
  }
</script>

<style scoped>

</style>