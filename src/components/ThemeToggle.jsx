import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const startDark = stored ? stored === 'dark' : prefersDark
    setIsDark(startDark)
    if (startDark) root.classList.add('dark')
  }, [])

  function toggle() {
    const root = document.documentElement
    const next = !isDark
    setIsDark(next)
    if (next) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button onClick={toggle} className="rounded-lg border border-slate-300 dark:border-slate-700 p-2 hover:bg-slate-50 dark:hover:bg-slate-800" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {isDark ? (
        // Sun icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4V2M12 22v-2M4 12H2m20 0h-2M5 5l-1.5-1.5M20.5 20.5 19 19M19 5l1.5-1.5M4.5 20.5 6 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/></svg>
      ) : (
        // Moon icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
      )}
    </button>
  )
}
