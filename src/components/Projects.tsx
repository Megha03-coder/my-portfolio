'use client'

import React, { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { projects } from '../lib/projects'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide()
      } else if (event.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-700 font-cmu max-w-2xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Content */}
          <div 
            ref={carouselRef}
            className="overflow-hidden rounded-xl"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-[#E5E5E5] rounded-xl overflow-hidden shadow-lg mx-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative overflow-hidden">
                        <div className="w-full h-64 lg:h-full bg-gradient-to-br from-[#D4D4D4] to-[#B0B0B0] flex items-center justify-center">
                          <div className="text-6xl font-playfair font-bold text-white">
                            {project.title.split(' ')[0]}
                          </div>
                        </div>
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-cmu">
                            Featured
                          </div>
                        )}
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-3xl font-playfair font-bold text-black mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 font-cmu mb-6 leading-relaxed text-lg">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-[#F5F5F5] text-black px-4 py-2 rounded-full text-sm font-cmu hover:bg-gray-800 hover:text-white transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-transparent border-2 border-gray-700 text-gray-700 px-6 py-3 rounded-xl font-cmu text-center transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-105 transform"
                          >
                            <Github size={18} />
                            <span>GitHub</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gray-800 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            className="btn-primary"
            onClick={() => router.push('/projects')}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
