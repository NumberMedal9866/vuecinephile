import { defineStore } from "pinia";
import { apiKey } from "@/url";
import axios from "axios";
export const useTop = defineStore({
    id: 'top',
    state: () => ({
        top: [],
        url: `https://api.themoviedb.org/3/movie/top_rated`,
        params: `?api_key=${apiKey}&language=ru-RU&page=1`
    }),
    actions: {
        async getTop(){
            try {
                const res = await axios.get(this.url + this.params)
                res.data.results.forEach(item => {
                    if(this.top.length < 10) this.top.push(item)
                });
            } catch (error) {
                console.error('Произошла ошибка при получении топовых фильмов', error);
            }
        }
    }
})