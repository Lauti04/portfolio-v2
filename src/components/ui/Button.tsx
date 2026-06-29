import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md'

interface ButtonOwnProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

type ButtonAsButton = ButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsAnchor = ButtonOwnProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-foreground hover:opacity-90',
  secondary: 'bg-muted text-foreground hover:bg-border',
  ghost: 'bg-transparent text-foreground hover:bg-muted',
  outline:
    'border border-border bg-transparent text-foreground hover:border-foreground/30 hover:bg-muted',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
}

/** Renders as an `<a>` when `href` is given, otherwise as a `<button>`. */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props
    return <a href={href} className={classes} {...anchorProps} />
  }

  const { type = 'button', ...buttonProps } = props
  return <button type={type} className={classes} {...buttonProps} />
}
