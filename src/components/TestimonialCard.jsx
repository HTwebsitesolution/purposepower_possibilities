import React from 'react'

function Stars() {
  return (
    <div aria-hidden="true" className="flex gap-0.5">
      {[...Array(5)].map((_,i)=>(
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-accent-500">
          <path d="M10 15.27l-5.18 3.04L6.18 12 2 8.24l6-.87L10 2l2 5.37 6 .87L13.82 12l1.36 6.31z"/>
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({ quote, author, source = null }) {
  return (
    <figure className="card glass soft-shadow">
      <Stars />
      <blockquote className="mt-3 text-slate-800 italic">“{quote}”</blockquote>
      <figcaption className="mt-2 text-sm text-slate-600 flex items-center gap-2">
        {source === 'amazon' && <span className="source-badge amazon" aria-hidden="true"></span>}
        <span>— {author}</span>
      </figcaption>
    </figure>
  )
}
