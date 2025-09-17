
import React from 'react'
import { Link } from 'react-router-dom'

export default function CTAButton({ to, children, variant='gradient', ariaLabel }) {
  let classes = 'btn-gradient'
  if (variant === 'outline') classes = 'btn btn-outline'
  if (variant === 'primary') classes = 'btn btn-primary'

  // If 'to' starts with 'http', 'mailto:', or 'tel:', use <a>
  const isExternal =
    typeof to === 'string' &&
    (/^(https?:|mailto:|tel:)/.test(to))

  if (isExternal) {
    return (
      <a href={to} className={classes} aria-label={ariaLabel || (typeof children === 'string' ? children : 'Action')} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classes} aria-label={ariaLabel || (typeof children === 'string' ? children : 'Action')}>
      {children}
    </Link>
  )
}
