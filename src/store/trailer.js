import { defineStore } from "pinia";
import { apiKey } from "@/url";
import axios from "axios";
export const useTrailer = defineStore({
    id: 'Trailer',
    state: () => ({
        movieTrailer: null,
        tvTrailer: null,
        url: `https://api.themoviedb.org/3/`,
        params: `/videos?api_key=${apiKey}&language=ru-RU`
    }),
    actions: {
        async getTrailer({type, id}){
            try {
                const res = await axios.get(`${this.url}${type}/${id}${this.params}`)
                res.data.results.forEach(el => {
                    if(el.size == 1080){
                        if(type == 'movie') this.movieTrailer = el.key
                        else this.tvTrailer = el.key
                    }
                })
            } catch (error) {
                console.error('Произошла ошибка при получении трейлера', error);
            }
        }
    }
})