# Netlify 部署指南

1. 登录 Netlify
   - 访问 https://app.netlify.com/
   - 使用 GitHub 账号登录

2. 创建新站点
   - 点击 "Add new site"
   - 选择 "Import an existing project"
   - 选择 "Deploy with GitHub"

3. 选择仓库
   - 选择 GitHub 仓库 `ai-blog`
   - 授权 Netlify 访问仓库

4. 配置构建设置
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

5. 环境变量设置（如果需要）
   - 点击 "Site settings"
   - 选择 "Build & deploy"
   - 在 "Environment variables" 添加必要的环境变量

6. 部署
   - 点击 "Deploy site"
   - 等待构建和部署完成

7. 自定义域名（可选）
   - 点击 "Domain settings"
   - 选择 "Add custom domain"
   - 按照提示配置 DNS 记录 