import { defineConfig } from 'vite'

export default defineConfig(() => {
  const outDir = process.env.GITHUB_ACTIONS ? 'dist' : `dist/portfolio`;

  return {
    base: '/portfolio/',
    build: { outDir },
  }
})