<script setup lang="ts">
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
  // Using an alias (if configured)
// import CurrentColor from '../../components/util/CurrentColorClass.ts';

// console.log(CurrentColor.colorInstance.getColor())

</script>

<template>
  <div class="body-bg">
    <div class="header">
      <div class="nav">
        <div class="Kenny">
          <img src="/Logo.png" alt="Logo">
          <img src="/Rect1.png" alt="Pipe" class="pipe">
          <a href="">Kenny.</a>
        </div>
        <div class="navlinks">
          <!-- <a href="/">About Me</a>
          <a href="/">Projects</a> -->
          <img src="/Rect1.png" alt="Pipe" class="pipe" >
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <main style="min-height: 100vh;">
      <Content />
      <small class="copyright">
        <span></span>
        2024 &copy; Kentward M. Maratas
      </small>
    </main>
  </div>
</template>