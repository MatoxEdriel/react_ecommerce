import type { ReactNode } from 'react'

interface Props {
  title: string
  rightSlot?: ReactNode
}

export default function Header({ title, rightSlot }: Props) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface px-6 py-3.5">
      <span className="text-xl font-semibold text-heading">{title}</span>
      <div>{rightSlot}</div>
    </header>
  )
}
