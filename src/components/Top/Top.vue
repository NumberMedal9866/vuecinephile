<template>
  <section class="top">
    <h2 class="top-title">
      ТОП
      <span>10</span>
    </h2>
    <Swiper
      :navigation="true"
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      :spaceBetween="25"
      class="top-slider"
      
    >
      <SwiperSlide
        class="top-slider-item"
        v-for="(item, idx) in top.top"
        :key="item.id"
      >
        <RouterLink :to="`movie/${item.id}`" class="top-slider-item-content">
          <span>{{ idx + 1 }}</span>
          <img :src="imgMini + item.poster_path" alt="" />
        </RouterLink>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { imgMini } from "@/url";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper/modules";
import { ref, onMounted, computed } from "vue";
const modules = ref([Navigation]);
const swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1450: {
      slidesPerView: 3.5,
    },
  },
});
import { useTop } from "@/store/top";
const top = useTop()
top.getTop()
</script>
