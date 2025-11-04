'use client'

import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F5F5F5]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-playfair font-bold text-gray-800">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-500 font-cmu hover:shadow-lg hover:scale-105 transform relative overflow-hidden group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-500 font-cmu hover:shadow-lg hover:scale-105 transform relative overflow-hidden group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-500 font-cmu hover:shadow-lg hover:scale-105 transform relative overflow-hidden group"
            >
              <span className="relative z-10">Skills</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-500 font-cmu hover:shadow-lg hover:scale-105 transform relative overflow-hidden group"
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-500 font-cmu hover:shadow-lg hover:scale-105 transform relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>

          <button className="btn-primary">
            Get In Touch
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
