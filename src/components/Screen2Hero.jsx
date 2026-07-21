import { useState } from 'react'
import { motion } from 'framer-motion'
import { assets, colors, animationConfig } from '../config/animations'
import Header from './shared/Header'
import MenuOverlay from './MenuOverlay'
import TypewriterText from './TypewriterText'

/**
 * Screen 2 - 英雄/落地页 (Hero/Landing)
 * 展示: 全图背景、头像排、大标题、CTA 按钮
 */
export default function Screen2Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor: colors.dark }}
    >
      {/* 全屏英雄背景图 */}
      <motion.div
        className="absolute top-0 left-0 right-0 overflow-hidden"
        style={{ height: 472 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: animationConfig.elements.heroFadeIn / 1000 }}
      >
        <img
          src={assets.heroImage}
          alt="Worship"
          className="w-full h-full object-cover"
        />
        {/* 暗色遮罩 15% */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }} />
      </motion.div>

      {/* 导航栏 */}
      <Header onMenuOpen={() => setMenuOpen(true)} />

      {/* 头像排 */}
      <motion.img
        src={assets.avatars}
        alt="Community avatars"
        className="absolute object-contain"
        style={{ left: 19, top: 442, width: 149, height: 53 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      {/* 大标题 */}
      <div
        className="absolute"
        style={{ left: 19, right: 19, top: 520 }}
      >
        <TypewriterText
          text="Take a step toward the light"
          charDelay={40}
          startDelay={400}
          showCursor={false}
          className="font-manrope font-light block"
          style={{
            fontSize: 52,
            lineHeight: '52px',
            letterSpacing: -2.5,
            color: colors.cream,
          }}
        />
      </div>

      {/* 副标题 */}
      <div
        className="absolute"
        style={{ left: 19, right: 19, top: 638 }}
      >
        <TypewriterText
          text="Discover faith, hope, and a home for your soul"
          charDelay={25}
          startDelay={800}
          showCursor={false}
          className="font-manrope font-normal block"
          style={{
            fontSize: 21,
            lineHeight: '27px',
            color: colors.textLight60,
          }}
        />
      </div>

      {/* 底部 CTA 按钮 — 避开 Home Indicator */}
      <motion.button
        className="absolute left-[19px] right-[19px] flex items-center justify-center gap-2 font-manrope font-medium rounded-full"
        style={{
          bottom: 'max(32px, calc(env(safe-area-inset-bottom, 0px) + 16px))',
          height: 52,
          backgroundColor: colors.cream,
          color: colors.dark,
          fontSize: 21,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Join us
        <img src={assets.arrow} alt="" className="w-5 h-5 object-contain" />
      </motion.button>

      {/* 菜单遮罩 */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}
