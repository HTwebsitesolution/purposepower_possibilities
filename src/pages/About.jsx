import React from 'react'
import SEO from '../components/SEO.jsx'
import CTAButton from '../components/CTAButton.jsx'

export default function About() {
  const title = "About Joseph Afolabi | Purpose Author & Speaker"
  const description = "Meet Joseph Afolabi, author, speaker and coach behind “PURPOSE POWER and POSSIBILITIES.” See his story, mission, and how to hire him."
  return (
    <>
      <SEO title={title} description={description} />
      <section className="container-narrow mt-16">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold gradient-text">About Joseph Afolabi</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-xl font-semibold">Short Bio (Media Use)</h2>
              <p className="mt-2 text-slate-700">Joseph Afolabi is a UK-based author, educator, and speaker best known for “PURPOSE POWER and POSSIBILITIES: How to be Happy and Successful.” With decades of experience in teaching and leadership, Joseph’s mission is to help adults discover their purpose, unlock personal power, and create real change. Available for speaking, workshops, and media commentary.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Long Bio</h2>
              <p className="mt-2 text-slate-700">Joseph Afolabi brings over two decades of experience in education, faith leadership, and personal development coaching to his writing and speaking. As a former headteacher and passionate community mentor, Joseph has witnessed first-hand how lives are changed—one mindset shift at a time. His book, “PURPOSE POWER and POSSIBILITIES,” arose from a deep conviction that everyone can find their purpose and pursue it with courage.</p>
              <p className="mt-2 text-slate-700">Joseph’s approach is practical and grounded—shaped by years spent helping adults in career transition, leading church initiatives, and providing workshops on resilience, faith, and action-taking. What stands out is his ability to blend motivational storytelling with actionable frameworks, enabling readers and listeners to move from inspiration to results. Whether in the classroom, on stage, or through his book, Joseph equips people to believe in possibility, step out in faith, and experience true, lasting happiness.</p>
            </section>

            <section id="mission">
              <h2 className="text-xl font-semibold">Mission &amp; Philosophy</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>I believe everyone deserves to live with clarity and confidence, fuelled by purpose.</li>
                <li>I help adults break through limiting mindsets to realise God-given potential.</li>
                <li>I believe faith, self-honesty, and daily action together create remarkable transformation.</li>
              </ul>
            </section>

            <section id="speaking">
              <h2 className="text-xl font-semibold">Speaking &amp; Workshops</h2>
              <ul className="mt-3 space-y-3">
                <li className="card"><strong>Purpose Uncovered</strong> — Discover your unique reason for being, and map out practical first steps.</li>
                <li className="card"><strong>Unlocking Inner Power</strong> — Learn tools to shift mindsets and turn setbacks into comeback moments.</li>
                <li className="card"><strong>From Faith to Fruitfulness</strong> — Align your spiritual beliefs with everyday, measurable action.</li>
                <li className="card"><strong>Maximising Your Possibilities</strong> — Expand your vision; say yes to new opportunities with courage and clarity.</li>
                <li className="card"><strong>Resilient Leadership for Today</strong> — Equip church or community teams to lead with impact and authenticity.</li>
              </ul>
            </section>

            <section>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton to="/about-joseph#speaking">Invite Joseph to Speak</CTAButton>
                <CTAButton to="/purpose-power-possibilities" variant="outline">Buy the Book</CTAButton>
              </div>
            </section>
          </div>
          <div>
            <img src="/images/author.jpg" alt="Portrait of Joseph Afolabi, author and motivational speaker, smiling confidently." className="rounded-2xl border soft-shadow" />
            <img src="/images/speaking.JPG" alt="Joseph Afolabi delivering a talk to an audience, gesturing with passion." className="rounded-2xl border mt-6 soft-shadow" />
          </div>
        </div>
      </section>
    </>
  )
}
