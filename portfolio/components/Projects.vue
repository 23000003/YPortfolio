<script setup lang="ts">
import techstack from './util/techstack';
import { ref, onMounted } from 'vue';

// Reference to the "About Me" section
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
            }, 500);

            setTimeout(() => {
                isVerticalScroll.value = true;
            }, 1500);

            setTimeout(() => {
                isProjects.value = true;
            }, 900);
        }
    },
    {
        threshold: 0.3, //value on how much of the element should be visible before the callback is called
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
                    <div>+</div>
                </span>
            </div>
            <div :class="['horizontal', { active: isProjectHead }]"/>

            <div :class="['animation-proj', {active: isProjects}]">
                <div class="Projects-Holder">
                    <div class="proj-image">
                        <img src="/BookTrackMain.png" alt="project-image" class="img-main">
                        <img src="/BookTrackSub.png" alt="project-image" class="img-sub">
                    </div>
                    <div class="proj-info">
                        <span class="proj-type"></span>
                        <span class="proj-name">
                            BookTrack
                        </span>
                        <span class="horiz"></span>
                        <span class="proj-desc">
                            A web application that allows users to track their reading progress and discover new books.
                        </span>
                        <div class="proj-link">
                            <div class="pl-sub">
                                <a href="">Project Link</a>
                                <span class="built-with">Built with:
                                    <p>ReactJS, NodeJS, Supabase</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="['horizontal', { active: true }]"/>
            </div>
        </div>
    </div>
    <div :class="['vertical-container', { active: isVerticalScroll }]">
        <div class="vertical-holder">
            <span style="margin-top: 70px;">SCROLL</span>
            <div class="vertical"></div>
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
    }

    .horizontal{
        width: 0%;
        height: 2px;
        margin-top: 20px;
        background-color: #B7A2CE;
    }

    .horizontal.active {
        animation: slideHorizontal 0.5s ease-out forwards 0.3s;
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

    .Projects-Holder{
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 70px 0px 70px 0px;
    }

    .proj-image{
        width: 50%;
        display: flex;
        justify-content: center;
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

    .proj-link {
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: end;
    }

    .proj-link a{
        padding: 10px 30px;
        border: 2px solid #214192;
    }

    .proj-link span{
        font-size: 12px;
        font-weight: 400;
        margin-left: 20px;
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

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(10px);
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

    .vertical-container {
        opacity: 0;
    }

    .vertical-container.active {
        opacity: 1;
        display: flex;
        flex-direction: row;
        width: 35%;
        margin-top: 40px;
        gap: 75px;
        animation: popUp 0.5s ease-out backwards
    }

    .vertical-holder {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
    }

    .vertical-holder span {
        font-size: 10px;
        font-weight: 500;
        margin-bottom: 10px;
        letter-spacing: 2px;
        color: #96AADE;
    }


    .vertical-holder:hover{
        transform: scale(1.05);
        animation-duration: 200ms;
    }

    .vertical, .vertical1 {
        width: 3px;
        height: 40vh;
        background: linear-gradient(to bottom, #B7A2CE 0%, #A0C2FF 100%);
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

    @keyframes loopSlider {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }


</style>
