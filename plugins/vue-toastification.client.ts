import { defineNuxtPlugin } from '#app';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { options } from '~/constants/toast-options';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, options);
});
