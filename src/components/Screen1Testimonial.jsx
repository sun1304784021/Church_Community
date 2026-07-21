import { useState } from 'react'
import { motion } from 'framer-motion'
import { assets, colors, animationConfig } from '../config/animations'
import Header from './shared/Header'
import MenuOverlay from './MenuOverlay'
import TypewriterText from './TypewriterText'

/**
 * Screen 1 - 见证页面 (Testimonial)
 * 展示: 旋转侧边文字、人像照片、引言、白色卡片
 */
export default function Screen1Testimonial() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor: colors.dark }}
    >
      {/* 导航栏 */}
      <Header onMenuOpen={() => setMenuOpen(true)} />

      {/* 旋转侧边文字: "Anna Miller" / "Community Member" */}
      <div
        className="absolute z-10"
        style={{
          left: -44,
          top: 115,
          transform: 'rotate(-90deg) translateX(-60px)',
          transformOrigin: 'left center',
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-manrope font-medium whitespace-nowrap"
            style={{
              fontSize: 14,
              letterSpacing: 1.2,
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            Anna Miller
          </span>
          <span
            className="font-manrope font-normal whitespace-nowrap"
            style={{
              fontSize: 14,
              letterSpacing: 1.2,
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Community Member
          </span>
        </div>
      </div>

      {/* 人像照片 */}
      <motion.img
        src={assets.portrait}
        alt="Community member portrait"
        className="absolute object-cover"
        style={{ top: 120, left: 125, width: 240, height: 300 }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: animationConfig.elements.heroFadeIn / 1000, delay: 0.3 }}
      />

      {/* 引号图标 */}
      <img
        src={assets.quoteIcon}
        alt="Quote"
        className="absolute object-contain"
        style={{ left: 19, top: 395, width: 28, height: 24 }}
      />

      {/* 引言文本 */}
      <div
        className="absolute"
        style={{ left: 19, top: 440, width: 336 }}
      >
        <TypewriterText
          text="We want to be a family where people can connect and benefit from friendships in Christ."
          charDelay={30}
          startDelay={600}
          showCursor={false}
          className="font-manrope font-normal block"
          style={{
            fontSize: 20,
            lineHeight: '27px',
            color: colors.textLight77,
          }}
        />
      </div>

      {/* 白色底部卡片 — 预留 Home Indicator 空间 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[28px]"
        style={{
          height: 245,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 24,
          paddingBottom: 'max(20px, env(safe-area-inset-bottom, 0px))',
        }}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: animationConfig.elements.cardSlideUp / 1000, delay: 0.5 }}
      >
        {/* 星形图标 (右上角) */}
        <img
          src={assets.starIcon}
          alt="Star"
          className="absolute right-4 bottom-6 object-contain"
          style={{ width: 48, height: 48, opacity: 0.15 }}
        />

        <p
          className="font-manrope font-medium text-[#1a1a1a] mb-2"
          style={{ fontSize: 36, letterSpacing: -0.5, lineHeight: '40px' }}
        >
          Sunday Worship Service
        </p>
        <p
          className="font-manrope font-normal mb-4"
          style={{ fontSize: 17, color: '#888888' }}
        >
          Dec 7th, 10–11:30am
        </p>

        <button
          className="flex items-center gap-2 font-manrope font-medium text-[#1a1a1a]"
          style={{ fontSize: 17 }}
        >
          Learn more
          <img src={assets.arrow} alt="" className="w-4 h-4 object-contain" style={{ filter: 'invert(1)' }} />
        </button>
      </motion.div>

      {/* 菜单遮罩 */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}
