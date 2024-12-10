---
---

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import LandingAnim from './components/LandingAnim.vue';
    import Home from './components/Home.vue';
    import AboutMe from './components/AboutMe.vue';
    import Projects from './components/Projects.vue';
    import Contacts from './components/Contacts.vue';
    import CurrentColorClassModule from './components/util/CurrentColorClass.ts'

    const showLandingAnim = ref(true);

    const CurrentColorClass = new CurrentColorClassModule(0);

    onMounted(() => {
        setTimeout(() => {
            showLandingAnim.value = false;
        }, 2000);
    });
</script>

<LandingAnim v-if="showLandingAnim" />
<div v-else>
    <Home />
    <AboutMe />
    <Projects />
    <Contacts />
</div>


