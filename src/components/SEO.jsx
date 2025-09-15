import React, { useEffect } from 'react'

export default function SEO({ title, description, image='/images/book-cover.jpg', jsonLd=null }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      const m = document.querySelector('meta[name="description"]')
      if (m) m.setAttribute('content', description)
    }
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', window.location.origin + window.location.pathname)

    const setOrCreate = (p, c) => {
      let tag = document.querySelector(`meta[property="${p}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', p)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', c)
    }
    setOrCreate('og:title', title || '')
    setOrCreate('og:description', description || '')
    setOrCreate('og:image', image || '')

    const existing = document.getElementById('jsonld-faq')
    if (existing) existing.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'jsonld-faq'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, image, jsonLd])

  return null
}
