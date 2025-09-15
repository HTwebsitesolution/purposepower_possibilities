import React from 'react'

export default function CTAButton({ to, children, variant='gradient', ariaLabel }) {
  let classes = 'btn-gradient'
  if (variant === 'outline') classes = 'btn btn-outline'
  if (variant === 'primary') classes = 'btn btn-primary'
  return (
    <a href={to} className={classes} aria-label={ariaLabel || (typeof children === 'string' ? children : 'Action')}>
      {children}
    </a>
  )
}
