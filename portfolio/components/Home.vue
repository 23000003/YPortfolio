<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVerticalActive = ref(false);
const isLogoActive = ref(false);
const isLogoActive1 = ref(false);

onMounted(() => {
    

    setTimeout(() => {
        isVerticalActive.value = true;
    }, 900);

    setTimeout(() => {
        isLogoActive.value = true;
    }, 1000);

    setTimeout(() => {
        isLogoActive1.value = true;
    }, 2500);

    setTimeout(() =>{
        document.body.style.overflow = 'auto';
    }, 3000);

});
</script>

<template>
    <div class="home-container">
        <div class="intro">
            <div class="intro-label">
                <span class="shadow-text">"Knowledge has no finish line;"</span>
                <span class="shadow-text">"Knowledge has no <br/>finish line;"</span>
                <span class="sub-text">I'm Kentward M. Maratas, A passionate full-stack developer.</span>
                <div class="contact-info">
                    <button>Download Resume</button>
                    <img src="/Rect1.png" alt="Pipe" class="pipe">
                    <img class="social-icons" src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" alt="github">
                    <img class="social-icons" src="https://img.icons8.com/?size=100&id=44019&format=png&color=000000" alt="linkedin">
                </div>
            </div>  
        </div>
        <div :class="['logo', { 'active': isLogoActive }]">
            <div class="logo-bg"></div>
            <div :class="['square', { 'active': isLogoActive1 }]"></div>
            <div :class="['square1', { 'active': isLogoActive1 }]"></div>
            <div :class="['shadow-square', { 'active': isLogoActive1 }]"></div>
            <div :class="['shadow-square1', { 'active': isLogoActive1 }]"></div>
        </div>
    </div>
    <div class="bg-japan">
        <img src="/BgJapanese.png" alt=""/>
    </div>
    <div :class="['vertical-container', { 'active': isVerticalActive }]">
        <div class="vertical-holder">
            <span style="margin-top: 70px;">SCROLL</span>
            <div class="vertical"></div>
        </div>
        <div class="vertical-holder">
            <span>SCROLL</span>
            <div class="vertical1"></div>
        </div>
        <div class="stripes-bg">
            <div></div>
        </div>
    </div>
</template>

<style scoped>

    
    .intro {
        display: flex;
        flex-direction: row;
        width: 50%;
    }

    .home-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 80svh;
    }

    .bg-japan img {
        position: fixed;
        bottom: 0;
        right: 50px;
        animation: fadeInUp 0.5s backwards 1.5s;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
    }

    .bg-japan img:hover {
        transform: scale(1.05);
        animation-duration: 200ms;
    }

    .shadow-text {
        font-size: 3.5em;
        font-weight: bold;
        animation: fadeInUp 0.5s backwards;
    }

    .sub-text {
        font-weight: 500;
        animation: fadeInUp 0.5s backwards 0.5s;
    }

    .shadow-text:nth-child(2) {
        position: absolute;
        margin-left: -15px;
        margin-top: 12px;
        z-index: -1;
        color: #d0aadb34;
    }

    .intro-label span:nth-child(2) {
        letter-spacing: 1px;
    }

    .intro-label {
        display: flex;
        flex-direction: column;
        margin-top: -50px;
        gap: 20px;
    }

    .contact-info{
        animation: fadeInUp 0.5s backwards 1.5s;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .logo {
        display: none;
    }

    .logo.active {
        display: flex;
        align-items: center;
        max-width: 100%;
        width: 50%;
        z-index: 1;
        flex-direction: column;
    }

    .square, .square1 {
        width: 169px;
        height: 142px;
        background: linear-gradient(to left, #B7A2CE 0%, #A0C2FF 100%);
    }

    .shadow-square, .shadow-square1 {
        width: 169px;
        height: 142px;
        background: linear-gradient(to left, #b7a2ce31 0%, #a0c1ff48 100%);
        position: absolute;
        z-index: -1;
        margin-right: 230px;
    }

    .square, .shadow-square {
        margin-left: -180px;
    }

    .square1, .shadow-square1 {
        margin-left: 100px;
        margin-top: -30px;
    }

    .shadow-square1 {
        margin-top: 20px;
    }

    .shadow-square {
        margin-left: 390px;
        margin-top: 130px;
    }

    .shadow-square1, .square1 {
        animation: shapeAnim 1s backwards;
    }

    .shadow-square, .square {
        animation: shapeAnim1 1s backwards;
    }

    .square.active{
        animation: floatAround 2s infinite alternate;
    }

    .square1.active {
        animation: floatAround 3s infinite alternate;
    }

    .shadow-square1.active {
        animation: floatAround1 3s infinite alternate;
    }

    .shadow-square.active{
        animation: floatAround1 2s infinite alternate;
    }


    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(15px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes popUp {
        from {
            opacity: 0;
            transform: translateY(100px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes shapeAnim1 {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes shapeAnim {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

</style>
