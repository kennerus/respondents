<template>
  <div class="d-flex">
    <InputText class="d-flex flex-align-center"
               label="от"
               className="ml-5 mr-10"
               v-model="value.from"
    />

    <InputText class="d-flex flex-align-center"
               label="до"
               className="ml-5"
               v-model="value.to"
    />
  </div>
</template>

<script>
  import InputText from './InputText';
  export default {
    name: 'InputTextRange',
    components: {InputText},
    props: {
      value: {
        type: Object,
      }
    }
  }
</script>

<style scoped>

</style>