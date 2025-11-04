'use client'

import React, { useEffect, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../../lib/projects'

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-20">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-6">
            All Projects
          </h1>
          <p className="text-xl text-gray-700 font-cmu max-w-2xl mx-auto">
            A complete showcase of my work and projects that demonstrate my skills and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-[#E5E5E5] rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-[#D4D4D4] to-[#B0B0B0] flex items-center justify-center">
                  <div className="text-4xl font-playfair font-bold text-white">
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
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 font-cmu mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#F5F5F5] text-black px-3 py-1 rounded-full text-sm font-cmu hover:bg-gray-800 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-transparent border-2 border-gray-700 text-gray-700 px-4 py-2 rounded-xl font-cmu text-center transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-105 transform"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-xl font-cmu text-center transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 transform"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
