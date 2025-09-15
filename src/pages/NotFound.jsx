import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Joseph Afolabi" description="The page you’re looking for doesn’t exist." />
      <section className="container-narrow mt-24 text-center">
        <h1 className="text-4xl font-extrabold">404</h1>
        <p className="lead mt-3">The page you’re looking for doesn’t exist.</p>
        <p className="mt-6"><Link to="/" className="text-primary-700 hover:underline">Go Home</Link></p>
      </section>
    </>
  )
}
