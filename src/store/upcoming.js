import { defineStore } from "pinia";
import { apiKey } from "@/url";
import axios from "axios";

export const useUpcoming = defineStore({
    id: 'upcoming',
    state: () => ({
        upcoming: null,
        url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=ru-RU`
    }),
    actions: {
        async getUpcoming(){
            try {
                const res = await axios.get(this.url)
                this.upcoming = res.data.results
            } catch (error) {
                console.error('Произошла ошибка при получении предстоящих фильмов', error);
            }
        }
    }
})