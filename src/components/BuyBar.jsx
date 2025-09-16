import React, { useEffect, useRef, useState } from 'react'

export default function BuyBar({ amazonUrl="https://www.amazon.co.uk/", sampleUrl="/purpose-power-possibilities#sample" }) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const sentinelRef = useRef(null)

  useEffect(() => {
    try {
      if (localStorage.getItem('buybarDismissed') === '1') setDismissed(true)
    } catch(e){}
  }, [])

  useEffect(() => {
    const sentinel = document.getElementById('book-hero-sentinel')
    if (!sentinel) return
    const obs = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting)
    }, { rootMargin: "-64px 0px 0px 0px", threshold: 0 })
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

  if (!visible || dismissed) return null

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4">
      <div className="mx-auto max-w-3xl glass soft-shadow rounded-2xl border border-slate-200 dark:border-slate-800 p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src="/images/book-cover.PNG" alt="" className="h-10 w-10 rounded-lg border border-slate-200 dark:border-slate-700" />
          <div>
            <p className="text-sm font-semibold">Purpose, Power & Possibilities</p>
            <p className="text-xs text-slate-600 dark:text-slate-300">Ready to start? Choose an option below.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href={sampleUrl} className="btn btn-outline text-sm">Read Sample</a>
          <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="btn-gradient text-sm">Buy on Amazon</a>
          <button aria-label="Hide buying options" onClick={() => { try { localStorage.setItem('buybarDismissed','1') } catch(e){}; setDismissed(true) }} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800" title="Hide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
