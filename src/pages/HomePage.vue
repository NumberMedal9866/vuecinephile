<template>
<main class="main">
    <Upcoming />
    <Movies />
    <Tvs />
    <Top />
</main>
</template>

<script setup>
import Upcoming from "@/components/Upcoming/Upcoming.vue";
import Movies from "@/components/TAM/Movies.vue";
import Tvs from "@/components/TAM/Tvs.vue";
import Top from "@/components/Top/Top.vue";
</script>
