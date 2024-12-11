<script setup lang="ts">
import techstack from './data/techstack';
import { ref, onMounted } from 'vue';

const aboutMeRef = ref(null);
const isVisible = ref(false);

const isAboutMeHead = ref(false);
const isInfo = ref(false);
const isProfile = ref(false);
const isVerticalScroll = ref(false);
const isShadowLine = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry], observer) => {

        if (entry.isIntersecting) {
            isVisible.value = true;

            console.log('Visible');
            console.log(entry.isIntersecting);

            setTimeout(() => {
                isAboutMeHead.value = true;
            }, 500);

            setTimeout(() => {
                isInfo.value = true;
                isProfile.value = true;
            }, 700);

            setTimeout(() => {
                isVerticalScroll.value = true;
            }, 1200);

            setTimeout(() =>{
                isShadowLine.value = true;
            },3000)

        }
    },
    {
        threshold: 0.15, //value on how much of the element should be visible before the callback is called
    }
    );
    // Observe the element
    if (aboutMeRef.value) {
        observer.observe(aboutMeRef.value);
    }
});
</script>

<template>
    <div
        ref="aboutMeRef"
        :class="['About-me-container', { visible: isVisible }]"
    >
        <div class="About-Me">
            <div :class="['label', { active: isAboutMeHead }]">
                <span :class ="['about-label', { active: isAboutMeHead}]">About Me. <p>#</p></span>
                <span class="label"></span>
            </div>
                <div :class="['info', {active: isInfo}]">
                    <span>
                        Hello! I’m Kentward M. Maratas, and I’m currently studying Information Technology at
                        the University of San Carlos. I began my development career after several months of
                        exploring web development. I am currently interested in Full-Stack development and am
                        forcing myself to like and dive deeper into Data Science to enhance my analytical skills,
                        and I'm only good in things that interest me.
                    </span>
                </div>

            <!-- Tech Stack Section with Infinite Scroll Animation -->
            <div :class="['Tech-Stack', {active: isInfo}]">
                <div class="tech-wrapper">
                    <div v-for="(tech, index) in techstack" :key="index" class="holder">
                        <div class="box-shadow"></div>
                        <div class="box">
                            <img :src="tech.icon" :alt="tech.name" class="icon" />
                        </div>
                    </div>
                    </div>
                <div class="tech-wrapper">
                    <div v-for="(tech, index) in techstack" :key="'second-' + index" class="holder">
                        <div class="box-shadow"></div>
                        <div class="box">
                            <img :src="tech.icon" :alt="tech.name" class="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Profile-Image">
            <img src="/Profile.png" alt="Profile Picture" :class="['Profile', { active: isProfile }]"/>
            <div :class="['shadow-line', { active: isProfile, done: isShadowLine}]"></div>
            <div :class="['shadow-line', { active: isProfile, done: isShadowLine}]" style="margin-left: 30px;"></div>
            <div :class="['shadow-line', { active: isProfile, done: isShadowLine}]" style="margin-left: 60px;"></div>
            <div :class="['shadow-line', { active: isProfile, done: isShadowLine}]" style="margin-left: 90px;"></div>
            <div :class="['shadow-line', { active: isProfile, done: isShadowLine}]" style="margin-left: 120px;"></div>
        </div>
    </div>
    <div :class="['vertical-container', { active: isVerticalScroll }]" style="margin-top: 40px;">
        <div class="vertical-holder" style="visibility: hidden;">
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
    .About-me-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 150px;
    }

    .About-Me {
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .label {
        font-size: 3.5em;
        display: flex;
        flex-direction: column;
    }

    .label span:nth-child(2) {
        margin-top: 1%;
        width: 35%;
        height: 4px;
        background-color: #54c9a2;
        opacity: 0;
        transform: translateX(500px);
    }

    .label.active span:nth-child(2) {
        opacity: 1;
        transform: translateX(0);
        width: 15%;
        animation: slideIn 0.2s ease-out forwards;
    }

    .about-label{
        opacity: 0;
        display: flex;
    }

    .about-label p{
        margin: 0;
        margin-left: 10px;
        color: #94d8c1;
    }

    .about-label.active{
        opacity: 1;
        transform: translateY(0);
        animation: fadeInUp 0.5s backwards 0.3s;
    }

    .info, .Tech-Stack{
        opacity: 0;
    }

    .info.active, .Tech-Stack.active{
        opacity: 1;
        animation: fadeInUp 0.5s backwards 0.5s;
    }

    .shadow-line{
        opacity: 0;
    }
  
    .shadow-line.active{
        width: 53%;
        height: 4px;
        background: #acdae2;
        margin-top: 10px;
        opacity: 1;
        animation: fadeInUp 0.5s backwards 0.5s;
    }

    .shadow-line.done{
        animation: fadeInUp 1.5s backwards infinite;
    }

    
    .shadow-line.active:nth-child(2) {
        animation-delay: 0.75s;
    }

    .shadow-line.active:nth-child(3) {
        animation-delay: 0.8s;
    }

    .shadow-line.active:nth-child(4) {
        animation-delay: 0.85s;
    }

    .shadow-line.active:nth-child(5) {
        animation-delay: 0.9s;
    }

    .shadow-line.active:nth-child(6) {
        animation-delay: 0.95s;
    }

    .Profile{
        opacity: 0;
    }

    .Profile.active {
        opacity: 1;
        animation: fadeInUp 0.5s backwards 0.5s;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        0% {
            transform: translateX(500px);
            width: 35%;
        }
        20% {
            width: 30%;
        }
        40% {
            width: 25%;
        }
        60% {
            width: 20%;
        }
        100% {
            width: 15%;
            transform: translateX(0);
        }
    }

    .info {
        margin-top: 20px;
        line-height: 1.8;
    }

    .info span {
        font-weight: 400;
    }


    .Profile-Image {
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 100%;
        width: 50%;
        z-index: 1;
        justify-content: center;
        margin-top: -70px;
    }

    .Profile-Image img {
        max-width: 100%;
    }

    .box, .box-shadow {
        width: 54px;
        height: 57px;
        border: 1px solid #004aac;
        border-radius: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(255, 255, 255);
    }

    .box-shadow {
        position: absolute;
        z-index: -1;
        margin-top: -5px;
        margin-left: -5px;
    }

    .Tech-Stack {
        display: flex;
        flex-direction: row;
        gap: 40px;
        width: 100%;
        overflow: hidden;
        position: relative;
        
    }

    .tech-wrapper {
        display: flex;
        flex-direction: row;
        gap: 40px;
        animation: loopSlider 35s linear infinite;
        
    }

    .holder {
        margin-top: 30px;
    }

    .icon {
        width: 37px;
        height: 37px;
    }

    @keyframes loopSlider {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }


</style>
