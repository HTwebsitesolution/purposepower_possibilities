import React from 'react'

export default function NewsletterForm() {
  return (
    <form name="purpose-starter-worksheet" method="POST" data-netlify="true" action="/thanks" className="space-y-4" aria-describedby="privacy-note">
      <input type="hidden" name="form-name" value="purpose-starter-worksheet" />
      <h3 className="text-xl font-semibold">The Purpose Starter Worksheet</h3>
      <p className="text-slate-700">Kick off your journey with a practical, printable worksheet to help clarify your unique purpose and next step.</p>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">Email address <span className="sr-only">(required)</span></label>
        <input id="email" name="email" type="email" required className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="you@example.com" autoComplete="email" />
        <p id="privacy-note" className="text-xs text-slate-600">We value your privacy. Only updates about free tools or new resources. Unsubscribe anytime.</p>
      </div>
      <button type="submit" className="btn-gradient">Download Worksheet</button>
    </form>
  )
}
