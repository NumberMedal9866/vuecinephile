import { defineStore } from "pinia";
import { apiKey } from "@/url";
import axios from "axios";
export const useRec = defineStore({
    id: 'rec',
    state: () => ({
        recMovie: [],
        recTv: [],
        url: `https://api.themoviedb.org/3/`,
        params: `/recommendations?api_key=${apiKey}&language=ru-RU&page=1`
    }),
    actions: {
        async getRec({type, id}){
            try {
                const res = await axios.get(`${this.url}${type}/${id}${this.params}`)
                res.data.results.forEach(item => {
                    if (type == 'movie'){
                        if(this.recMovie.length < 4) this.recMovie.push(item)
                    }else{
                        if(this.recTv.length < 4) this.recTv.push(item)
                    }
                });
            } catch (error) {
                console.error('Произошла ошибка при получении рекоммендаций', error);
            }
        }
    }
})