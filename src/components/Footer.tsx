'use client'

import React from 'react'
import { Github, Linkedin, Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#E5E5E5] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Portfolio Section */}
          <div>
            <h4 className="text-lg font-playfair font-bold text-black mb-4">
              Portfolio
            </h4>
            <p className="text-gray-700 font-cmu text-sm leading-relaxed">
              A passionate developer creating amazing digital experiences. 
              I specialize in modern web technologies and user-centered design, 
              bringing creative ideas to life through clean, efficient code.
            </p>
          </div>
          
          {/* Portfolio Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold text-black mb-4">
              Portfolio
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-700 hover:text-black transition-colors duration-300 font-cmu">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-black transition-colors duration-300 font-cmu">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-700 hover:text-black transition-colors duration-300 font-cmu">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 hover:text-black transition-colors duration-300 font-cmu">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          
          {/* Footer Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold text-black mb-4">
              Footer
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-700 hover:text-black transition-colors duration-300 font-cmu">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-black transition-colors duration-300 font-cmu">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-700 hover:text-black transition-colors duration-300 font-cmu">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 hover:text-black transition-colors duration-300 font-cmu">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-playfair font-bold text-black mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-700 font-cmu">
                <MapPin size={16} />
                <span>Address</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-700 font-cmu">
                <Mail size={16} />
                <span>E-mail</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-700 font-cmu">
                <Phone size={16} />
                <span>Phone No</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Icons - Bottom Left */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all duration-300 transform"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all duration-300 transform"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all duration-300 transform"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all duration-300 transform"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            {/* Copyright - Bottom Right */}
            <p className="text-gray-700 font-cmu">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
