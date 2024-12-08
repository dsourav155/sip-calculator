'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function InvestmentRecommendation() {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [monthlyExpenses, setMonthlyExpenses] = useState('')
  const [financialGoal, setFinancialGoal] = useState('')
  const [timeframe, setTimeframe] = useState('')
  const [recommendation, setRecommendation] = useState<string | null>(null)

  const calculateRecommendation = () => {
    const income = parseFloat(monthlyIncome)
    const expenses = parseFloat(monthlyExpenses)
    const goal = parseFloat(financialGoal)
    const years = parseFloat(timeframe)

    if (isNaN(income) || isNaN(expenses) || isNaN(goal) || isNaN(years)) {
      setRecommendation('Please enter valid numbers for all fields.')
      return
    }

    const monthlySavings = income - expenses
    const monthsToGoal = years * 12
    const monthlyInvestmentNeeded = goal / monthsToGoal

    if (monthlyInvestmentNeeded > monthlySavings) {
      setRecommendation(`Based on your current savings of ₹${monthlySavings.toFixed(2)} per month, you may need to increase your income or reduce expenses to reach your goal of ₹${goal.toLocaleString()} in ${years} years. Consider aiming to invest ₹${monthlyInvestmentNeeded.toFixed(2)} monthly.`)
    } else {
      const percentageOfSavings = (monthlyInvestmentNeeded / monthlySavings) * 100
      setRecommendation(`To reach your goal of ₹${goal.toLocaleString()} in ${years} years, we recommend investing ₹${monthlyInvestmentNeeded.toFixed(2)} monthly. This is approximately ${percentageOfSavings.toFixed(1)}% of your monthly savings.`)
    }
  }

  return (
    <Card className="w-full max-w-3xl mt-8 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Investment Recommendation</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Enter your financial details to get a personalized investment recommendation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="monthlyIncome" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Monthly Income (₹)
            </Label>
            <Input
              id="monthlyIncome"
              type="number"
              placeholder="e.g., 50000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthlyExpenses" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Monthly Expenses (₹)
            </Label>
            <Input
              id="monthlyExpenses"
              type="number"
              placeholder="e.g., 30000"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="financialGoal" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Financial Goal (₹)
            </Label>
            <Input
              id="financialGoal"
              type="number"
              placeholder="e.g., 1000000"
              value={financialGoal}
              onChange={(e) => setFinancialGoal(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="timeframe" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Timeframe (Years)
            </Label>
            <Input
              id="timeframe"
              type="number"
              placeholder="e.g., 5"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={calculateRecommendation}>Get Recommendation</Button>
        {recommendation && (
          <div className="text-sm text-gray-700 dark:text-gray-300 mt-4">
            {recommendation}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

