<template>
 <div class="media-info current-info" v-if="media">
    <div class="media-info-content current-info-content">
      <div class="media-info-content-block current-info-content-block">
        <h2>{{ media.title || media.name }}</h2>
        <p>{{ media.overview || "Неописуемый..." }}</p>
        <p class="media-info-content-block-descr current-info-content-block-descr">
          <span>{{ new Date(media.release_date || media.first_air_date).getFullYear() }}</span>
          <span>{{getGenres}}</span>
          <span>{{
                type == 'movie' ? `${Math.floor(media.runtime / 60)}h ${media.runtime % 60}m` :
                `${media.number_of_seasons}s ${media.number_of_episodes}e`
                }}
          </span>
        </p>
        <a :href="`https://www.youtube.com/watch/${trailer}`" target="_blank" v-if="trailer" class="btn-more">Смотерть трейлер</a> 
        <div class="actors-content">
          <span>В главных ролях</span>
          <Actors :actors="actors" />
        </div>
      </div>
      <img v-lazy="imgFull + media.backdrop_path" alt="" />
    </div>
    <img v-lazy="imgMini + media.poster_path" alt="" class="poster">
  </div>
  <div class="media-descr container" v-if="media">
    <ul class="media-descr-list">
      <li>
        <h3>Бюджет</h3>
        <p v-if="media.budget">{{"$" + media.budget}}$</p>
        <p v-else>Неизвестно</p>
      </li>
      <li>
        <h3>Сборы</h3>
        <p v-if="media.revenue">{{"$" + media.revenue}}$</p>
        <p v-else>Неизвестно</p>
      </li>
      <li>
        <h3>Статус</h3>
        <p>{{media.status || "Неизвестно"}}</p>
      </li>
      <li>
        <h3>Исходное название</h3>
        <p>{{media.original_titl || "Неизвестно"}}</p>
      </li>
    </ul>
  </div>
  <section class="rec container">
    <h2>Рекомендации</h2>
    <div class="rec-content">
      <RouterLink :to="'/movie/' + item.id" v-for="item in rec" :key="item.id" @click="changeMedia(item.id)">
        <img :src="imgMini + item.poster_path" alt="">
      </RouterLink>
    </div>
  </section>
</template>

<script setup>

const props = defineProps(['type'])
import { imgMini, imgFull } from "@/url";
import { ref, computed, onMounted } from 'vue';
import { useGetItemById } from '@/store/getItemById'
const getItemById = useGetItemById()
import { useActors } from '@/store/actors'
import { useRec } from "@/store/recommendations";
const actorsStore = useActors()
import { useTrailer } from '@/store/trailer'
const trailerStore = useTrailer()
const recStore = useRec()
let media = ref(null)
let actors = ref(null)
let trailer = ref(null)
let rec = ref(null)
import { useRoute } from "vue-router";
onMounted(async () => {
    await getItemById.getItemById({type: props.type, id: useRoute().params.id})
    media.value = props.type == 'movie' ? getItemById.movie : getItemById.tv 
    await actorsStore.getActors({type: props.type, id: media.value.id, count: 6})
    actors.value = props.type == 'movie' ? actorsStore.actorsMovie : actorsStore.actorsTv
    trailer.value = trailerStore.movieTrailer = trailerStore.tvTrailer = null
    await trailerStore.getTrailer({type: props.type, id: media.value.id})
    trailer.value = props.type == 'movie' ? trailerStore.movieTrailer : trailerStore.tvTrailer
    await recStore.getRec({type: props.type, id: media.value.id})
    rec.value = props.type == 'movie' ? recStore.recMovie : recStore.recTv
    
})
const getGenres = computed(() => media.value.genres.reduce((acc, item) => acc + `, ${item.name}`, ''))
const changeMedia = async (id) => {
    await getItemById.getItemById({type: props.type, id: id})
    // media.value = props.type == 'movie' ? getItemById.movie : getItemById.tv 
    window.location.reload()
}
</script>       