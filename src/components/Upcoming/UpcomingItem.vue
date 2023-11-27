<template>
<Transition name="upcoming">
<div class="main-upcoming-item" v-if="idx == slideView">
    <img v-lazy="imgFull + movie.backdrop_path" alt="">
    <div class="main-upcoming-item-content">
        <h1>{{movie.title || 'МЕНЯ ЗАБЫЛИ НАЗВАТЬ...((('}}</h1>
        <p>{{movie.overview || 'МЕНЯ ЗАБЫЛИ ОПИСАТЬ...((('}}</p>
        <BtnMore type="movie" :id="movie.id"/>
    </div>
    <div class="main-upcoming-item-next" @click="$emit('slideNext')">
        <img v-lazy="imgMini + nextSlide.backdrop_path" alt="">
        <div>
            <span>Следующий</span>
            <h2>{{nextSlide.title}}</h2>
        </div>
    </div>
    <div class="main-upcoming-item-prev" @click="$emit('slidePrev')">
        <img v-lazy="imgMini + prevSlide.backdrop_path" alt="">
        <div>
            <span>Предыдущий</span>
            <h2>{{prevSlide.title}}</h2>
        </div>
    </div>
    <div class="main-upcoming-item-line"></div>
</div>
</Transition>
</template>

<script setup>
    import { imgFull, imgMini } from "@/url";
    const props = defineProps({
        movie: Object,
        idx: Number,
        slideView: Number,
        nextSlide: Object,
        prevSlide: Object,
    })
</script>