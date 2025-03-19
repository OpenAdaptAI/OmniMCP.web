import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faDiscord,
    faGithub,
    faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

import AnimatedBackground from '@components/AnimatedBackground'
import EmailForm from '@components/EmailForm'

import styles from './MastHead.module.css'

export default function MastHead() {
    return (
        <div className={styles.section}>
            {/* Add a navbar/header at the top with logo */}
            <div className="absolute top-0 left-0 right-0 z-40 p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Image 
                        src="/images/logo.svg" 
                        alt="OmniMCP Logo" 
                        width={40} 
                        height={40} 
                        className="mr-2"
                    />
                    <span className="text-2xl font-semibold text-white">OmniMCP</span>
                </div>
                
                <nav className="hidden md:flex space-x-6">
                    <Link href="#features" className="text-white hover:text-blue-300 transition-colors">
                        Features
                    </Link>
                    <Link href="#overview" className="text-white hover:text-blue-300 transition-colors">
                        How It Works
                    </Link>
                    <Link href="#pricing" className="text-white hover:text-blue-300 transition-colors">
                        Pricing
                    </Link>
                    <Link href="#trial" className="text-white hover:text-blue-300 transition-colors">
                        Free Trial
                    </Link>
                </nav>
            </div>
            
            <div className="relative flex items-center justify-center">
                <div className="relative z-30 py-5 text-2xl">
                    <div className="text-center pt-20"> {/* Added more top padding to accommodate the navbar */}
                        <div className="grid grid-flow-row auto-rows-max">
                            <h1 className="text-6xl mb-6 md:text-7xl">
                                <span className="font-thin">Omni</span>MCP
                            </h1>
                            <h2 className="text-4xl mt-0 mb-8 font-extralight">
                                Powerful UI Automation with AI Understanding
                            </h2>
                            <div className="mb-8 mx-auto max-w-4xl">
                                <p className="text-xl font-light">
                                    OmniMCP provides rich UI context and interaction capabilities to AI models through 
                                    Model Context Protocol (MCP) and OmniParser.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center mb-8 max-w-3xl mx-auto p-4 rounded-xl bg-white/10">
                                <div className="md:w-1/2 mb-6 md:mb-0 text-left">
                                    <h3 className="text-xl font-semibold mb-3">Core Features:</h3>
                                    <ul className="space-y-2 pl-6 list-disc">
                                        <li>Rich Visual Context</li>
                                        <li>Natural Language Interface</li>
                                        <li>Comprehensive Interactions</li>
                                        <li>Structured Types</li>
                                        <li>Robust Error Handling</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2 md:pl-6 text-left">
                                    <pre className="bg-black/30 p-4 rounded-lg text-sm overflow-x-auto">
                                        <code>
{`from omnimcp import OmniMCP

async def main():
    mcp = OmniMCP()
    
    # Get current UI state
    state = await mcp.get_screen_state()
    
    # Click a button
    result = await mcp.click_element(
        "Submit button"
    )`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                            <div id="register">
                                <div>
                                    <Link
                                        className="btn bg-transparent border-2 border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300 mt-4 mb-6 hover:bg-transparent"
                                        href="#pricing"
                                    >
                                        See Pricing
                                    </Link>
                                    <Link
                                        className="btn btn-primary mt-4 mb-6 ml-3"
                                        href="#trial"
                                    >
                                        Start Free Trial
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-6">
                                <a 
                                    href="https://github.com/OpenAdaptAI/OmniMCP" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-300 hover:text-blue-200"
                                >
                                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed top-0 right-0 z-50">
                    {/* Github Icon */}
                    <div
                        className="relative z-50 inline-block mr-3"
                        style={{ transform: 'translateY(-5px)' }}
                    >
                        <a href="https://github.com/OpenAdaptAI/OmniMCP" aria-label="Join us on Github" title="Join us on Github">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="text-2xl"
                            />
                        </a>
                    </div>
                    {/* Discord Icon */}
                    <div
                        className="relative z-50 inline-block mr-3"
                        style={{ transform: 'translateY(-5px)' }}
                    >
                        <a href="https://discord.gg/fEEBqRryep" aria-label="Join us on Discord" title="Join us on Discord">
                            <FontAwesomeIcon
                                icon={faDiscord}
                                className="text-2xl"
                            />
                        </a>
                    </div>
                    {/* Github icons */}
                    <div className="relative z-50 inline-block mr-2 mt-2">
                        <a
                            className="github-button mr-2"
                            href="https://github.com/OpenAdaptAI/OmniMCP/fork"
                            data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark;"
                            data-icon="octicon-repo-forked"
                            data-size="large"
                            data-show-count="true"
                            aria-label="Fork OpenAdaptAI/OmniMCP on GitHub"
                        >
                            Fork
                        </a>
                    </div>
                    <div className="relative z-50 inline-block mr-2 mt-2">
                        <a
                            className="github-button"
                            href="https://github.com/OpenAdaptAI/OmniMCP"
                            data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark;"
                            data-icon="octicon-star"
                            data-size="large"
                            data-show-count="true"
                            aria-label="Star OpenAdaptAI/OmniMCP on GitHub"
                        >
                            Star
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
