import React, { useEffect, useState } from 'react'

const sections = [
  { id: 'synopsis', label: 'Synopsis' },
  { id: 'audience', label: 'Who It\u2019s For' },
  { id: 'takeaways', label: 'Takeaways' },
  { id: 'chapters', label: 'Chapters' },
  { id: 'guide', label: 'Discussion' },
  { id: 'buy', label: 'Buy' },
]

export default function BookSubnav() {
  const [active, setActive] = useState('synopsis')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-120px 0px -70% 0px', threshold: 0.01 }
    )
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="sticky top-20 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <nav className="container-wide">
        <ul className="flex flex-wrap gap-2 py-3 text-sm">
          {sections.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={`px-3 py-1 rounded-lg transition ${active===s.id ? 'bg-primary-600 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
