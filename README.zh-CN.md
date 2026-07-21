# Christ Family Church 移动端展示项目

这是一个为 **Christ Family Church** 制作的移动端网页展示项目，使用 **React 18**、**Vite**、**Tailwind CSS** 和 **Framer Motion** 实现。

项目包含 3 个主要移动端页面：

- 见证页
- 首页 / Hero 页
- 讲道 / 活动页

页面之间支持**左右滑动切换**，整体视觉模拟真实 iPhone App 的浏览体验，并包含：

- 灵动岛
- Home Indicator
- 安全区适配
- 文本打字机动画
- 菜单淡入动效

## 技术栈

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Manrope 字体

## 功能特性

- 全屏 App 化展示体验
- 3 个页面左右滑动切换
- 顶部灵动岛与底部 Home Indicator
- iPhone 风格安全区适配
- 打字机文字动效
- 菜单遮罩层动画
- 桌面与移动端响应式适配

## 项目结构

```text
src/
  components/
    shared/
      CloseButton.jsx
      DynamicIsland.jsx
      HamburgerButton.jsx
      Header.jsx
    MenuOverlay.jsx
    PhoneFrame.jsx
    Screen1Testimonial.jsx
    Screen2Hero.jsx
    Screen3Sermons.jsx
    ShowcasePage.jsx
    TypewriterText.jsx
  config/
    animations.js
    safeArea.js
  App.jsx
  index.css
  main.jsx
```

## 本地运行

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

## 可调参数

可以在以下文件中调整动效和安全区参数：

- `src/config/animations.js`
- `src/config/safeArea.js`

主要可调内容包括：

- 打字速度
- 菜单淡入时间
- 页面回弹参数
- 灵动岛尺寸
- 顶部/底部安全区留白

## 设计说明

本项目使用 `framerusercontent.com` 提供的远程图片资源，整体风格为深色、温暖、偏教会主题的移动端视觉设计。

## English Documentation

英文说明请查看：

- `README.md`
