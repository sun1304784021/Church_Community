import { assets } from '../../config/animations'
import { dynamicIsland } from '../../config/safeArea'
import HamburgerButton from './HamburgerButton'

/**
 * 顶部导航 — 自动避开灵动岛 / 刘海安全区
 */
export default function Header({ onMenuOpen }) {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between"
      style={{
        paddingTop: `max(${dynamicIsland.contentInsetTop}px, calc(env(safe-area-inset-top, 0px) + 12px))`,
        paddingLeft: 19,
        paddingRight: 19,
        paddingBottom: 8,
      }}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-[40px] h-[40px] object-contain shrink-0"
        />
        <span
          className="font-manrope font-normal text-white truncate"
          style={{ fontSize: 16, lineHeight: '20px' }}
        >
          Christ Family Church
        </span>
      </div>
      <HamburgerButton onClick={onMenuOpen} />
    </header>
  )
}
