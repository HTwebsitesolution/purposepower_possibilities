import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="h-1 bg-gradient-to-r from-primary-600 via-tealish-500 to-accent-500"></div>
      <div className="container-wide py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm text-slate-600">Author of <em>PURPOSE POWER and POSSIBILITIES</em>, helping adults move from stuck to purposeful action.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Pages</h3>
          <ul className="text-sm space-y-1">
            <li><NavLink to="/" className="hover:text-primary-700">Home</NavLink></li>
            <li><NavLink to="/about-joseph" className="hover:text-primary-700">About Joseph</NavLink></li>
            <li><NavLink to="/purpose-power-possibilities" className="hover:text-primary-700">Book</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p className="text-sm text-slate-600">We’ll only email about new resources; unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4">
        <div className="container-wide text-sm text-slate-600 flex flex-wrap items-center justify-between gap-3">
          <p>© Joseph Afolabi 2025. All rights reserved.</p>
          <p>Cookies are used to optimise user experience.</p>
        </div>
      </div>
    </footer>
  )
}
