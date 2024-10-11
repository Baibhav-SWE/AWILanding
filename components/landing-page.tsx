'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Zap, Book, BarChart, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Zap className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Brainwave Analysis",
      description: "Our advanced sensors capture your unique brainwave patterns during various learning activities."
    },
    {
      icon: <Book className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Personalized Strategies",
      description: "Our AI analyzes your data to identify the most effective learning methods for your brain."
    },
    {
      icon: <BarChart className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Continuous Improvement",
      description: "Track your progress and receive ongoing adjustments to optimize your learning experience."
    }
  ]

  const brainParts = [
    { id: 'frontal', name: 'Frontal Lobe', strategy: 'Apprentice Learning', color: '#4a90e2' },
    { id: 'parietal', name: 'Parietal Lobe', strategy: 'Incidental Learning', color: '#50c878' },
    { id: 'temporal', name: 'Temporal Lobe', strategy: 'Deductive Learning', color: '#f39c12' },
    { id: 'occipital', name: 'Occipital Lobe', strategy: 'Visual Learning', color: '#e74c3c' },
    { id: 'cerebellum', name: 'Cerebellum', strategy: 'Motor Learning', color: '#9b59b6' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800 sticky top-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-2xl font-bold text-gray-100">BrainWave Learning</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#pricing">
            Pricing
          </Link>
        </nav>
        <Button
          className="md:hidden ml-auto"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      {isMenuOpen && (
        <motion.nav
          className="md:hidden flex flex-col items-center py-4 bg-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Link className="text-sm font-medium hover:text-blue-400 py-2" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 py-2" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 py-2" href="#pricing">
            Pricing
          </Link>
        </motion.nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Unlock Your Learning Potential with Brainwave Technology
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                    Discover personalized learning strategies tailored to your unique brainwave patterns. Learn faster,
                    retain more, and achieve your educational goals.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="text-blue-400 border-blue-400 hover:bg-blue-950 transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
              <div className="w-full h-[400px] lg:h-[600px] relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Simplified brain shape */}
                  <path
                    d="M100,20 C140,20 170,50 170,90 C170,130 140,160 100,160 C60,160 30,130 30,90 C30,50 60,20 100,20 Z"
                    fill="#2c3e50"
                    stroke="#34495e"
                    strokeWidth="2"
                  />
                  {/* Brain parts */}
                  {brainParts.map((part, index) => (
                    <motion.path
                      key={part.id}
                      d={getBrainPartPath(part.id)}
                      fill={part.color}
                      opacity="0.7"
                      filter="url(#glow)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  ))}
                  {/* Strategy labels */}
                  {brainParts.map((part, index) => (
                    <motion.text
                      key={`${part.id}-text`}
                      x={getTextPosition(part.id).x}
                      y={getTextPosition(part.id).y}
                      fill={part.color}
                      fontSize="8"
                      textAnchor="middle"
                      filter="url(#glow)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.5 }}
                    >
                      {part.strategy}
                    </motion.text>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05, backgroundColor: '#1e3a8a' }}
                  onClick={() => setActiveFeature(index)}
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-12 p-6 bg-gray-900 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
              <p className="text-gray-400">{features[activeFeature].description}</p>
            </motion.div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col p-6 bg-gray-800 rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg text-gray-300 mb-4">
                  "BrainWave Learning helped me improve my study efficiency by 40%. I'm now acing my exams with less
                  stress!"
                </p>
                <p className="font-semibold text-blue-400">Bansaj Smith, College Student</p>
              </motion.div>
              <motion.div
                className="flex flex-col p-6 bg-gray-800 rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg text-gray-300 mb-4">
                  "As a teacher, I've seen remarkable improvements in my students' engagement and retention using
                  BrainWave Learning techniques."
                </p>
                <p className="font-semibold text-blue-400">Aiswani Reddy, High School Teacher</p>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Learning?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who have already unlocked their full potential with BrainWave Learning.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-gray-100"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors" type="submit">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-blue-400 transition-colors" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2023 BrainWave Learning. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-blue-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-blue-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function getBrainPartPath(id: string) {
  // These paths are simplified representations of brain parts
  switch (id) {
    case 'frontal':
      return "M100,20 C120,20 140,30 150,50 C130,60 110,60 90,60 C80,40 90,20 100,20 Z"
    case 'parietal':
      return "M150,50 C160,70 170,90 160,110 C140,100 120,90 100,90 C110,70 130,60 150,50 Z"
    case 'temporal':
      return "M90,60 C70,70 50,90 40,110 C60,120 80,110 100,90 C100,80 100,70 90,60 Z"
    case 'occipital':
      return "M160,110 C150,130 130,150 100,160 C70,150 50,130 40,110 C60,100 80,90 100,90 C120,90 140,100 160,110 Z"
    case 'cerebellum':
      return "M100,160 C120,158 140,150 150,140 C140,145 120,148 100,150 C80,148 60,145 50,140 C60,150 80,158 100,160 Z"
    default:
      return ""
  }
}

function getTextPosition(id: string) {
  // These positions are approximations and may need adjustment
  switch (id) {
    case 'frontal':
      return { x: 100, y: 40 }
    case 'parietal':
      return { x: 150, y: 80 }
    case 'temporal':
      return { x: 50, y: 100 }
    case 'occipital':
      return { x: 100, y: 140 }
    case 'cerebellum':
      return { x: 100, y: 170 }
    default:
      return { x: 0, y: 0 }
  }
}