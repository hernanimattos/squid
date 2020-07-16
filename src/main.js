import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faAt,
  faHeart,
  faComment,
  faCalendarAlt,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

library.add(
  faUserSecret,
  faAt,
  faHeart,
  faComment,
  faCalendarAlt,
  faArrowCircleRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.filter('dateformat', function(value) {
  if (!value) return '';

  const date = new Date(value);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes =
    date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${day}/${month}/${year} ${hour}:${minutes}`;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
