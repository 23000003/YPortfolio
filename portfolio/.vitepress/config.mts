import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kenny | Portfolio",
  description: "My personal portfolio",
  head: [
    ['link', { rel: 'icon', href: '/Logo.png' }],
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.startsWith('Tres') && tag !== 'TresCanvas',
      },
    }
  },
})
