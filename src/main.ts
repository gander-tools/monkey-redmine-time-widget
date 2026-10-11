import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './components/App.vue';
import PrimeVue from 'primevue/config';
import Lara from '@primeuix/themes/lara';
import {GM_addElement} from '$';

const container = document.querySelector('.attributes');

if (container) {
    createApp(App)
        .use(createPinia())
        .use(PrimeVue, {theme: {preset: Lara, options: {darkModeSelector: false}}})
        .mount(GM_addElement(container, 'div'));
}



