import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
import './assets/styles/main.scss'
import App from './App.vue'
import BtnMore from "./components/UI/BtnMore.vue";
import Loading from "./components/UI/Loading.vue";
import Actors from "./components/UI/Actors.vue";
import VueLazyLoad from "vue-lazyload";
import noImage from "./assets/images/noImage.svg";
import loadImage from "./assets/images/reload-cat.gif";

createApp(App)
    .use(router)
    .use(createPinia())
    .use(VueLazyLoad, {error: noImage, loading: loadImage})
    .component('BtnMore', BtnMore)
    .component('Actors', Actors)
    .component('Loading', Loading)
    .mount('#app')