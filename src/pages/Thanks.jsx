import React from 'react'
import SEO from '../components/SEO.jsx'
import { Link } from 'react-router-dom'

export default function Thanks() {
  const title = "Thanks! | Purpose Starter Worksheet"
  const description = "Your worksheet is on its way to your inbox. Check your email to download it."
  return (
    <>
      <SEO title={title} description={description} />
      <section className="container-narrow mt-24 text-center">
        <h1 className="text-4xl font-extrabold">Thanks — you’re in!</h1>
        <p className="lead mt-3">Your worksheet is on its way to your inbox. Check your email to download it.</p>
        <p className="mt-6"><Link to="/" className="text-primary-700 hover:underline">Back to Home</Link></p>
      </section>
    </>
  )
}
