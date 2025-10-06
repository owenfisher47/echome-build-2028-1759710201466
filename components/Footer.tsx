'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const yearsToFuture = 2028 - currentYear

  return (
    <footer className="bg-card-bg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Future 2028</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Exploring the possibilities of tomorrow through cutting-edge technology, 
                sustainable innovation, and human advancement.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple p-3 rounded-lg">
                  <span className="text-white font-bold">{yearsToFuture} years to go</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Predictions', 'Technology', 'Research', 'About'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-cyber-blue transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:hello@future2028.com' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-cyber-blue hover:to-cyber-purple rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Future 2028. Imagining tomorrow, today.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyber-blue text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyber-blue text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}