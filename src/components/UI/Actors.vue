<template>
<div class="actors" v-if="actors">
    <div class="actors-item" v-for="actor in actors" :key="actor.id">
        <img v-lazy="imgMini + actor.profile_path" alt="">
        <span>{{actor.name}}</span>
    </div>
</div>
</template>
<script setup>
import { imgMini } from "@/url";
const props = defineProps(['actors'])

</script>
<style lang="scss" scoped>
.actors{
    display: flex;
    flex-wrap: wrap;
    max-width:500px;
    width: 100%;
    gap: 15px;
    margin-top: 30px;
    &-item{
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 25px;
        border: 1px solid #FFF;
        padding: 2px 5px 2px 2px;
        span{
            font-size: 16px;
            font-weight: 400;
            color: white;
            margin-left: 0;
            @media (max-width: 550px) {
                font-size: 10px;
            }
        }
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            @media (max-width: 550px) {
                width: 25px;
                height: 25px;
            }
        }
    }
}
</style>