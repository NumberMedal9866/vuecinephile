<template>
    <section class="container search">
        <input type="text" placeholder="Найти фильм, сериал..." required autofocus @input="search(val)" v-model="val">
        <div class="search-content">
            <RouterLink :to="content.media_type == 'tv' ? `/tv/${item.id}` : `/movie/${item.id}`" v-for="item in content" :key="item.id">
                <img v-lazy="imgMini + item.poster_path" alt="">
            </RouterLink>
        </div>
        <div class="err">
            <h2 v-show="val != '' && content.length === 0">Nothing found ...</h2>
        </div>
        
    </section>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import { imgMini, imgFull } from "@/url";
    import { useSearch } from '@/store/search'
    let searchStore = useSearch()
    const val = ref('')
    const content = ref([])
    const search = async (val) => {
        await searchStore.getSearch(val)
        content.value = searchStore.content
    }
    
</script>

<style lang="scss" scoped>
    .search{
        input{
            padding: 20px;
            background: white;
            color: #000;
            width: 100%;
            border-radius: 10px;
            margin: 30px 0;
            font-family: Raleway;
            font-weight: 700;
            color: #141414;
            font-size: 18px;
            &::placeholder{
                color: #141414;
                font-size: 18px;
            }
        }
        &-content{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
            margin-bottom: 71px;
        }
        a{
            object-fit: cover;
            img{
                width: 311px;
                height: 462px;
                border-radius: 10px;
                border: 1px solid #000;
                box-shadow: 0px 4px 4px 0px #000;               
            }
        }
    }
    .err{
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 100px;
        color: white;
    }
</style>
