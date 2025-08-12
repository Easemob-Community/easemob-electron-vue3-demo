import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'], // 已配置
      alias: {
        '@': resolve('src/renderer/src'), // 添加@别名
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [vue()]
  }
})
