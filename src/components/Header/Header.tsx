import type { ReactNode } from 'react'
import './Header.css'

interface Props {
  title: string
  rightSlot?: ReactNode
}

export default function Header({ title, rightSlot }: Props) {
  return (
    <header className="header">
      <span className="header-title">{title}</span>
      <div className="header-right">{rightSlot}</div>
    </header>
  )
}
