<template>
  <div class="media-info" :class="{ active: active }">
    <img
      src="@/assets/images/close.svg"
      alt=""
      class="media-info-close"
      @click="$emit('close')"
    />
    <div class="media-info-content" v-if="media">
      <div class="media-info-content-block">
        <h2>{{ media.title || media.name }}</h2>
        <p  maxlength="999">{{ media.overview || "Неописуемый..." }}</p>
        <p class="media-info-content-block-descr">
          <span>{{ new Date(media.release_date || media.first_air_date).getFullYear() }}</span>
          <span>{{getGenres}}</span>
          <span>{{
                type == 'movie' ? `${Math.floor(media.runtime / 60)}h ${media.runtime % 60}m` :
                `${media.number_of_seasons}s ${media.number_of_episodes}e`
                }}
          </span>
        </p>
        <Actors :actors="getActors" />
        <BtnMore :type="type" :id="media.id" />
      </div>
      <img v-lazy="imgFull + media.backdrop_path" alt="" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { imgFull } from "@/url";
const props = defineProps(["active", "media", "type"]);
const getGenres = computed(() => props.media.genres.reduce((acc, item) => acc + `, ${item.name}`, ''))
import { useActors } from '@/store/actors'
const actorsStore = useActors()
const getActors = computed(() => props.type == 'movie' ? actorsStore.actorsMovie : actorsStore.actorsTv)
</script>