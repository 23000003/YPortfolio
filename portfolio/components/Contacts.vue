<script setup lang="ts" type="module">
import { ref, onMounted } from 'vue';

const props = defineProps({Click : Function, isClick: Boolean});
const contactRef = ref(null);
const isVisible = ref(false);

const isContactHead = ref(false);
const isAllContacts = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry], observer) => {

        if (entry.isIntersecting) {

            console.log('Visible');
            console.log(entry.isIntersecting);

            setTimeout(() => {
                isVisible.value = true;
            }, 1500);

        }
    },
    {
        threshold: 0.05, //value on how much of the element should be visible before the callback is called
    }
    );
    // Observe the element
    if (contactRef.value) {
        observer.observe(contactRef.value);
    }
});

console.log(props.isClick);

</script>

<template>
    <div
        ref="contactRef"
        :class="['Contact-container', { visible: isVisible, clicked: props.isClick}]"
    >
        <div class="contact-label" @click="props.Click">
            <div :class="['c-label', { active: isContactHead }]">
                <span>Contacts</span>
                <span class="horiz"></span>
            </div>
        </div>
        <div :class="['All-contacts', { active: isAllContacts }]">
            <a 
                href="https://github.com/23000003" 
                class="contact-ref"
                target="_blank"
            >
                <div class="contact-icon">
                    <img src="https://img.icons8.com/?size=100&id=RHLuYrY4GjUv&format=png&color=FF5708" alt="">
                </div>
                <div class="contact-service">
                    <span>Github</span>
                    <span>23000003</span>
                </div>
                <div class="contact-horiz">
                    <span></span>
                </div>
            </a>
            <a 
                href="https://www.linkedin.com/in/kentward-maratas-587516302/" 
                class="contact-ref"
                target="_blank"
            >
                <div class="contact-icon">
                    <img src="https://img.icons8.com/?size=100&id=EA2txzpRmzqo&format=png&color=FF5708" alt="">
                </div>
                <div class="contact-service">
                    <span>Linked In</span>
                    <span>Kentward Maratas</span>
                </div>
                <div class="contact-horiz">
                    <span></span>
                </div>
            </a>
            <div class="contact-ref">
                <div class="contact-icon">
                    <img src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FF5708" alt="">
                </div>
                <div class="contact-service">
                    <span>Gmail</span>
                    <span>kwmaratas@gmail.com</span>
                </div>
                <div class="contact-horiz">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .Contact-container{
        display: flex;
        flex-direction: column;
        width: fit-content;
        position: fixed;
        bottom: 0;
        right: 50px;
        border-radius: 1em;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.212);
        z-index: 100;
        background-color: #FDFBF9;
        transition-duration: 500ms;
        transform: translateY(234px);
        cursor: pointer;
        animation: contactFadeUp 0.5s backwards;
        opacity: 0;
    }

    .Contact-container.visible{
        transition-duration: 500ms;
        opacity: 1;
        transform: translateY(214px);
    }

    @keyframes contactFadeUp{
        0% {
            transform: translateY(234px);
        }
        100% {
            transform: translateY(214px);
        }
    }

    .Contact-container:hover{
        transition-duration: 500ms;
        transform: translateY(210px);
    }

    .Contact-container.clicked{
        transition-duration: 500ms;
        transform: translateY(0);
    }

    .All-contacts{
        display: flex;
        flex-direction: column;
        gap: 35px;
        padding: 30px;
        opacity: 1;
        
    }

    .About-Me{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .c-label{
        font-size: 1.3em;
        text-align: center;
        padding-top: 10px;
    }


    .horiz {
        width: 100% !important;
        height: 1px;
        background-color: #47280b;
    }


    .info{
        margin-top: 20px;
    }

    .contact-ref{
        display: flex;
        align-items: center;
        width: fit-content;
        cursor: pointer;
        transition-duration: 200ms;
        transform: scale(1);
    }

    .contact-ref:hover{
        transition-duration: 200ms;
        transform: scale(1.05);
    }

    .contact-icon{
        width: 50px;
    }

    .contact-icon img{
        width: 33px;
    }

    .contact-service{
        width: 160px;
        display: flex;
        flex-direction: column;
    }
    .contact-service span:first-child{
        color: #FF5708;
        font-size: 17px;
    }

    .contact-service span:last-child{
        font-size: 12px;
        color: #df9674;
    }

    /* .contact-horiz span{
        display: flex;
        width: 150px;
        height: 3px;
        background-color: #FF5708;
    } */
    
</style>