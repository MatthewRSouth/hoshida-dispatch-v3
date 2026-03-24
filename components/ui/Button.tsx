import Link from 'next/link'
import { type ReactNode } from 'react'

type Variant = 'primary' | 'terra' | 'ghost' | 'cream' | 'outline-white'
type Size = 'default' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-indigo text-white hover:bg-indigo-dark',
  terra: 'bg-terra text-white hover:bg-terra-dark',
  ghost: 'bg-transparent border border-cream-dark text-ink hover:border-ink',
  cream: 'bg-cream text-ink hover:bg-white',
  'outline-white': 'bg-transparent border border-white/45 text-white hover:border-white',
}

const sizeClasses: Record<Size, string> = {
  default: 'px-5 py-[9px] text-[0.83rem]',
  lg: 'px-[30px] py-[13px] text-[0.92rem]',
}

export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
  children,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-1.5 rounded-pill font-bold font-sans transition-all cursor-pointer no-underline'
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
