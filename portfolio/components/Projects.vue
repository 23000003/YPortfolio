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
                <span :class ="['about-label', { active: isProjectHead}]">Projects. 
                    <p>#</p>
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
                        <span class="proj-type" :style="{
                            backgroundColor: proj.type === 1 ? '#D6B3FC' : 
                                            proj.type === 2 ? '#B4B1FF' : 
                                            proj.type === 3 ? '#443DAB' : 'transparent'
                        }">
                        </span>
                        <span class="proj-name">
                            {{ proj.name }}
                        </span>
                        <span class="horiz"></span>
                        <span class="proj-desc">
                            {{ proj.description }}
                        </span>
                        <div class="proj-link">
                            <div class="pl-sub">
                                <a :href="proj.link" class="button">
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
    <div :class="['vertical-container', { active: isVerticalScroll }]" style="margin-top: 40px;">
        <div class="vertical-holder">
            <span style="margin-top: 70px;">SCROLL</span>
            <div class="vertical"></div>
        </div>
        <div class="stripes-bg">
            <div></div>
        </div>
    </div>
</template>

<style scoped>
    .project-container {
        display: flex;
        flex-direction: row;
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

    .about-label{
        opacity: 0;
        display: flex;
        align-items: center;
    }

    .horizontal{
        width: 0%;
        height: 2px;
        margin-top: 20px;
        background-color: #B7A2CE;
    }

    .horizontal.active {
        animation: slideHorizontal 0.2s ease-out forwards 0.3s;
    }

    .horiz{
        width: 15%;
        height: 4px;
        background-color: #54c9a2;
    }

    .about-label p{
        margin: 0;
        margin-left: 10px;
        color: #94d8c1;
    }

    .about-label.active{
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
        align-items: end;
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

    .proj-name{
        font-size: 36px;
        font-weight: bold;
    }

    .proj-type{
        width: 12px;
        height: 12px;
        border-radius: 45px;
        background-color: #214192;
        border: 1px solid #001465;
        position: absolute;
        margin-top: 15px;
        margin-left: -24px;
    }

    .proj-link {
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: end;
    }


    .button {
        display: inline-block;
        position: relative;
        padding: 10px 30px;
        border: 2px solid #214192;
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
        opacity: 0.6;
        z-index: -1;
        transition: all 0.6s ease;
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
        border: 2px solid #bc8fec;
    }

    .button:hover .button-label{
        color: #bc8fec;
    }

    .proj-name p{
        font-size: 40px;
        margin-left: 5px;
        color:#04cf8c;
        position: absolute;
        margin: auto;
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
        border: 1px solid #443DAB;
        border-radius: 46px;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
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
        border: 1px solid #001465;
    }

    .experience-type span:first-child{
        background-color: #443DAB;
    }

    .school-type span:first-child{
        background-color: #D6B3FC;
    }

    .side-type span:first-child{
        background-color: #B4B1FF;
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

    @keyframes loopSlider {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }


</style>
