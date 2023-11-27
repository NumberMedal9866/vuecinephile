import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from './pages/HomePage.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'homepage', component: HomePage},
        {path: '/movies', name: 'moviespage', component: () => import('./pages/MoviesPage.vue')},
        {path: '/tvs', name: 'tvspage', component: () => import('./pages/TvsPage.vue')},
        {path: '/tv/:id', name: 'tv', component: () => import('./pages/Tv.vue')},
        {path: '/movie/:id', name: 'movie', component: () => import('./pages/Movie.vue')},
        {path: '/search', name: 'searchpage', component: () => import('./pages/SearchPage.vue')},
    ],
    scrollBehavior(){
        return {top: 0}
    }
})