<template>
  <button v-on="$listeners" class="button">
    <FontAwesomeIcon :icon="icon"
                     class="button__icon"
                     v-if="icon.length"
    />
    <slot></slot>
    <span>{{text}}</span>
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      text: {
        type: String,
        default: 'Кнопка'
      },
      icon: {
        type: String,
        default: '',
        required: false,
      },
    }
  }
</script>

<style scoped>
  .button {
    padding: 10px;

    font-size: 16px;

    background-color: transparent;
    border: var(--border-mid-gray);
    border-radius: 6px;
    cursor: pointer;
  }

  .button_red {
    color: var(--clr-red);
    border-color: var(--clr-light-red);
  }

  .button_green {
    color: var(--clr-green);
    border-color: var(--clr-light-green);
  }

  .button_form-nav {
    padding: 15px 20px;

    color: var(--clr-dark-green);

    border: none;
    border-bottom: var(--border-big-transparent);
    border-radius: 0;
  }

  .button_form-nav-active {
    color: black;
    font-weight: 700;

    border-bottom: var(--border-big-light-green);
  }

  .button_dark-green {
    color: var(--clr-dark-green);
  }

  .button_dark-green-big {
    padding: 30px;
  }

  .button_green-revers {
    color: white;
    background-color: var(--clr-green);
    border-color: var(--clr-green);
  }

  .button_search {
    position: absolute;
    top: 0;
    right: 0;

    border: none;
  }

  .button__icon {
    margin-right: 10px;
  }

  .button_red .button__icon {
    color: var(--clr-red);
  }

  .button_green .button__icon {
    color: var(--clr-green);
  }

  .button_search .button__icon {
    margin-right: 0;

    color: var(--clr-gray);
  }
</style>