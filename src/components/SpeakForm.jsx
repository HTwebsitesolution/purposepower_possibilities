import React from 'react'

export default function SpeakForm() {
  return (
    <form
      name="invite-joseph"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/thanks"
      className="card glass soft-shadow space-y-4"
      aria-describedby="privacy-note"
    >
      {/* Netlify bits */}
      <input type="hidden" name="form-name" value="invite-joseph" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>

      <h2 className="text-2xl font-semibold">Invite Joseph to Speak</h2>
      <p className="text-slate-700">
        Share a few details and we'll get back to you promptly.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="contactName">Contact name</label>
          <input id="contactName" name="contactName" required autoComplete="name"
                 className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="organisation">Organisation</label>
          <input id="organisation" name="organisation" required autoComplete="organization"
                 className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email"
                 className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel"
                 className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="eventType">Format</label>
          <select id="eventType" name="eventType" className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>Keynote / Talk</option>
            <option>Workshop</option>
            <option>Consultation</option>
            <option>Interview / Panel</option>
            <option>Church / Community Event</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="date">Preferred date</label>
          <input id="date" name="date" type="date" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="location">Location</label>
          <select id="location" name="location" className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>In-person</option>
            <option>Online</option>
            <option>Hybrid</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="audience">Audience size (approx.)</label>
          <input id="audience" name="audience" type="number" min="1" className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="topic">Topic of interest</label>
        <input id="topic" name="topic" required
               className="w-full rounded-xl border border-slate-300 px-4 py-3"
               placeholder="e.g., Purpose Uncovered, Resilient Leadership, Mindset & Habits…" />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="message">Brief about the event</label>
        <textarea id="message" name="message" rows="5"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Tell us about your audience, goals, timing, and anything else helpful." />
      </div>

      <div className="flex items-start gap-2">
        <input id="consent" name="consent" type="checkbox" className="mt-1" required />
        <label htmlFor="consent" className="text-sm text-slate-700">
          I agree to be contacted about my enquiry and understand I can opt out at any time.
        </label>
      </div>

      {/* Optional captcha: uncomment next line and enable reCAPTCHA in Netlify if needed */}
      {/* <div data-netlify-recaptcha="true"></div> */}

      <p id="privacy-note" className="text-xs text-slate-600">
        We'll only use your details to respond to this request.
      </p>

      <button type="submit" className="btn-gradient rounded-xl px-5 py-3">Send request</button>
    </form>
  )
}