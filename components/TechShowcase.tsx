'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface TechItem {
  id: string
  name: string
  category: string
  description: string
  impact: number
  availability: string
}

const techItems: TechItem[] = [
  {
    id: 'holographic-displays',
    name: 'Holographic Displays',
    category: 'Computing',
    description: 'Three-dimensional holographic interfaces replace traditional screens in offices and homes.',
    impact: 95,
    availability: 'Consumer Ready'
  },
  {
    id: 'autonomous-transport',
    name: 'Autonomous Transport',
    category: 'Transportation',
    description: 'Fully autonomous vehicles and drones handle 80% of urban transportation needs.',
    impact: 88,
    availability: 'Widespread'
  },
  {
    id: 'synthetic-biology',
    name: 'Synthetic Biology',
    category: 'Healthcare',
    description: 'Engineered organisms produce medicines, materials, and food with precision.',
    impact: 92,
    availability: 'Clinical Trials'
  },
  {
    id: 'space-elevators',
    name: 'Space Elevators',
    category: 'Space Tech',
    description: 'Carbon nanotube tethers enable low-cost access to space and orbital habitats.',
    impact: 85,
    availability: 'Construction Phase'
  }
]

export default function TechShowcase() {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null)

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-gradient">Tech Showcase</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Revolutionary technologies transforming every aspect of human life
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {techItems.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                selectedTech?.id === tech.id 
                  ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple' 
                  : 'bg-card-bg hover:bg-opacity-80'
              }`}
              onClick={() => setSelectedTech(tech)}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{tech.name}</h3>
                <span className="text-sm px-3 py-1 rounded-full bg-cyber-purple bg-opacity-30 text-cyber-purple">
                  {tech.category}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Impact Score</span>
                    <span>{tech.impact}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.impact}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-cyber-blue to-neon-green h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:pl-8">
          {selectedTech ? (
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-card-bg p-8 rounded-xl cyber-border h-full"
            >
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                {selectedTech.name}
              </h3>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-sm font-bold mb-4">
                  {selectedTech.availability}
                </span>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedTech.description}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Global Impact</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-cyber-pink to-neon-green h-3 rounded-full"
                        style={{ width: `${selectedTech.impact}%` }}
                      />
                    </div>
                    <span className="text-white font-bold">{selectedTech.impact}%</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-600">
                  <p className="text-sm text-gray-400">
                    Category: <span className="text-cyber-blue">{selectedTech.category}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-card-bg p-8 rounded-xl cyber-border h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                  <span className="text-2xl">🚀</span>
                </div>
                <p className="text-gray-400">Select a technology to explore its impact on the future</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}