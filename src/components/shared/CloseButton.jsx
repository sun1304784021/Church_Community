/** 关闭按钮 (X - 两条旋转线) */
export default function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-7 h-7 cursor-pointer bg-transparent border-none p-0"
      aria-label="关闭菜单"
    >
      <span className="absolute top-1/2 left-1/2 w-[22px] h-[2px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 rotate-45" />
      <span className="absolute top-1/2 left-1/2 w-[22px] h-[2px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 -rotate-45" />
    </button>
  )
}
