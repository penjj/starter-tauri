import type { RouterTyped } from 'vue-router/auto'
import { createRouter, createWebHashHistory } from 'vue-router/auto'

export const router = <RouterTyped>createRouter({
  history: createWebHashHistory(),
})
