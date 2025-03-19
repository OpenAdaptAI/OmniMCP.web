import React from 'react'
import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    {
      title: "Spatial Feature Understanding",
      description: "OmniMCP develops a deep understanding of the user interface's visual layout using OmniParser. It performs detailed visual parsing, segmenting the screen and identifying all interactive elements, their types, content, and relationships.",
      image: "/images/spatial-features.png",
    },
    {
      title: "Temporal Feature Understanding",
      description: "To capture dynamic UI aspects, OmniMCP tracks user interactions and state transitions, building a Process Graph that represents user workflow patterns. This temporal understanding allows models to reason about interaction history.",
      image: "/images/temporal-features.png",
    },
    {
      title: "Internal API Generation",
      description: "Using the rich spatial and temporal context, OmniMCP leverages a Large Language Model to generate a context-specific API through In-Context Learning. This internal API reflects the understood UI features for precise interactions.",
      image: "/images/api-generation.png",
    },
    {
      title: "External API Publication (MCP)",
      description: "Finally, OmniMCP exposes the dynamically generated API through the Model Context Protocol (MCP). This provides a consistent interface for both humans and AI models to interact with UI systems.",
      image: "/images/api-publication.png",
    },
  ]

  return (
    <section id="overview" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How OmniMCP Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our four-step process creates rich UI understanding for AI models
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="md:w-1/2">
                <div className="bg-gray-700 p-6 rounded-xl flex justify-center">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{index + 1}. {step.title}</h3>
                <p className="text-lg text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
