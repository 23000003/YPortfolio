<script setup lang="ts">
import { ref, onMounted } from 'vue';
import projects from './data/projects';

const projectRef = ref(null);
const isVisible = ref(false);

const isProjectHead = ref(false);
const isVerticalScroll = ref(false);
const isProjects = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry], observer) => {
            // When the element enters the viewport, make it visible
        if (entry.isIntersecting) {
            isVisible.value = true;
            console.log('Visible 3');
            setTimeout(() => {
                isProjectHead.value = true;
            }, 100);

            setTimeout(() => {
                isVerticalScroll.value = true;
            }, 1500);

            setTimeout(() => {
                isProjects.value = true;
            }, 500);
        }
    },
    {
        threshold: 0.05, //value on how much of the element should be visible before the callback is called
    }
    );
    // Observe the element
    if (projectRef.value) {
        observer.observe(projectRef.value);
    }
});
</script>

<template>
    <div
        ref="projectRef"
        :class="['project-container', { visible: isVisible }]"
    >
        <div class="Project-Holder">
            <div :class="['label', { active: isProjectHead }]">
                <span :class ="['proj-type-label', { active: isProjectHead}]">Projects
                    <p>.</p>
                    <div class="proj-color-type">
                        <div class="experience-type">
                            <span></span>
                            <span>Experience</span>
                        </div>
                        <div class="school-type">
                            <span></span>
                            <span>School Project</span>
                        </div>
                        <div class="side-type">
                            <span></span>
                            <span>Side Project</span>
                        </div>
                    </div>
                </span>
            </div>
            <div :class="['horizontal', { active: isProjectHead }]"/>

            <div :class="['animation-proj', {active: isProjects}]"
                v-for="(proj, index) in projects" :key="index"
            >    
                <div class="Projects-Holder">
                    <div class="proj-image">
                        <img :src="proj['image-main']" :alt="proj.name" class="img-main"/>
                    </div>
                    <div class="proj-info">
                        <span class="proj-type proj-rem" :style="{
                            backgroundColor: proj.type === 1 ? '#eefc72' : 
                                            proj.type === 2 ? '#c6f2ff' : 
                                            proj.type === 3 ? '#eefc72' : 'transparent'
                        }">
                        </span>
                        <div class="proj-name-horiz">
                            <span class="proj-name">
                                {{ proj.name }}
                            </span>
                            <div class="view-image">
                                <img src="https://img.icons8.com/?size=100&id=30M9wv1iFkcH&format=png&color=FF5708" alt="">
                                <span>View Image</span>
                            </div>
                            <span class="horiz"></span>
                        </div>
                        <span class="proj-desc">
                            {{ proj.description }}
                        </span>
                        <div class="proj-link">
                            <div class="pl-sub">
                                <a :href="proj.link" class="button" target="_blank">
                                    <span class="button-bg"></span>
                                    <span class="button-label">Project Link</span>
                                </a>
                                <span class="built-with">Built with:
                                    <p>{{ proj['built-with'] }}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="['horizontal', { active: true }]"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .project-container {
        display: flex;
        flex-direction: row;
        margin-top: 100px;
    }

    .Project-Holder {
        display: flex;
        flex-direction: column;
    }

    .label {
        font-size: 3.5em;
        display: flex;
        flex-direction: column;
    }

    .proj-type-label{
        opacity: 0;
        display: flex;
        align-items: center;
    }

    .horizontal{
        width: 0%;
        height: 1px;
        margin-top: 20px;
        background: #47280b
    }

    .horizontal.active {
        animation: slideHorizontal 0.2s ease-out forwards 0.3s;
    }

    /* .horiz{
        display: flex;
        width: 8%;
        height: 2px;
        background-color: #FF5708;
        transition: width 0.5s ease;
    } */

    .proj-type-label p{
        margin: 0;
        margin-left: 4px;
        color: #FF5708;
        font-weight: 800;
    }

    .proj-type-label.active{
        opacity: 1;
        transform: translateY(0);
        animation: fadeInUp 0.5s backwards 0.7s;
    }

    .shadow-line{
        width: 20%;
        height: 4px;
        background: #becae9;
        position: absolute;
    }

    .Projects-Holder{
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 70px 0px 70px 0px;
    }

    .proj-image{
        width: 50%;
        display: flex;
        align-items: start;
    }

    .img-sub{
        margin: auto;
        position: absolute;
        margin-bottom: -50px;
        left: 0;
        max-width: 100%;
    }

    .proj-info{
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    .proj-name-horiz {
        display: inline-flex;
        position: relative;
    }

    .proj-name {
        font-size: 36px;
        font-weight: bold;
        position: relative;
        z-index: 1;
    }

    .proj-name::after{
        content: ".";
        margin-left: 3px;
        font-weight: 800px;
        color: #FF5708;
    }

    .horiz {
        display: inline-block;
        width: 5%;
        height: 2px;
        background-color: #FF5708;
        position: absolute;
        bottom: 0;
        transition: width 0.5s ease;
    }

    .proj-info:hover .horiz {
        width: 20%;
    }

    .view-image{
        display: none;
        align-items: center;
        cursor: pointer;
    }
    
    .view-image img{
        width: 30px;
        margin: 0px 8px 0px 14px;
        transition: all 0.6s ease;
    }

    .view-image:hover img{
        opacity: .6;
    }

    .view-image span{
        font-size: 12px;
        color: #FF5708;
        /* E78A5F;*/
    }

    .view-image:hover span{
        color: #E78A5F;
    }

    .proj-type{
        width: 12px;
        height: 12px;
        border-radius: 45px;
        background-color: #214192;
        border: 1px solid #47280B;
        position: absolute;
        margin-top: 15px;
        margin-left: -20px;
    }

    .proj-link {
        display: flex;
        flex-direction: row;
        height: 100px;
        align-items: end;
    }


    .button {
        display: inline-block;
        position: relative;
        padding: 10px 30px;
        border: 2px solid #47280B;
        cursor: pointer;
    }

    .button-bg {
        position: absolute;
        top: 10px;
        left: -10px;
        right: 10px;
        bottom: -10px;
        background-image: url('/stripes.svg');
        background-size: 11px;
        opacity: 0.3;
        z-index: -1;
        transition: all 0.6s ease;
        filter: hue-rotate(180deg) saturate(5); 
    }
    
    .button:hover .button-bg {
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }

    .button .button-bg {
        transition: all 0.6s ease;
    }

    .built-with{
        font-size: 12px;
        font-weight: 400;
        margin-left: 20px;
    }

    .button:hover{
        border: 2px solid #FF5708;
    }

    .button:hover .button-label{
        color: #FF5708;
    }

    .pl-sub{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .built-with{
        display: flex;
        flex-direction: row;
    }

    .built-with p{
        margin: 0;
        margin-left: 5px;
        font-weight: 600;
    }

    .proj-desc{
        margin-top: 20px;
        font-weight: 400;
        line-height: 1.8;
        font-size: 18px;
        text-align: justify;
    }

    .proj-image img{
        max-width: 100%;
    }

    .animation-proj{
        opacity: 0;
    }

    .animation-proj.active{
        animation: fadeInUp 0.5s backwards 0.7s;
        opacity: 1;
    }

    .proj-color-type{
        width: 381px;
        height: 43px;
        border: 1px solid #47280B;
        border-radius: 46px;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .proj-color-type span{
        color: #47280B;
    }

    .school-type, .side-type, .experience-type{
        display: flex;
        flex-direction: row;
        font-size: 12px;
        align-items: center;
        gap: 5px;
    }

    .school-type span:first-child, 
    .side-type span:first-child, 
    .experience-type span:first-child
    {
        width: 12px;
        height: 12px;
        border-radius: 45px;
        background-color: #214192;
        border: 1px solid #47280B;
    }

    .experience-type span:first-child{
        background-color: hwb(125 41% 8%)
    }

    .school-type span:first-child{
        background-color: #eefc72;
    }

    .side-type span:first-child{
        background-color: #c6f2ff;
    }

    @keyframes slideHorizontal {
        0% {
            width: 0%;
        }
        20% {
            width: 25%;
        }
        40% {
            width: 50%;
        }
        60% {
            width: 75%;
        }
        100% {
            width: 100%;
        }
    }


</style>
