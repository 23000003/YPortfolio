---
---

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import LandingAnim from './components/LandingAnim.vue';
    import Home from './components/Home.vue';
    import AboutMe from './components/AboutMe.vue';
    import Projects from './components/Projects.vue';
    
    // import CurrentColorClassModule from './components/util/CurrentColorClass.ts'
    // const CurrentColorClass = new CurrentColorClassModule(0);

    const showLandingAnim = ref(true);

    // const theme1 = 1;

    // if (theme1 === 0) {
    //     import('./components/1stcolortheme.css');
    // }


    onMounted(() => {
        window.location.replace("https://kentward.dcism.org/");
        // setTimeout(() => {
        //     showLandingAnim.value = false;
        // }, 1500);
    });
</script>

<LandingAnim v-if="showLandingAnim" />
<div v-else>
    <Home />
    <AboutMe />
    <Projects />
</div>


