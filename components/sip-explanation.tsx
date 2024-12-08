'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function SIPExplanation() {
  const faqItems = [
    {
      question: "What is SIP?",
      answer: "Systematic Investment Plan (SIP) is an investment strategy where you invest a fixed amount regularly in mutual funds or other securities. It helps in averaging out the cost of investment over time and can potentially lead to better returns in the long run."
    },
    {
      question: "How does SIP work?",
      answer: "SIP works on the principle of rupee cost averaging. By investing a fixed amount regularly, you buy more units when prices are low and fewer units when prices are high. This approach can help reduce the impact of market volatility on your investments."
    },
    {
      question: "What are the benefits of SIP?",
      answer: "SIP offers several benefits: 1) Disciplined investing, 2) Rupee cost averaging, 3) Power of compounding, 4) Flexibility to start with small amounts, 5) Convenience of automated investing."
    },
    {
      question: "Is SIP suitable for everyone?",
      answer: "SIP can be suitable for many investors, especially those looking for a disciplined approach to long-term wealth creation. However, it's always recommended to consult with a financial advisor to determine if SIP aligns with your financial goals and risk tolerance."
    },
    {
      question: "Who Built This Website?",
      answer: (
        <>
          This website is built by{' '}
          <a 
            href="https://www.linkedin.com/in/dsourav155/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
          >
            Sourav Dhiman
          </a>
          , feel free to connect with me on LinkedIn.
        </>
      )
    }
  ]

  return (
    <Card className="w-full max-w-3xl mt-8 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Learn More About SIP</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

