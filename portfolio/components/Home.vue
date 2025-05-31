<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Contacts from './Contacts.vue';

const isVerticalActive = ref(false);
const isLogoActive = ref(false);
const isLogoActive1 = ref(false);
const isClicked = ref(false);

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

function Click(){
    isClicked.value = !isClicked.value;
    console.log(isClicked.value);
}

</script>

<template>
    <div class="home-container">
        <div class="intro">
            <div class="intro-label">
                <div class="intro-main-text">
                    <span class="shadow-text">Hello there, my<br/>name is <b>Kentward</b></span>
                    <span class="shadow-text">Hello there, my<br/>name is Kentward</span>
                    <span class="sub-text">A passionate software engineer.</span>
                </div>
                <div class="contact-info">
                    <a href="" class="buttonH" target="_blank">
                        <span class="buttonH-bg"></span>
                        <span class="buttonH-label">My Resume</span>
                    </a>
                    <img src="/Rect1.png" alt="Pipe" class="pipe">
                    <div class="buttonH" target="_blank" @click="Click">
                        <span class="buttonH-bg"></span>
                        <span class="buttonH-label">Contacts</span>
                    </div>
                    <!-- <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FF5708" alt="linkedin" class="icon"> -->
                    <!-- <a href="https://github.com/23000003" target="_blank">
                        <img 
                            class="social-icons" 
                            src="https://img.icons8.com/?size=100&id=RHLuYrY4GjUv&format=png&color=384C9C" 
                            alt="github"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/kentward-maratas-587516302/" target="_blank">
                        <img 
                            class="social-icons" 
                            src="https://img.icons8.com/?size=100&id=8808&format=png&color=384C9C" 
                            alt="linkedin"
                            style="width: 28px; height: 28px;"
                        />
                    </a> -->
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
    <div :class="['vertical-container mt', { 'active': isVerticalActive }]">
        <div class="vertical-holder remove">
            <span>SCROLL</span>
            <div class="vertical"></div>
        </div>
        <div class="vertical-holder">
            <span>SCROLL</span>
            <div class="vertical1"></div>
        </div>
    </div>

    <Contacts :Click ="Click" :isClick = "isClicked"/>

</template>

<style scoped>

    .home-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 60svh;
        padding-top: 80px;
    }

    .intro-main-text{
        display: flex; 
        flex-direction: column;
        gap: 20px;
    }

    .shadow-text {
        font-size: 4.0em;
        animation: fadeInUp 0.5s backwards;
        font-weight: 400;
        /* color: #0F1B61; */
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
        color: #f5b16318;
    }

    .shadow-text::after{
        content: ".";
    }

    .shadow-text:nth-child(1)::after{
        font-weight: bold;
        color: #FF5708;
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

    .intro {
        display: flex;
        flex-direction: row;
        width: 60%;
    }

    .logo {
        display: none;
    }

    .logo.active {
        display: flex;
        align-items: center;
        max-width: 100%;
        width: 40%;
        z-index: 1;
        flex-direction: column;
    }

    .vertical-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 75px;
        opacity: 0;
    }

    .vertical-container.active {
        opacity: 1;
        transform: translateY(0);
        animation: popUp 0.5s backwards 0.5s;
        width: 100%;
    }

    .square, .square1 {
        width: 219px;
        height: 182px;
        background: linear-gradient(to left, #E78A5F 0%, #FFDAA5 100%);
    }

    .shadow-square, .shadow-square1 {
        width: 219px;
        height: 182px;
        background: linear-gradient(to left, #e78a5f41 0%, #ffd9a54f 100%);
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

    .buttonH {
        display: inline-block;
        position: relative;
        padding: 5px 15px;
        border: 1px solid #47280B;
        cursor: pointer;
        font-size: 12px;
    }

    .buttonH-bg {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-image: url('/stripes.svg');
        background-size: 11px;
        opacity: 0.3;
        z-index: -1;
        transition: all 0.6s ease;
        filter: hue-rotate(180deg) saturate(5); 
    }
    
    .buttonH .buttonH-bg {
        transition: all 0.6s ease;
    }

    .buttonH:hover{
        border: 1px solid #FF5708;
    }

    .buttonH:hover .buttonH-label{
        color: #FF5708;
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
