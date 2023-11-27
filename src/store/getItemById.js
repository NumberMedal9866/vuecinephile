import { defineStore } from "pinia";
import { apiKey } from "@/url";
import axios from "axios";
export const useGetItemById = defineStore({
    id: 'getItemById',
    state: () => ({
        movie: null,
        tv: null,
        url: `https://api.themoviedb.org/3/`,
        params: `?api_key=${apiKey}&language=ru-RU`
    }),
    actions: {
        async getItemById({type, id}){
            try {
                const res = await axios.get(`${this.url}${type}/${id}${this.params}`)
                if(type == 'movie') this.movie = res.data
                else this.tv = res.data
            } catch (error) {
                console.error('Произошла ошибка при получении фильма или сериала', error);
            }
        }
    }
})