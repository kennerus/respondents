<template>
  <aside class="sidebar flex-column">
    <nav class="sidebar__nav flex-column">
      <router-link v-for="item in list"
                   :key="item.to"
                   :to="item.to"
                   class="sidebar__link flex-column flex-align-center"
      >
        <FontAwesomeIcon :icon="item.icon"
                         class="sidebar__icon"
                         size="2x"
        />
        <span>{{item.name}}</span>
      </router-link>
    </nav>

    <router-link to="/help" class="mt-auto">
      <FontAwesomeIcon icon="question-circle"
                       class="sidebar__icon"
                       size="2x"
      />
    </router-link>
  </aside>
</template>

<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        list: [
          {
            icon: 'circle',
            name: '',
            to: '/',
          },
          {
            icon: 'file-alt',
            name: 'Опросы',
            to: '/polls',
          },
          {
            icon: 'user-friends',
            name: 'Пользователи',
            to: '/users',
          },
          {
            icon: 'flag',
            name: 'Чёрные списки',
            to: '/black-lists',
          },
          {
            icon: 'phone-alt',
            name: 'Колл-центр',
            to: '/call-center',
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    grid-column: 1 / 2;
    height: 100vh;
    padding: 10px;

    border-right: var(--border-mid-gray);
  }

  .sidebar__link {
    padding: 10px;

    text-align: center;
    border-radius: 4px;
  }

  .sidebar__link:first-child {
    color: var(--clr-red);
  }

  .sidebar__link:not(:first-child) {
    border: var(--border-mid-transparent);
  }

  .sidebar__link:not(:first-child):hover {
    color: var(--clr-light-green);
    border-color: var(--clr-light-green);
  }

  .sidebar__icon {
    margin-bottom: 5px;

  }

  .sidebar__link:not(:first-child):hover .sidebar__icon {
    color: var(--clr-green);
  }
</style>