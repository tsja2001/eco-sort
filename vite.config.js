import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // 打包输出到 'docs' 文件夹
    assetsDir: './', // 设置资源文件路径，以便GitHub Pages可以正确访问
    rollupOptions: {
      output: {
        manualChunks: undefined, // 不分割代码，生成一个单独的js文件
      },
    },
    emptyOutDir: true, // 构建前清空输出目录
  },
  base: '/', // 设置你的GitHub仓库名称，注意需要前后都有 '/'
  server: {
    port: 3000,
    host: "0.0.0.0"
  }
})
