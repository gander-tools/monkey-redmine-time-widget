import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './components/App.vue';
import {GM_addElement} from '$';

const container = document.querySelector('.attributes');

if (container) {
    createApp(App)
        .use(createPinia())
        .mount(GM_addElement(container, 'div'));
}



