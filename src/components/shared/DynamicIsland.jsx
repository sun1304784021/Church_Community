import { dynamicIsland } from '../../config/safeArea'

/**
 * 灵动岛 + 底部 Home Indicator
 * 固定在 App 容器顶层，不随页面滑动
 */
export default function DynamicIsland() {
  const { width, height, borderRadius, top, homeIndicator } = dynamicIsland

  return (
    <>
      {/* 灵动岛 */}
      <div
        className="absolute left-1/2 z-[200] pointer-events-none"
        style={{
          top,
          transform: 'translateX(-50%)',
          width,
          height,
          borderRadius,
          backgroundColor: '#000',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.4)',
        }}
        aria-hidden
      />

      {/* Home Indicator */}
      <div
        className="absolute left-1/2 z-[200] pointer-events-none rounded-full"
        style={{
          bottom: `max(${homeIndicator.bottom}px, env(safe-area-inset-bottom, 0px))`,
          transform: 'translateX(-50%)',
          width: homeIndicator.width,
          height: homeIndicator.height,
          backgroundColor: 'rgba(255,255,255,0.3)',
        }}
        aria-hidden
      />
    </>
  )
}
