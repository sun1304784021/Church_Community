import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { colors } from '../config/animations'
import DynamicIsland from './shared/DynamicIsland'
import Screen1Testimonial from './Screen1Testimonial'
import Screen2Hero from './Screen2Hero'
import Screen3Sermons from './Screen3Sermons'

const screens = [
  { id: 'testimonial', Component: Screen1Testimonial },
  { id: 'hero', Component: Screen2Hero },
  { id: 'sermons', Component: Screen3Sermons },
]

const SWIPE_THRESHOLD = 50

/**
 * App 主壳
 * - 顶部灵动岛 + 底部 Home Indicator
 * - 安全区适配（真实 iPhone 用 env(safe-area-inset-*)）
 * - 左右滑动切换页面
 */
export default function ShowcasePage() {
  const [current, setCurrent] = useState(0)
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? Math.min(window.innerWidth, 390) : 390
  )
  const containerRef = useRef(null)
  const x = useMotionValue(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setWidth(el.offsetWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    animate(x, -current * width, {
      type: 'spring',
      stiffness: 320,
      damping: 36,
      mass: 0.8,
    })
  }, [current, width, x])

  function onDragEnd(_, info) {
    const { offset, velocity } = info
    let next = current

    if (offset.x < -SWIPE_THRESHOLD || velocity.x < -400) {
      next = Math.min(current + 1, screens.length - 1)
    } else if (offset.x > SWIPE_THRESHOLD || velocity.x > 400) {
      next = Math.max(current - 1, 0)
    }

    setCurrent(next)
    animate(x, -next * width, {
      type: 'spring',
      stiffness: 320,
      damping: 36,
      mass: 0.8,
    })
  }

  return (
    <div
      className="w-full min-h-[100svh] flex items-center justify-center"
      style={{ backgroundColor: '#0c0a09' }}
    >
      {/* iPhone 形态 App 容器 */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[390px] overflow-hidden select-none app-device"
        style={{
          height: 'min(100svh, 844px)',
          backgroundColor: colors.dark,
          touchAction: 'pan-y',
          // 桌面端圆角模拟真机；真机全屏时由 CSS 去掉圆角
          borderRadius: 'var(--device-radius, 0px)',
          boxShadow: 'var(--device-shadow, none)',
        }}
      >
        {/* 灵动岛 + Home Indicator（固定不随滑动） */}
        <DynamicIsland />

        {/* 可滑动页面轨道 */}
        <motion.div
          className="absolute inset-0 flex h-full"
          style={{ x, width: width * screens.length, cursor: 'grab' }}
          drag="x"
          dragConstraints={{
            left: -(screens.length - 1) * width,
            right: 0,
          }}
          dragElastic={0.15}
          dragMomentum={false}
          onDragEnd={onDragEnd}
          whileDrag={{ cursor: 'grabbing' }}
        >
          {screens.map(({ id, Component }) => (
            <div
              key={id}
              className="relative shrink-0 h-full overflow-hidden"
              style={{ width }}
            >
              <Component />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
