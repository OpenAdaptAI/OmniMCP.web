import React from 'react'
import Link from 'next/link'

export default function PricingPlans() {
  const plans = [
    {
      name: "Developer Plan",
      price: "$49",
      period: "month",
      features: [
        "Full access to OmniMCP features",
        "Unlimited automation workflows",
        "Community support",
        "Regular updates and enhancements"
      ],
      highlighted: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Team Plan",
      price: "$199",
      period: "month",
      features: [
        "Up to 5 team members",
        "Collaboration tools and shared workspaces",
        "Priority email support",
        "Advanced analytics and usage insights"
      ],
      highlighted: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited users",
        "Dedicated infrastructure",
        "24/7 premium support",
        "Personalized onboarding and training"
      ],
      highlighted: false,
      buttonText: "Contact Sales"
    }
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock powerful, generalizable UI automation without surprises. Choose the plan that's right for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden ${
                plan.highlighted ? 'ring-2 ring-blue-400 transform md:-translate-y-2' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-300">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#trial"
                  className={`block w-full py-3 px-4 rounded-lg text-center font-semibold transition-colors duration-300 ${
                    plan.highlighted
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 p-8 rounded-xl shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-white">All plans include:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Free 14-day trial, cancel anytime</span>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Comprehensive documentation</span>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Secure, reliable cloud infrastructure</span>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Regular feature updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
