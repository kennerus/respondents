import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFileAlt, faUserFriends, faFlag, faPhoneAlt, faHome, faPlus, faTrashAlt, faArrowRight, faQuestionCircle, faCircle, faSearch} from '@fortawesome/free-solid-svg-icons';


Vue.config.productionTip = false;

library.add(faFileAlt, faUserFriends, faFlag, faPhoneAlt, faHome, faPlus, faTrashAlt, faArrowRight, faQuestionCircle, faCircle, faSearch);

Vue.use(VueSweetalert2);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
