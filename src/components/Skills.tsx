'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Code, Database, Cloud, Monitor } from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Javasript', level: 70 },
    { name: 'MongoDB', level: 78 },
    { name: 'Tailwind CSS' , level:89},
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#E5E5E5]">
      <div className="container mx-auto px-6">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-black mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-700 font-cmu max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-[#F5F5F5] p-6 rounded-xl shadow-lg transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-[-50px]'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="text-center">
                <h3 className="text-xl font-playfair font-bold text-black mb-4">
                  {skill.name}
                </h3>
                <div className="w-full bg-[#E5E5E5] rounded-full h-3 mb-2">
                  <div 
                    className={`bg-gradient-to-r from-[#D4D4D4] to-[#B0B0B0] h-3 rounded-full transition-all duration-2000 ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  ></div>
                </div>
                <p className="text-gray-700 font-cmu text-sm">
                  {skill.level}%
                </p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-playfair font-bold text-black mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Figma', 'Tailwind CSS', 'MongoDB', 'Redis', 
              'GraphQL', 'Jest', 'Cypress', 'Linux', 'Vercel'
            ].map((tech, index) => (
              <span
                key={tech}
                className={`bg-[#F5F5F5] text-black px-4 py-2 rounded-full font-cmu transition-all duration-500 hover:bg-gray-800 hover:text-white hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
                style={{
                  transitionDelay: `${index * 50 + 1200}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
