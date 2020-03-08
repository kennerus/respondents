<template>
  <div class="table_condition">
    <span class="table_condition__hidden-span">И</span>
    <table class="full-width">
      <thead>
      <tr class="tr">
        <th class="th th-20 fw-700">Условие {{index + 1}}</th>
        <th class="th th-80">
          <BaseSelect :options="conditions"
                      :value="condition"

                      @change="conditionHandler"
          />
        </th>
      </tr>
      </thead>

      <tbody v-if="conditionSelected()">
      <tr v-for="(item, index) in value.data"
          :key="index"
          class="tr tr_append"
      >
        <td class="td td-20 td_capitalize ptb-20">
          <span class="td__hidden-span">или</span>
          {{conditionText()}} {{index + 1}}
        </td>
        <td class="td td-80 ptb-20">
          <InputTextRange v-model="value.data[index]" v-if="value.type === 'age'" />
          <BaseSelect :options="types[value.type].options"
                      v-model="value.data[index]"
                      v-else
          />
        </td>
      </tr>
      </tbody>

      <tfoot>
      <tr class="tr">
        <td class="td td-20 ptb-20"></td>
        <td class="td td-80 ptb-20">
          <div class="d-flex">
            <BaseButton type="button"
                        class="button_green"
                        icon="plus"
                        :text="`Добавить ${conditionText()}`"
                        v-if="conditionSelected()"

                        @click="addType"
            />
            <BaseButton type="button"
                        class="button_red ml-auto"
                        icon="trash-alt"
                        text="Удалить условие"
                        v-if="canRemoveCondition"

                        @click="removeCondition"
            />
          </div>
        </td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
  import BaseButton from '../../Form/BaseButton';
  import BaseSelect from '../../Form/BaseSelect';
  import InputTextRange from '../../Form/InputTextRange';


  export default {
    name: 'PollsFormRespondentsCondition',
    components: {InputTextRange, BaseSelect, BaseButton},
    props: {
      value: {
        type: Object
      },
      index: {
        type: Number,
      },
      canRemoveCondition: {
        type: Boolean,
      }
    },
    watch: {
      'value.type'(type) {
        this.condition = type;
      }
    },
    data() {
      return {
        conditions: [
          {
            value: 'age',
            text: 'Возраст респондента'
          },
          {
            value: 'cardType',
            text: 'Тип карты лояльности'
          },
          {
            value: 'cardStatus',
            text: 'Статус карты лояльности'
          },
        ],
        types: {
          age: {
            name: 'диапазон',
            default: {
              from: '',
              to: ''
            },
          },
          cardType: {
            name: 'тип',
            default: '',
            options: [
              {
                value: 'silver',
                text: 'Silver',
              },
              {
                value: 'gold',
                text: 'Gold',
              },
              {
                value: 'platinum',
                text: 'Platinum',
              },
            ],

          },
          cardStatus: {
            name: 'статус',
            default: '',
            options: [
              {
                value: 'active',
                text: 'Активна',
              },
              {
                value: 'inactive',
                text: 'Неактивна',
              },
            ],

          }
        },
        condition: '',
      }
    },
    methods: {
      addType() {
        this.$emit('addType', this.types[this.condition].default);
      },

      conditionSelected() {
        return Boolean(this.value.type);
      },

      conditionText() {
        return this.types[this.value.type].name;
      },

      async removeCondition() {
        const remove = await this.$swal({
          title: 'Вы хотите удалить условие?',
          showCancelButton: true,
          confirmButtonText: 'Да, удалить',
          cancelButtonText: 'Нет'
        });

        if (remove.value) this.$emit('removeCondition');
      },

      conditionHandler(condition) {
        this.condition = condition;

        this.$emit('input', {type: this.condition, data: [this.types[this.condition].default]});
      }
    }
  }
</script>

<style scoped>
  .table_condition {
    position: relative;
    z-index: auto;

    padding: 15px;
  }

  .table_condition__hidden-span,
  .td__hidden-span {
    display: none;
  }

  .table_condition__hidden-span {
    position: absolute;
    top: -20px;
  }

  .table_condition:nth-child(n + 2) .table_condition__hidden-span {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 6px;
  }

  .table_condition:nth-child(3n + 1) {
    background-color: var(--clr-ultra-light-brown);
  }

  .table_condition:nth-child(3n + 2) {
    background-color: var(--clr-light-blue);
  }

  .table_condition:nth-child(3n + 3) {
    background-color: var(--clr-ultra-light-green);
  }

  .table_condition:nth-child(3n + 1) .table_condition__hidden-span {
    background-color: var(--clr-light-brown);
  }

  .table_condition:nth-child(3n + 2) .table_condition__hidden-span {
    background-color: var(--clr-mid-blue);
  }

  .table_condition:nth-child(3n + 3) .table_condition__hidden-span {
    background-color: var(--clr-mid-green);
  }

  .tr_append:nth-child(n + 2) .td__hidden-span {
    display: inline-block;
    margin-right: 10px;
    padding: 10px;

    border-radius: 6px;
  }

  .table_condition:nth-child(3n + 1) .tr_append:nth-child(n + 2) .td__hidden-span {
    background-color: var(--clr-light-brown);
  }

  .table_condition:nth-child(3n + 2) .tr_append:nth-child(n + 2) .td__hidden-span {
    background-color: var(--clr-mid-blue);
  }

  .table_condition:nth-child(3n + 3) .tr_append:nth-child(n + 2) .td__hidden-span {
    background-color: var(--clr-light-green);
  }
</style>