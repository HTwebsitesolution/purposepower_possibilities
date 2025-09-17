import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/about-joseph', label: 'About' },
    { to: '/purpose-power-possibilities', label: 'Book' },
  ]

  return (
    <div className="sticky top-0 z-50">
      <div className="container-wide py-2">
        <div className={`header-shell ${scrolled ? 'shadow-elevated' : ''}`}> 
          <div className="header-inner">
            {/* Brand chip */}
            <Link to="/" className="flex items-center gap-3" aria-label="Home">
              <span className="brandchip">JA</span>
              <span className="font-extrabold tracking-tight">Joseph Afolabi</span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-4">
                {nav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `nav-pill ${isActive ? 'is-active' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                to="/purpose-power-possibilities"
                className="hidden sm:inline-flex btn-gradient rounded-xl px-4 py-2 text-sm"
              >
                Get the Book
              </Link>

              {/* Mobile toggle */}
              <button
                type="button"
                className="md:hidden rounded-lg p-2 border border-slate-300 dark:border-slate-700"
                aria-controls="primary-menu"
                aria-expanded={open}
                aria-label="Toggle navigation"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div id="primary-menu" className={`mobile-panel ${open ? 'open' : ''}`}> 
        <ul className="space-y-1">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/purpose-power-possibilities"
              onClick={() => setOpen(false)}
              className="mt-2 btn-gradient w-full justify-center px-4 py-2 rounded-xl inline-flex"
            >
              Get the Book
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
