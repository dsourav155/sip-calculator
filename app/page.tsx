'use client'

import { motion } from 'framer-motion'
import SIPCalculator from '@/components/sip-calculator'
import SIPExplanation from '@/components/sip-explanation'
import InvestmentRecommendation from '@/components/investment-recommendation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      SIP Calculator
      </motion.h1>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-3xl"
      >
        <SIPCalculator />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-3xl"
      >
        <InvestmentRecommendation />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full max-w-3xl"
      >
        <SIPExplanation />
      </motion.div>
      
    </main>
  )
}

