<template>
  <div class="layout">
    <Sidebar />

    <main class="main flex-column">
      <header class="container d-flex flex-space-between flex-align-center mt-10">
        <form @submit.prevent style="flex-basis: 50%">
          <InputText class="input_search"
                     className="full-width"
                     v-model="search"
          >
            <BaseButton text=""
                        class="button_search"
                        icon="search"
                        type="submit"
            />
          </InputText>
        </form>
        
        <router-link to="/profile/1" class="d-flex">
          <img src="../../assets/img/profile.jpg"
               width="60"
               height="61"
               alt="Профиль"
               style="margin-right: 10px;"
          >
          <p class="flex-inline-column">
            <span class="fw-700">Alexander C.</span>
            <span>Администратор</span>
          </p>
        </router-link>
      </header>

      <nav class="container breadcrubms d-flex mt-30">
        <router-link class="breadcrubms__el" to="/">
          <FontAwesomeIcon icon="home"/>
          /
        </router-link>

        <router-link class="breadcrubms__el" to="/polls">
          Опросы
          /
        </router-link>

        <span class="breadcrubms__el breadcrubms__el_active">Добавить опрос</span>
      </nav>
      
      <router-view class="container"></router-view>
    </main>
  </div>
</template>

<script>
  import Sidebar from '../../components/Sidebar/Sidebar';
  import InputText from '../../components/Form/InputText';
  import BaseButton from '../../components/Form/BaseButton';

  export default {
    name: 'Layout',
    components: {BaseButton, InputText, Sidebar},
    data() {
      return {
        search: ''
      }
    }
  }
</script>

<style scoped>
  .layout {
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: minmax(150px, 1fr) 11fr;
  }

  .main {
    grid-column: 2 / 3;
  }
</style>