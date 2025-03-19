import { useRef, useState } from 'react'
import Head from 'next/head'

import MastHead from '@components/MastHead'
import FeaturesSection from '@components/FeaturesSection'
import HowItWorks from '@components/HowItWorks'
import PricingPlans from '@components/PricingPlans'
import TrialForm from '@components/TrialForm'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div>
            <Head>
                <title>OmniMCP - Powerful UI Automation with AI</title>
                <meta name="description" content="OmniMCP provides rich UI context and interaction capabilities to AI models through Model Context Protocol (MCP) and OmniParser." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <MastHead />
            <FeaturesSection />
            <HowItWorks />
            <PricingPlans />
            <TrialForm />
            <Footer />
            
            {/* Script for GitHub buttons */}
            <script async defer src="https://buttons.github.io/buttons.js"></script>
        </div>
    )
}
