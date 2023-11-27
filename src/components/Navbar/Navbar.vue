<template>
<nav class="nav">
    <div class="container">
        <RouterLink to="/"><img src="@/assets/images/logo.svg" alt=""></RouterLink>
        <button class="burger" @click="adapt = !adapt">
            <img src="@/assets/images/bars.svg" alt="">
        </button>
        <ul class="nav-list" :class="{active: adapt}" @click="adapt = !adapt">
            <li><RouterLink to="/">Главная</RouterLink></li>
            <li><RouterLink to="/movies">Фильмы</RouterLink></li>
            <li><RouterLink to="/tvs">Сериалы</RouterLink></li>
            <li><RouterLink to="/search"><i class="fa-solid fa-magnifying-glass"></i></RouterLink></li>
        </ul>
    </div>
</nav>
</template>

<script setup>
import { ref } from "vue";
let adapt = ref(false)
</script>
