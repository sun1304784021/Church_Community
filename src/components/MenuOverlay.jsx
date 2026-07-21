import { motion, AnimatePresence } from 'framer-motion'
import { assets, animationConfig, colors } from '../config/animations'
import { dynamicIsland } from '../config/safeArea'
import CloseButton from './shared/CloseButton'
import TypewriterText from './TypewriterText'

const navLinks = ['Home', 'About', 'Events', 'Sermons', 'Contact']

/** 全屏菜单遮罩 */
export default function MenuOverlay({ isOpen, onClose }) {
  const { menu } = animationConfig

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute inset-0 z-[100] flex flex-col"
          style={{ backgroundColor: colors.dark }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: menu.fadeInDuration / 1000 }}
        >
          {/* 菜单头部 — 避开灵动岛 */}
          <div
            className="flex items-center justify-between"
            style={{
              paddingTop: `max(${dynamicIsland.contentInsetTop}px, calc(env(safe-area-inset-top, 0px) + 12px))`,
              paddingLeft: 19,
              paddingRight: 19,
            }}
          >
            <div className="flex items-center gap-2.5">
              <img src={assets.logo} alt="Logo" className="w-[46px] h-[46px] object-contain" />
              <span
                className="font-manrope font-normal text-white"
                style={{ fontSize: 17, lineHeight: '20px' }}
              >
                Christ Family Church
              </span>
            </div>
            <CloseButton onClick={onClose} />
          </div>

          {/* 导航链接 */}
          <nav className="flex-1 flex flex-col justify-center px-[19px]" style={{ gap: 22 }}>
            {navLinks.map((link, i) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: (menu.linkDelay + i * menu.linkStagger) / 1000,
                  duration: 0.3,
                }}
              >
                <TypewriterText
                  text={link}
                  startDelay={menu.linkDelay + i * menu.linkStagger}
                  charDelay={25}
                  showCursor={false}
                  className="font-manrope font-light text-white cursor-pointer hover:opacity-70 transition-opacity"
                  style={{
                    fontSize: 36,
                    letterSpacing: -0.8,
                    lineHeight: '42px',
                  }}
                />
              </motion.div>
            ))}
          </nav>

          {/* 底部 CTA — 避开 Home Indicator */}
          <div
            className="px-[19px]"
            style={{
              paddingBottom: `max(36px, calc(env(safe-area-inset-bottom, 0px) + 24px))`,
            }}
          >
            <button
              className="w-full flex items-center justify-center gap-2 font-manrope font-medium rounded-full"
              style={{
                height: 52,
                backgroundColor: colors.cream,
                color: colors.dark,
                fontSize: 21,
              }}
            >
              Join us
              <img src={assets.arrow} alt="" className="w-5 h-5 object-contain" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
