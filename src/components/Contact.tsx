'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 font-cmu max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-cmu mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#E5E5E5] border border-gray-700 rounded-xl text-black font-cmu focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-cmu mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#E5E5E5] border border-gray-700 rounded-xl text-black font-cmu focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-cmu mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#E5E5E5] border border-[#D4D4D4] rounded-xl text-black font-cmu focus:outline-none focus:ring-2 focus:ring-[#D4D4D4] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && (
                <p className={`mt-4 text-center font-cmu ${
                  submitMessage.includes('successfully')
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="bg-[#E5E5E5] p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-playfair font-bold text-black mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-playfair font-bold text-black">
                      Email
                    </h4>
                    <p className="text-gray-700 font-cmu">
                     meghachauhan310@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-playfair font-bold text-black">
                      Phone
                    </h4>
                    <p className="text-gray-700 font-cmu">
                      +91-9012028217
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-playfair font-bold text-black">
                      Location
                    </h4>
                    <p className="text-gray-700 font-cmu">
                      Baghpat ,UttarPradesh, India
                    </p>
                  </div>
                </div>
              </div>
              
                <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-playfair font-bold text-black mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Megha03-coder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/megha-chauhan-569a3b24b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Twitter size={18} />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
