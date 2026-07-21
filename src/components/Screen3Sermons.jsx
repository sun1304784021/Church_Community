import { useState } from 'react'
import { motion } from 'framer-motion'
import { assets, colors, animationConfig } from '../config/animations'
import Header from './shared/Header'
import MenuOverlay from './MenuOverlay'
import TypewriterText from './TypewriterText'

/** 单个事件行 */
function EventRow({ day, month, title, time, cardBg = '#FFFFFF', opacity = 1 }) {
  return (
    <div
      className="flex items-stretch gap-4"
      style={{ opacity }}
    >
      {/* 日期卡片 68x90 */}
      <div
        className="flex flex-col items-center justify-center rounded-2xl shrink-0"
        style={{
          width: 68,
          height: 90,
          backgroundColor: cardBg,
        }}
      >
        <span
          className="font-manrope font-medium"
          style={{
            fontSize: 34,
            color: colors.dark,
            lineHeight: '38px',
          }}
        >
          {day}
        </span>
        <span
          className="font-manrope font-normal"
          style={{
            fontSize: 18,
            color: colors.dark,
            opacity: 0.6,
          }}
        >
          {month}
        </span>
      </div>

      {/* 文字 */}
      <div className="flex flex-col justify-center">
        <p
          className="font-manrope font-normal text-white"
          style={{ fontSize: 21, lineHeight: '26px' }}
        >
          {title}
        </p>
        <p
          className="font-manrope font-normal mt-1"
          style={{ fontSize: 17, color: '#999999' }}
        >
          {time}
        </p>
      </div>
    </div>
  )
}

const events = [
  {
    day: '14',
    month: 'Dec',
    title: 'Luke 1 | A Story From Zechariah',
    time: '6:30 – 8:00 pm',
    cardBg: '#FFFFFF',
    opacity: 1,
  },
  {
    day: '21',
    month: 'Dec',
    title: 'Romans 15 | Living For Christ Alone',
    time: '8:30 – 10:00 am',
    cardBg: colors.cream,
    opacity: 1,
  },
  {
    day: '28',
    month: 'Dec',
    title: 'Romans 9 | The Sovereignty Of God',
    time: '5:30 – 7:00 pm',
    cardBg: colors.cream,
    opacity: 1,
  },
  {
    day: '4',
    month: 'Jan',
    title: 'John 3 | Born Again',
    time: '',
    cardBg: colors.cream,
    opacity: 0.5,
  },
]

/**
 * Screen 3 - 讲道/活动页 (Sermons/Events)
 * 展示: 布道者英雄图、播放按钮、活动列表
 */
export default function Screen3Sermons() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-white"
    >
      {/* 顶部英雄图 (宽415, 偏移 left: -20) */}
      <motion.div
        className="absolute top-0 overflow-hidden"
        style={{ left: -20, width: 415, height: 345 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: animationConfig.elements.heroFadeIn / 1000 }}
      >
        <img
          src={assets.preacherHero}
          alt="Preacher"
          className="w-full h-full object-cover"
        />
        {/* 30% 黑色遮罩 */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
      </motion.div>

      {/* 导航栏 */}
      <Header onMenuOpen={() => setMenuOpen(true)} />

      {/* 播放按钮 (65x65圆, cream背景, 垂直居中在图片中) */}
      <motion.button
        className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center rounded-full"
        style={{
          top: 175,
          width: 65,
          height: 65,
          backgroundColor: colors.cream,
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: animationConfig.elements.playButtonScale / 1000, delay: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={assets.playButton} alt="Play" className="w-7 h-7 object-contain ml-1" />
      </motion.button>

      {/* 白色主体区域 (从 top:343 开始) */}
      <div
        className="absolute left-0 right-0 bottom-0 bg-white rounded-t-[28px]"
        style={{ top: 343 }}
      >
        {/* 深色条带 (height:220) - 承载 "Upcoming" 标题 */}
        <div
          className="absolute top-0 left-0 right-0 rounded-t-[28px] flex items-center px-[19px]"
          style={{
            height: 220,
            backgroundColor: colors.dark,
          }}
        >
          <TypewriterText
            text="Upcoming"
            charDelay={60}
            startDelay={700}
            showCursor={false}
            className="font-manrope font-normal text-white block"
            style={{
              fontSize: 38,
              letterSpacing: -0.8,
              lineHeight: '44px',
            }}
          />
        </div>

        {/* 事件列表 */}
        <motion.div
          className="absolute left-[19px] right-[19px] flex flex-col"
          style={{ top: 230, gap: 22 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {events.map((ev, i) => (
            <EventRow key={i} {...ev} />
          ))}
        </motion.div>
      </div>

      {/* 菜单遮罩 */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}
