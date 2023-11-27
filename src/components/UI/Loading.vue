<template>
    <div class="loading">
        <div class="loading-el"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .loading{
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &-el{
            width: 60px;
            height: 60px;
            box-shadow: 2px 2px 2px green;
            border-radius: 50%;
            animation: loading 2s infinite linear;
        }
    }
    @keyframes loading {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
</style>