<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';

onMounted(() => {
    document.body.style.overflowY = 'scroll';    
    setTimeout(() => {
        const loadScreen = document.querySelector('.Load-Screen') as HTMLElement;
        loadScreen.style.transition = 'transform 0.5s ease';
        loadScreen.style.transform = 'translateY(100%)';
    }, 1100);

});

</script>

<template>
    <div class="Load-Screen">
        <div class="loading-dots"></div>
        <div class="loading-dots"></div>
    </div>
</template>

<style scoped>
    .Load-Screen {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #b5dcec;
        top: 0;
        left: 0;
        z-index: 1000;
    }
    
    .loading-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .loading-dots::before,
    .loading-dots::after,
    .loading-dots div {
        content: '';
        width: 10px;
        height: 10px;
        margin: 0 5px;
        background-color: #ffffff;
        border-radius: 50%;
        animation: loading-dots 1s infinite;
    }

    .loading-dots::before {
        animation-delay: 0s;
    }

    .loading-dots div {
        animation-delay: 0.2s;
    }

    .loading-dots div:nth-child(2) {
        animation-delay: 0.4s;
    }

    .loading-dots div:nth-child(3) {
        animation-delay: 0.6s;
    }

    .loading-dots::after {
        animation-delay: 0.8s;
    }

    @keyframes loading-dots {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }
</style>
