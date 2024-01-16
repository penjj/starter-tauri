import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import components from 'unplugin-vue-components/vite'
import router from 'unplugin-vue-router/vite'
import imports from 'unplugin-auto-import/vite'
import unocss from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy'
import tsconfig from 'vite-plugin-tsconfig-paths'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    components({
      dts: '.gen/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
    router({
      dts: '.gen/typed-router.d.ts',
    }),
    imports({
      dts: '.gen/imports.d.ts',
    }),
    unocss(),
    legacy(),
    tsconfig(),
  ],
  clearScreen: false,
  server: {
    port: 1420,
    // tauri 开发环境下严格依赖端口号对等
    strictPort: true,
  },
})
