<template>
  <fieldset class="fieldset">
    <PollsFormRespondentsCondition v-for="(condition, index) in value"
                                   :key="index"
                                   :index="index"
                                   :canRemoveCondition="value.length > 1"
                                   v-model="value[index]"

                                   @addType="addType($event, index)"
                                   @removeCondition="removeCondition(index)"
    />

    <div class="p-30">
      <BaseButton type="button"
                  class="flex-column flex-align-center full-width mt-30 button_dark-green button_dark-green-big"
                  icon="plus"
                  text=""

                  @click="addCondition"
      >
        Нажмите, чтобы добавить новое условие выборки. <br> Все условия связываются между собой логическим "И"
      </BaseButton>
    </div>
  </fieldset>
</template>

<script>
  import PollsFormRespondentsCondition from './PollsFormRespondentsCondition';
  import BaseButton from '../../Form/BaseButton';
  export default {
    name: 'PollsFormRespondentsCreate',
    components: {BaseButton, PollsFormRespondentsCondition},
    props: {
      value: {
        type: Array
      }
    },
    data() {
      return {

      }
    },
    methods: {
      addType(value, index) {
        this.$emit('addType', {index, value});
      },

      addCondition() {
        this.$emit('addCondition');
      },

      removeCondition(index) {
        this.$emit('removeCondition', index);
      },
    },
  }
</script>

<style scoped>

</style>