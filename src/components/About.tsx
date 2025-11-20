'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Download, Eye, ChevronLeft, ChevronRight } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentExperience, setCurrentExperience] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const experiences = [
    {
      title: 'INTERNSHIP - Zidio Development',
      details: [
        'Developed an Excel Analytics Platform using MongoDB, Express, React, and Node.js with features like Excel upload, AI insights, and chart generation.',
        'Built an interactive blogging platform with authentication, real-time comments, and filtering. Implemented JWT authentication, admin dashboard, and data visualization features.'
      ],
      hasCertificate: true
    },
    {
      title: 'PROGRAMMER ANALYST - Cepialabs Pvt Ltd',
      details: [
        'Currently working as a Programmer Analyst at Cepialabs Pvt Ltd.',
        'currently working on TRAVIO, a travel website designed to connect people and travelers to plan their trips and explore.',
        'Technologies: Next.js, Tailwind CSS, Node.js, Python, and other modern web development tools.'
      ],
      hasCertificate: false
    }
  ]

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

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Megha Resume.pdf'
    link.download = 'Megha Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewCertificate = () => {
    window.open('/certificate (2).pdf', '_blank')
  }

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length)
  }

  const prevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#E5E5E5]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-black mb-8">
              About Megha Chauhan
            </h2>
            <div className="space-y-6 text-gray-700 font-cmu text-lg leading-relaxed">
              <p>
              I’m Megha Chauhan, a passionate and detail-oriented frontend developer with hands-on experience in building responsive and modern web applications.
              I enjoy turning creative ideas into functional, user-friendly designs using HTML, CSS, JavaScript, React.js, Next.js, TypeScript, and Tailwind CSS.
              Currently, I’m working as a Programmer Analyst at Cepialabs Pvt Ltd,
              where I’m enhancing my skills in real-world projects and collaborative development.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={handleDownloadCV}
                className="btn-primary flex items-center space-x-2"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
          
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="relative">
              <div className="bg-[#F5F5F5] p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-playfair font-bold text-black mb-6">Experience</h3>
                <div className="space-y-4 text-gray-700 font-cmu text-base leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-lg">{experiences[currentExperience].title}</h4>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                      {experiences[currentExperience].details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    {experiences[currentExperience].hasCertificate && (
                      <div className="mt-4">
                        <button
                          onClick={handleViewCertificate}
                          className="btn-primary flex items-center space-x-2 text-sm px-3 py-1"
                        >
                          <Eye size={16} />
                          <span>View Certificate</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={prevExperience}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                    aria-label="Previous experience"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="flex space-x-2">
                    {experiences.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentExperience ? 'bg-black' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextExperience}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                    aria-label="Next experience"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E5E5E5] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#D4D4D4] rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
