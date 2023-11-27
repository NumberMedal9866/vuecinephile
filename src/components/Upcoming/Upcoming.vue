<template>
<div class="main-upcoming" v-if="getUpcomingMovie">
    <UpcomingItem 
        v-for="(movie, idx) in useUpcoming().upcoming"
        :key="movie.id"
        :movie="movie"
        :idx="idx"
        :slideView="slideView"
        @slideNext="slideNext"
        @slidePrev="slidePrev"
        :nextSlide="getUpcomingMovie[idx + 1 == getUpcomingMovie.length  ? 0 : idx + 1]"
        :prevSlide="getUpcomingMovie[idx == 0 ? getUpcomingMovie.length - 1 : idx - 1]"
    />
</div>
<Loading v-else/>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import UpcomingItem from '@/components/Upcoming/UpcomingItem.vue';
import { useUpcoming } from "@/store/upcoming";
useUpcoming().getUpcoming()
let slideView = ref(0)
const getUpcomingMovie = computed(() => useUpcoming().upcoming)
let timeout = ref(null)
const slide = () => {
    if(getUpcomingMovie.value.length - 1 == slideView.value) slideView.value = 0
    else slideView.value++
    timeout = setTimeout(() => slideNext(), 10000)
}
const slideNext = () => {
    clearTimeout(timeout)
    slide()
}
const slidePrev = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => slide(), 10000)
    if(slideView.value > 0) slideView.value--
    else slideView.value = getUpcomingMovie.value.length - 1
}
onMounted(() => {
    timeout = setTimeout(() => slide(), 10000)
})
</script>
