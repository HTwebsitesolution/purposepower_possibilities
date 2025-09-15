import React from 'react'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title mt-3"><span className="gradient-text">{title}</span></h2>
      {subtitle && <p className="mt-3 text-slate-700">{subtitle}</p>}
    </div>
  )
}
