'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#F5F5F5] pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-gray-800 leading-tight">
                Hello, I'm{' '}
                <span className="text-black">Megha</span>
              </h1>
              <p className="text-xl text-gray-700 font-cmu max-w-lg">
                A passionate full-stack developer creating beautiful, functional, 
                and user-centered digital experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="flex space-x-6 pt-8">
              <a 
                href="https://github.com/Megha03-coder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors duration-300 text-lg hover:scale-110 transform"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/megha-chauhan-569a3b24b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors duration-300 text-lg hover:scale-110 transform"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="meghachauhan310@gmail.com"
                className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors duration-300 text-lg hover:scale-110 transform"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
          
          {/* Image/Visual Content */}
          <div 
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 bg-[#E5E5E5] rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="w-64 h-64 rounded-full overflow-hidden relative">
                  <Image
                    src="Megha-pic.jpg"
                    alt="Tabrej Profile"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 256px, 256px"
                    quality={90}
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#E5E5E5] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#D4D4D4] rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
