/** 汉堡菜单按钮 (3条线: 2长 + 1短) */
export default function HamburgerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center gap-[5px] w-7 h-7 cursor-pointer bg-transparent border-none p-0"
      aria-label="打开菜单"
    >
      <span className="block h-[2px] w-[22px] bg-white rounded-full" />
      <span className="block h-[2px] w-[22px] bg-white rounded-full" />
      <span className="block h-[2px] w-[14px] bg-white rounded-full ml-auto" />
    </button>
  )
}
