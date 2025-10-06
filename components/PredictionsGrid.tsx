'use client'

import { motion } from 'framer-motion'
import { Brain, Leaf, Rocket, Shield, Zap, Globe } from 'lucide-react'

interface Prediction {
  icon: React.ReactNode
  title: string
  description: string
  year: string
  color: string
}

const predictions: Prediction[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Companions",
    description: "Personal AI assistants with emotional intelligence become standard in every home.",
    year: "2028",
    color: "from-cyber-blue to-cyber-purple"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Carbon Negative Cities",
    description: "Major metropolitan areas achieve net negative carbon emissions through advanced technology.",
    year: "2028",
    color: "from-neon-green to-cyber-blue"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Mars Colonies",
    description: "First permanent human settlements established on Mars with 10,000+ residents.",
    year: "2028",
    color: "from-cyber-pink to-cyber-purple"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quantum Internet",
    description: "Unhackable quantum communication networks protect global digital infrastructure.",
    year: "2028",
    color: "from-cyber-purple to-cyber-pink"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fusion Power",
    description: "Commercial fusion reactors provide clean, unlimited energy to major cities worldwide.",
    year: "2028",
    color: "from-cyber-blue to-neon-green"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Neural Interfaces",
    description: "Brain-computer interfaces enable direct thought-to-digital communication.",
    year: "2028",
    color: "from-cyber-pink to-cyber-blue"
  }
]

export default function PredictionsGrid() {
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
          <span className="text-gradient">Future Predictions</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Breakthrough innovations that will reshape our world by 2028
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {predictions.map((prediction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="bg-card-bg p-6 rounded-xl cyber-border hover:shadow-2xl transition-all duration-300"
          >
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${prediction.color} flex items-center justify-center mb-4 text-white`}>
              {prediction.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{prediction.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{prediction.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-cyber-blue font-bold">{prediction.year}</span>
              <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${prediction.color} text-xs font-bold text-white`}>
                PREDICTED
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}