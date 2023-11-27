<template>
    <section class="container content">
        <h2>Все {{type == 'movie'? 'фильмы' : 'сериалы'}}</h2>
        <div class="content-cards">
            <RouterLink :to="`${type}/${item.id}`" v-for="item in content" :key="item.id" target="_blank">
                <img :src="imgMini + item.poster_path" alt="">
                <h3>{{item.title || item.name}}</h3>
            </RouterLink>
        </div>
        <div class="pagination">
            <button :disabled="currentPage == 1" @click="changePage('back')">BACK</button>
            <span>Страница {{currentPage}} - {{totalPages}}</span>
            <button :disabled="currentPage == totalPages" @click="changePage('next')">NEXT</button>
        </div>
    </section>
</template>

<script setup>
    const props = defineProps(['type'])
    import {usePopular} from '@/store/popular'
    import {onMounted, ref} from 'vue'
    import { imgMini, imgFull } from "@/url";    
    const storePopular = usePopular()
    const content = ref(null)
    const currentPage = ref(1)
    const totalPages = ref(500)
    onMounted(async() => {
        await storePopular.getPopular(props.type)
        content.value = props.type == 'movie' ? storePopular.popularMovies : storePopular.popularTvs
    })
    const changePage = async (dir) => {
        if( dir == 'next') currentPage.value++
        else currentPage.value--
        await storePopular.getPopular(props.type, currentPage.value)
        content.value = props.type == 'movie' ? storePopular.popularMovies : storePopular.popularTvs
        // return {x: 0, y: 0} one of the variants
        window.scroll(0,0)
    }
</script>