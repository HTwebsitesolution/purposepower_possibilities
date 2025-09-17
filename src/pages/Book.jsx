import React from 'react'
import SEO from '../components/SEO.jsx'
import BookSubnav from '../components/BookSubnav.jsx'
import BuyBar from '../components/BuyBar.jsx'
import { AMAZON_UK_URL } from '../config.js'

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What’s the core message?", "acceptedAnswer": { "@type": "Answer", "text": "Finding and living your unique purpose—practically, with hope and concrete tools." } },
    { "@type": "Question", "name": "Is this just for Christians?", "acceptedAnswer": { "@type": "Answer", "text": "Faith themes are present, but principles apply to anyone seeking real change." } },
    { "@type": "Question", "name": "How long does it take to read?", "acceptedAnswer": { "@type": "Answer", "text": "Roughly 180 pages: most readers finish in 3–5 sessions." } },
    { "@type": "Question", "name": "Which formats are available?", "acceptedAnswer": { "@type": "Answer", "text": "Kindle/Digital and Paperback. Check your favourite retailer for links." } },
    { "@type": "Question", "name": "Is this useful for group study?", "acceptedAnswer": { "@type": "Answer", "text": "Yes—contains exercises and questions for personal or small group use." } },
    { "@type": "Question", "name": "Can I order in bulk for my organisation?", "acceptedAnswer": { "@type": "Answer", "text": "Contact Joseph for church, workplace or large-quantity inquiries." } }
  ]
}

export default function Book() {
  const title = "Purpose Power & Possibilities | Joseph Afolabi"
  const description = "Discover “PURPOSE POWER and POSSIBILITIES”: Real steps for happiness, success, and faith-driven action from Joseph Afolabi. Formats: Kindle, paperback."
  return (
    <>
      <SEO title={title} description={description} jsonLd={faqJsonLd} />
      <div id="book-hero-sentinel"></div>
      <section id="synopsis" className="container-narrow mt-16">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold gradient-text">Purpose, Power &amp; Possibilities: The Book</h1>
        <p className="lead mt-4">A practical, hope-filled guide to finding your purpose, unlocking resilience, and living out the possibilities God has placed within you—whatever your starting point.</p>
      </section>

      <BookSubnav />
      <section id="sample" className="container-narrow mt-16">
        <h2 className="text-2xl font-bold">Read a Sample</h2>
        <p className="mt-3 text-slate-700">
          Get a feel for the tone and practicality. Here's a short excerpt from Chapter 1:
        </p>
        <blockquote className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 italic text-slate-800 dark:text-slate-200">
          Purpose doesn't arrive as a thunderclap. It's revealed in motion—small, faithful steps that align your strengths with someone else's good.
        </blockquote>
        <p className="mt-3 text-slate-700">
          The book pairs reflection with simple actions, so you're never stuck at “now what?”.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="#buy" className="btn-gradient">See formats &amp; pricing</a>
          <a href="#chapters" className="btn btn-outline">Explore chapters</a>
        </div>
      </section>

      <section className="container-narrow mt-16">
        <h2 className="text-2xl font-bold">Full Synopsis</h2>
        <p className="mt-3 text-slate-700">Drawing on both real-life stories and concrete tools, “PURPOSE POWER and POSSIBILITIES” moves you from stuck to inspired, and from inspired to action. The book is split into three pivotal sections: discovering purpose for the first time, understanding your inbuilt power to change, and finally, taking practical steps to realise new possibilities. Each chapter offers encouragement grounded in real-world examples and clear reflection prompts, so you aren’t left guessing what to do next. With its blend of faith-inspired wisdom and approachable exercises, Joseph Afolabi’s book equips adults—regardless of background or beliefs—to shift their thinking, overcome hesitation, and start building lives they want to wake up for.</p>
      </section>

      <section id="audience" className="container-narrow mt-16">
        <h2 className="text-2xl font-bold">Who It’s For</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
          <li>Adults at a crossroads (job change, life transition, new season).</li>
          <li>Church and community leaders seeking actionable, faith-compatible guidance.</li>
          <li>Graduates or emerging professionals looking for clarity and motivation.</li>
          <li>Readers who want practical, no-jargon steps for personal or group use.</li>
        </ul>
      </section>

      <section id="takeaways" className="container-narrow mt-16">
        <h2 className="text-2xl font-bold">Key Takeaways</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
          <li>You will identify—and own—your unique life purpose.</li>
          <li>You will break through self-doubt with simple mindset shifts.</li>
          <li>You will apply daily habits that turn intention into progress.</li>
          <li>You will learn ways to align your faith with practical action.</li>
          <li>You will discover new opportunities, even in setback or disappointment.</li>
          <li>You will leave “stuck” behind—starting now.</li>
          <li>You will craft a sustainable vision for your next chapter.</li>
        </ul>
      </section>

      <section id="chapters" className="container-narrow mt-16">
        <h2 className="text-2xl font-bold">Chapter Teasers</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
          <li><strong>Purpose Defined:</strong> What is purpose, and how do you know it?</li>
          <li><strong>Mindset Liberation:</strong> Setting your thinking free from past mistakes.</li>
          <li><strong>The Power Within:</strong> Seeing yourself as capable, resourced, and ready.</li>
          <li><strong>Overcoming Setbacks:</strong> Turning every obstacle into a springboard.</li>
          <li><strong>Faith in Action:</strong> How belief translates to daily choices.</li>
          <li><strong>Possibility Living:</strong> Courage to pursue growth—every year, at any age.</li>
        </ul>
        <p className="text-xs text-slate-500 mt-2">...and more chapters to encourage and empower you to take action.</p>
      </section>

      <section id="guide" className="container-narrow mt-16">
        <h2 className="text-2xl font-bold">Reading Group Guide: Discussion Questions</h2>
        <ol className="mt-3 list-decimal pl-5 text-slate-700 space-y-1">
          <li>What does “purpose” mean to you right now? Has that changed?</li>
          <li>Which chapter was most personally challenging? Why?</li>
          <li>How does the book suggest connecting faith and action?</li>
          <li>Did any tools or prompts stand out as helpful? Which ones?</li>
          <li>Where do “possibilities” feel most blocked in your life? What would change that?</li>
          <li>What does success now look like for you after reading?</li>
        </ol>
      </section>

      <section id="buy" className="container-narrow mt-16">
        <h2 className="text-2xl font-bold">Formats &amp; Buy</h2>
        <p className="mt-3 text-slate-700">Available in: Kindle (Amazon UK/US), Paperback (Amazon UK/US, select retailers)</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn btn-outline" href="#sample">Read Sample</a>
          <a className="btn-gradient" href={AMAZON_UK_URL} target="_blank" rel="noopener noreferrer">Order on Amazon UK</a>
          <a className="btn btn-outline" href="https://www.ecampus.com/" target="_blank" rel="noopener noreferrer">View on eCampus</a>
        </div>
        <p className="text-xs text-slate-500 mt-3">“Amazon” and “Kindle” are trademarks of Amazon.com, Inc. or its affiliates. No endorsement implied.</p>
      </section>

  {/* Sticky Buy Bar mount with sample link */}
  <BuyBar amazonUrl={AMAZON_UK_URL} sampleUrl="#sample" />
    </>
  )
}