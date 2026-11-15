import wordmark from './wordmark.svg?raw'
import wordmarkTagline from './wordmark-tagline.svg?raw'
import dropSolid from './drop-solid.svg?raw'
import dropOutline from './drop-outline.svg?raw'

const svgs = { wordmark, 'wordmark-tagline': wordmarkTagline, 'drop-solid': dropSolid, 'drop-outline': dropOutline }

type Props = { variant: keyof typeof svgs; className?: string; label?: string }

export function Logo({ variant, className, label }: Props) {
  return (
    <span
      className={`logo logo-${variant} ${className ?? ''}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: svgs[variant] }}
    />
  )
}
