import React from 'react'
import SEO from '../components/SEO.jsx'
import SpeakForm from '../components/SpeakForm.jsx'

export default function Speak() {
  const title = "Invite Joseph to Speak | Joseph Afolabi"
  const description = "Request Joseph Afolabi for a keynote, workshop, consultation or community event."
  return (
    <>
      <SEO title={title} description={description} />
      <section className="container-wide mt-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold gradient-text">Invite Joseph to Speak</h1>
            <p className="lead mt-3">Keynotes, workshops and consultations for churches, schools, and organisations.</p>
            <div className="mt-6">
              <SpeakForm />
            </div>
          </div>
          <aside className="lg:col-span-2">
            <div className="card soft-shadow">
              <h2 className="text-xl font-semibold">Popular topics</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Purpose Uncovered</li>
                <li>Unlocking Inner Power</li>
                <li>From Faith to Fruitfulness</li>
                <li>Maximising Your Possibilities</li>
                <li>Resilient Leadership for Today</li>
              </ul>
              <p className="text-sm text-slate-600 mt-4">
                Not sure which fits? Share your goals and we'll recommend a format.
              </p>
            </div>
            <div className="card soft-shadow mt-6">
              <h3 className="font-semibold">Prefer email?</h3>
              <p className="text-sm text-slate-700 mt-1">
                You can also email details to <span className="font-mono">booking@josephafolabi.com</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}