import { defineStore } from "pinia";
import { apiKey } from "@/url";
import axios from "axios";
export const useSearch = defineStore({
    id: 'search',
    state: () => ({
        content: [],
        url: `https://api.themoviedb.org/3/search/multi`,
        params: `&include_adult=false&api_key=${apiKey}&language=ru-RU&page=1`
    }),
    actions: {
        async getSearch(query){
            try {
                const res = await axios.get(`${this.url}?query=${query}${this.params}`)
                this.content = res.data.results
                console.log(this.content);
            } catch (error) {
                console.error('Произошла ошибка при поиске', error);
            }
        }
    }
})