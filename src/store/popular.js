import { defineStore } from "pinia";
import { apiKey } from "@/url";
import axios from "axios";
export const usePopular = defineStore({
    id: 'popular',
    state: () => ({
        popularMovies: null,
        popularTvs: null,
        url: `https://api.themoviedb.org/3/`,
        params: `?api_key=${apiKey}&language=ru-RU`
    }),
    actions: {
        async getPopular(type, page = 1){
            try {
                const res = await axios.get(`${this.url + type}/popular${this.params}&page=${page}`)
                if(type == 'movie') this.popularMovies = res.data.results
                else this.popularTvs = res.data.results
            } catch (error) {
                console.error('Произошла ошибка при получении популярных фильмов или сериалов', error);
            }
        }
    }
})