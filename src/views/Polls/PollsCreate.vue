<template>
  <PollsForm v-model="form"

             @addType="addType"
             @addCondition="addCondition"
             @removeCondition="removeCondition"
             @submit="createPoll"
  />
</template>

<script>
  import PollsForm from '../../components/Polls/PollsForm/PollsForm';

  export default {
    name: 'PollsCreate',
    components: {PollsForm},
    data() {
      return {
        form: {
          PollsFormRespondents: [
            {
              type: '',
              data: [],
            },
          ],
          PollsFormConditions: [],
          PollsFormLogic: [],
          PollsFormParams: [],
          PollsFormQuestions: [],
        },
      }
    },
    methods: {
      addType(value) {
        this.form.PollsFormRespondents[value.index].data.push(value.value);
      },

      addCondition() {
        this.form.PollsFormRespondents.push({
          type: '',
          data: [],
        });
      },

      removeCondition(index) {
        this.form.PollsFormRespondents.splice(index, 1);
      },

      createPoll() {
        const form = {
          conditions: this.form.PollsFormConditions,
          respondents: this.form.PollsFormRespondents,
          logic: this.form.PollsFormLogic,
          params: this.form.PollsFormParams,
          questions: this.form.PollsFormQuestions,
        };

        console.log(form);
      }
    }
  }
</script>

<style scoped>

</style>