/**
 * 全局动画参数配置
 * 所有动效参数均可在此调节
 */
export const animationConfig = {
  /** iPhone 框架淡入 */
  phoneFrame: {
    duration: 600, // ms
    delay: 0, // 每个框架递增延迟基数
    delayStep: 150, // 每个框架之间的延迟增量
  },

  /** 打字机效果 */
  typewriter: {
    charDelay: 35, // 每个字符间隔 (ms)
    startDelay: 400, // 开始前的延迟 (ms)
    cursorBlink: true, // 是否显示光标
    cursorChar: '|',
  },

  /** 菜单遮罩 */
  menu: {
    fadeInDuration: 200, // ms
    fadeOutDuration: 150, // ms
    linkStagger: 60, // 链接依次出现间隔 (ms)
    linkDelay: 100, // 链接开始延迟 (ms)
  },

  /** 页面元素 */
  elements: {
    cardSlideUp: 500,
    heroFadeIn: 800,
    playButtonScale: 400,
  },
}

/** 资源 URL */
export const assets = {
  portrait: 'https://framerusercontent.com/images/7nIpqB1Y0QYgLe70j5NmdtK5Rk.png',
  logo: 'https://framerusercontent.com/images/Fr3jIzrNgNkSo8ZgFFTkpS308.png',
  quoteIcon: 'https://framerusercontent.com/images/DmIPflrtvNHr7mnr6k3K5Ayn8w.png',
  starIcon: 'https://framerusercontent.com/images/yi0dRg7NDCZUtTbPxCa115nMU5M.png',
  heroImage: 'https://framerusercontent.com/images/G9ZdWZubRnpc37d5d7uUzqaBqiw.png',
  avatars: 'https://framerusercontent.com/images/l3LBaTwnoXLWZd6axR7m3Q9iWeU.png',
  arrow: 'https://framerusercontent.com/images/zBmfi9e2hdwkTHpcMqbS61FIc3c.png',
  preacherHero: 'https://framerusercontent.com/images/Q7jLZsObox26xQCiWPAVYWzTsYs.png',
  playButton: 'https://framerusercontent.com/images/3M0CPgfOsuyRxuRs37KkTOTrUM.png',
}

/** 颜色常量 */
export const colors = {
  showcaseBg: '#5A4C41',
  dark: 'rgb(29, 25, 26)',
  cream: '#F1E5C6',
  white: '#FFFFFF',
  offWhite: '#F5F0E8',
  textLight77: 'rgba(255, 255, 255, 0.77)',
  textLight60: 'rgba(255, 255, 255, 0.6)',
  textLight50: 'rgba(255, 255, 255, 0.5)',
  textLight30: 'rgba(255, 255, 255, 0.3)',
  frameBorder: '#2a2a2a',
  eventTitle: '#1a1a1a',
  eventDate: '#888888',
  eventTime: '#999999',
}

/** 手机框架尺寸 */
export const phoneFrame = {
  width: 375,
  height: 812,
  borderRadius: 50,
  borderWidth: 2,
  islandWidth: 126,
  islandHeight: 36,
  islandRadius: 18,
  homeIndicatorWidth: 134,
  homeIndicatorHeight: 5,
  shadow: {
    color: '#000',
    offsetX: 0,
    offsetY: 12,
    opacity: 0.3,
    radius: 24,
  },
}

/** 展示页布局 */
export const layout = {
  desktop: {
    padding: 40,
    gap: 48,
    breakpoint: 900,
  },
  mobile: {
    padding: 20,
    gap: 32,
  },
}
