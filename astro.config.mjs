// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    // 压缩HTML和CSS
    format: 'file',
  },
  // 预加载策略优化
  prefetch: true,
  // 图片优化配置
  image: {
    domains: ['cdn.dicebear.com', 'ui-avatars.com', 'avatars.githubusercontent.com'],
  },
  // 基础路径配置（用于GitHub Pages）
  base: process.env.GITHUB_ACTIONS ? '/AzureWynn.github.io/' : '/',
});