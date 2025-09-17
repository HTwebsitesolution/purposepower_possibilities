import React from 'react'
import SEO from '../components/SEO.jsx'
import CTAButton from '../components/CTAButton.jsx'
import NewsletterForm from '../components/NewsletterForm.jsx'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'

export default function Home() {
  const title = "Find Your Purpose: Joseph Afolabi’s Proven Guide"
  const description = "Discover “PURPOSE POWER and POSSIBILITIES” by Joseph Afolabi—practical steps for happiness, faith-driven success, and real change. Free worksheet inside!"

  return (
    <>
      <SEO title={title} description={description} />
      {/* HERO */}
      <section className="relative overflow-hidden">
          <img src="/images/hero-illustration.svg" alt="" aria-hidden="true" className="block dark:hidden pointer-events-none select-none absolute inset-0 w-full h-full object-cover" />
        <img src="/images/hero-illustration-dark.svg" alt="" aria-hidden="true" className="hidden dark:block pointer-events-none select-none absolute inset-0 w-full h-full object-cover" />
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="container-wide mt-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="eyebrow">Discover Purpose, Power &amp; Possibility</span>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-black tracking-tight">
              <span className="gradient-text">Find Your Purpose—</span><br/>and What’s Next
            </h1>
            <p className="lead mt-5">Step into the life you’re meant for. Unlock practical strategies to achieve happiness and success—with purpose you can live out every day.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton to="/purpose-power-possibilities" ariaLabel="Get the Book">Get the Book</CTAButton>
              <CTAButton to="/speak" variant="outline" ariaLabel="Invite Joseph to Speak">Invite Joseph to Speak</CTAButton>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/images/book-cover.PNG" alt="Front cover of PURPOSE POWER and POSSIBILITIES by Joseph Afolabi" className="rounded-2xl border tilt floaty" />
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="section">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card glass soft-shadow">
            <h3 className="font-semibold text-lg">Find your unique purpose—and act on it with confidence.</h3>
          </div>
          <div className="card glass soft-shadow">
            <h3 className="font-semibold text-lg">Harness your power to transform obstacles into possibility.</h3>
          </div>
          <div className="card glass soft-shadow">
            <h3 className="font-semibold text-lg">Live with clarity, joy, and lasting success—not by accident, but by design.</h3>
          </div>
        </div>
      </section>

      {/* BOOK HOOK */}
      <section className="section">
        <SectionHeading eyebrow="Why this book" title="What makes the book different" />
        <p className="mt-6 max-w-3xl mx-auto text-slate-700 text-center">What sets <em>PURPOSE POWER and POSSIBILITIES</em> apart is its blend of pastoral warmth with proven, actionable steps. You won’t just get inspiration—you’ll walk through key mindsets and habits that move you from aimless wishing to purposeful doing, anchored in faith yet accessible for all adults trying to pivot or grow. Joseph Afolabi lays out a journey: first, discover why you’re here; next, believe you can make a difference; finally, act to change your outcomes—practically, faithfully, and right now.</p>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <SectionHeading eyebrow="Readers' words" title="What readers say" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Existing */}
          <TestimonialCard
            quote="Challenges you to allow your mind to be fully liberated, to believe true happiness is not a mystery."
            author="Joseph Afolabi (LinkedIn)"
          />
          <TestimonialCard
            quote="Will challenge, enlighten and empower you to reinvent yourself and bring to life the unlimited possibilities within you."
            author="Reader Review (Bol.com)"
          />
          <TestimonialCard
            quote="Ruffles your feathers to force you out of your comfort zone so that you can fulfil your potential."
            author="Goodreads review"
          />

          {/* New — Amazon UK */}
          <TestimonialCard
            quote="Whilst reading the book you get the feeling that the author genuinely wants you to achieve your full potential in life."
            author="Mr Darren F (Verified Purchase, 15 Aug 2013)"
            source="amazon"
          />
          <TestimonialCard
            quote="It’s easy to whizz through this book — but don’t!"
            author="Sandra Sinclair (Verified Purchase, 27 Jun 2017)"
            source="amazon"
          />
          <TestimonialCard
            quote="A great book, full of encouragement and positive insights."
            author="Peter Alliott (Verified Purchase, 17 Dec 2012)"
            source="amazon"
          />
        </div>
      </section>

      {/* NEWSLETTER + ABOUT */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="card glass soft-shadow">
            <NewsletterForm />
          </div>
          <div className="card soft-shadow">
            <h3 className="text-2xl font-semibold">About Joseph</h3>
            <p className="mt-2 text-slate-700">Joseph Afolabi is an educator, speaker, and leadership coach with a heart for unlocking potential. Author of <em>PURPOSE POWER and POSSIBILITIES</em>, Joseph draws on decades of teaching, community leadership, and personal growth coaching to equip adults for meaningful change.</p>
            <Link to="/about-joseph" className="mt-4 inline-block text-primary-700 hover:underline">About Joseph →</Link>
            <div className="mt-6">
              <img src="/images/author.jpg" alt="Portrait of Joseph Afolabi, author and motivational speaker, smiling confidently." className="rounded-2xl border soft-shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section text-center">
        <div className="inline-flex items-center gap-3 glass card soft-shadow">
          <p className="text-lg">Ready to move from stuck to purposeful?</p>
          <CTAButton to="/purpose-power-possibilities">Start Reading</CTAButton>
        </div>
      </section>
    </>
  )
}
