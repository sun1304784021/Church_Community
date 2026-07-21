import { motion } from 'framer-motion'
import { phoneFrame, animationConfig } from '../config/animations'

/**
 * iPhone 手机框架
 * 包含动态岛、Home Indicator 和屏幕内容
 */
export default function PhoneFrame({ children, index = 0, label }) {
  const { phoneFrame: anim } = animationConfig
  const pf = phoneFrame

  return (
    <motion.div
      className="flex flex-col items-center shrink-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: anim.duration / 1000,
        delay: (anim.delay + index * anim.delayStep) / 1000,
        ease: 'easeOut',
      }}
    >
      {label && (
        <p className="font-manrope font-medium text-white/60 text-sm mb-4 tracking-wide">
          {label}
        </p>
      )}

      {/* 外框 */}
      <div
        className="relative bg-black overflow-hidden"
        style={{
          width: pf.width,
          height: pf.height,
          borderRadius: pf.borderRadius,
          borderWidth: pf.borderWidth,
          borderColor: pf.shadow.color === '#000' ? '#2a2a2a' : '#2a2a2a',
          borderStyle: 'solid',
          boxShadow: `${pf.shadow.offsetX}px ${pf.shadow.offsetY}px ${pf.shadow.radius}px rgba(0,0,0,${pf.shadow.opacity})`,
        }}
      >
        {/* 动态岛 */}
        <div
          className="absolute top-[11px] left-1/2 -translate-x-1/2 z-30 bg-black"
          style={{
            width: pf.islandWidth,
            height: pf.islandHeight,
            borderRadius: pf.islandRadius,
          }}
        />

        {/* 屏幕内容区域 */}
        <div className="relative w-full h-full overflow-hidden bg-dark">
          {children}
        </div>

        {/* Home Indicator */}
        <div
          className="absolute bottom-[8px] left-1/2 -translate-x-1/2 z-30 rounded-full"
          style={{
            width: pf.homeIndicatorWidth,
            height: pf.homeIndicatorHeight,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        />
      </div>
    </motion.div>
  )
}
