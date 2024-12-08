'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [investmentPeriod, setInvestmentPeriod] = useState(10)
  const [expectedReturnRate, setExpectedReturnRate] = useState(12)
  const [result, setResult] = useState<number>(0)

  const calculateSIP = useCallback(() => {
    const P = monthlyInvestment
    const t = investmentPeriod * 12
    const r = expectedReturnRate / 12 / 100

    const totalAmount = P * ((Math.pow(1 + r, t) - 1) / r) * (1 + r)
    setResult(Math.round(totalAmount))
  }, [monthlyInvestment, investmentPeriod, expectedReturnRate])

  useEffect(() => {
    calculateSIP()
  }, [calculateSIP])

  const totalInvestment = monthlyInvestment * investmentPeriod * 12
  const interestEarned = result - totalInvestment

  const data = [
    { name: 'Total Investment', value: totalInvestment },
    { name: 'Interest Earned', value: interestEarned },
  ]

  const COLORS = ['#3B82F6', '#10B981']

  return (
    <Card className="w-full max-w-3xl shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          SIP Calculator
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Plan your investments with precision
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="monthlyInvestment" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Monthly Investment (₹)
          </Label>
          <Slider
            id="monthlyInvestment"
            min={500}
            max={100000}
            step={500}
            value={[monthlyInvestment]}
            onValueChange={(value) => setMonthlyInvestment(value[0])}
            className="cursor-pointer"
          />
          <div className="text-right text-sm font-medium text-gray-900 dark:text-gray-100">₹{monthlyInvestment.toLocaleString()}</div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="investmentPeriod" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Investment Period (Years)
          </Label>
          <Slider
            id="investmentPeriod"
            min={1}
            max={30}
            step={1}
            value={[investmentPeriod]}
            onValueChange={(value) => setInvestmentPeriod(value[0])}
            className="cursor-pointer"
          />
          <div className="text-right text-sm font-medium text-gray-900 dark:text-gray-100">{investmentPeriod} years</div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="expectedReturnRate" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Expected Annual Return Rate (%)
          </Label>
          <Slider
            id="expectedReturnRate"
            min={1}
            max={30}
            step={0.5}
            value={[expectedReturnRate]}
            onValueChange={(value) => setExpectedReturnRate(value[0])}
            className="cursor-pointer"
          />
          <div className="text-right text-sm font-medium text-gray-900 dark:text-gray-100">{expectedReturnRate}%</div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-4">
        <div
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 animate-scale"
          key={result}
        >
          ₹{result.toLocaleString()}
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-between w-full text-sm">
          <div className="text-gray-700 dark:text-gray-300">Total Investment: <span className="font-semibold text-gray-900 dark:text-gray-100">₹{totalInvestment.toLocaleString()}</span></div>
          <div className="text-gray-700 dark:text-gray-300">Interest Earned: <span className="font-semibold text-gray-900 dark:text-gray-100">₹{interestEarned.toLocaleString()}</span></div>
        </div>
      </CardFooter>
    </Card>
  )
}

