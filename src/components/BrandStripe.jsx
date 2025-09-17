import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function BrandStripe() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset
      const goingDown = y > lastY.current
      const past = y > 80
      setHidden(goingDown && past)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`border-b border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-r from-primary-50 via-tealish-50 to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container-wide py-2 flex items-center justify-between text-sm">
        <p className="font-medium text-slate-700 dark:text-slate-200">Discover Purpose. Unlock Possibility.</p>
        <nav aria-label="Secondary">
          <ul className="flex gap-4">
            <li><NavLink to="/purpose-power-possibilities" className="text-primary-700 dark:text-primary-300 hover:underline">The Book</NavLink></li>
            <li><NavLink to="/speak" className="text-primary-700 dark:text-primary-300 hover:underline">Invite Joseph</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
