import { useState, useEffect, useRef } from 'react'

// Utility functions for scroll animations

export const useScrollAnimation = () => {
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

  return { isVisible, sectionRef }
}

// Animation delay calculator for staggered animations
export const getAnimationDelay = (index: number, baseDelay: number = 100) => {
  return `${index * baseDelay}ms`
}

// Common animation classes
export const animationClasses = {
  fadeIn: 'transition-all duration-1000',
  slideInLeft: 'transition-all duration-1000',
  slideInRight: 'transition-all duration-1000',
  scaleUp: 'transition-all duration-500 hover:scale-105',
}

// Visibility states for animations
export const getVisibilityClasses = (isVisible: boolean, direction: 'up' | 'left' | 'right' = 'up') => {
  const baseClasses = isVisible ? 'opacity-100' : 'opacity-0'
  
  switch (direction) {
    case 'up':
      return `${baseClasses} ${isVisible ? 'translate-y-0' : 'translate-y-10'}`
    case 'left':
      return `${baseClasses} ${isVisible ? 'translate-x-0' : 'translate-x-[-50px]'}`
    case 'right':
      return `${baseClasses} ${isVisible ? 'translate-x-0' : 'translate-x-[50px]'}`
    default:
      return baseClasses
  }
}
