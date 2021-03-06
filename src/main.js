import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './routes'

const router = createRouter({
	routes,
	history: createWebHistory()
})

createApp(App).use(router).mount('#app')
