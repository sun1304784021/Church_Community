import { useState, useEffect } from 'react'
import { animationConfig } from '../config/animations'

/**
 * 打字机效果组件
 * @param {string} text - 要显示的文本
 * @param {number} charDelay - 每个字符间隔 (ms)，覆盖全局配置
 * @param {number} startDelay - 开始延迟 (ms)，覆盖全局配置
 * @param {boolean} showCursor - 是否显示光标
 * @param {string} className - 额外 CSS 类名
 * @param {object} style - 内联样式
 */
export default function TypewriterText({
  text,
  charDelay,
  startDelay,
  showCursor,
  className = '',
  style = {},
  as: Tag = 'span',
}) {
  const config = animationConfig.typewriter
  const delay = charDelay ?? config.charDelay
  const initialDelay = startDelay ?? config.startDelay
  const cursor = showCursor ?? config.cursorBlink

  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setStarted(false)
    setDone(false)

    const startTimer = setTimeout(() => setStarted(true), initialDelay)
    return () => clearTimeout(startTimer)
  }, [text, initialDelay])

  useEffect(() => {
    if (!started) return

    if (displayed.length >= text.length) {
      setDone(true)
      return
    }

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, delay)

    return () => clearTimeout(timer)
  }, [started, displayed, text, delay])

  return (
    <Tag className={className} style={style}>
      {displayed}
      {cursor && !done && (
        <span className="inline-block animate-pulse opacity-70">{config.cursorChar}</span>
      )}
    </Tag>
  )
}
