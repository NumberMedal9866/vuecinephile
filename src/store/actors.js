import { defineStore } from "pinia";
import { apiKey } from "@/url";
import axios from "axios";
export const useActors = defineStore({
    id: 'actors',
    state: () => ({
        actorsMovie: null,
        actorsTv: null,
        url: `https://api.themoviedb.org/3/`,
        params: `?api_key=${apiKey}&language=ru-RU`
    }),
    actions: {
        async getActors({type, id, count}){
            try {
                const res = await axios.get(`${this.url}${type}/${id}/credits${this.params}`)
                let allActors = res.data.cast.slice(0, count)
                if(type == 'movie') this.actorsMovie = allActors
                else this.actorsTv = allActors
            } catch (error) {
                console.error('Произошла ошибка при получении актёров', error);
            }
        }
    }
})