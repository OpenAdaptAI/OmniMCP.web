import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer, faBars, faX } from '@fortawesome/free-solid-svg-icons'
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
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        <div className={styles.section}>
            <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo - Left Aligned */}
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
                        
                        {/* Navigation - Centered on Desktop */}
                        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
                            <Link href="#features" className="text-white hover:text-blue-300 transition-colors font-medium">
                                Features
                            </Link>
                            <Link href="#overview" className="text-white hover:text-blue-300 transition-colors font-medium">
                                How It Works
                            </Link>
                            <Link href="#pricing" className="text-white hover:text-blue-300 transition-colors font-medium">
                                Pricing
                            </Link>
                            <Link href="#trial" className="text-white hover:text-blue-300 transition-colors font-medium">
                                Free Trial
                            </Link>
                        </nav>
                        
                        {/* Social Links - Right Aligned */}
                        <div className="hidden md:flex items-center space-x-4">
                            <a 
                                href="https://github.com/OpenAdaptAI/OmniMCP" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} className="text-xl" />
                            </a>
                            <a 
                                href="https://discord.gg/fEEBqRryep" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="Discord"
                            >
                                <FontAwesomeIcon icon={faDiscord} className="text-xl" />
                            </a>
                            
                            {/* GitHub Stars/Fork */}
                            <div className="flex items-center space-x-2 ml-2">
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
                                <a
                                    className="github-button"
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
                        </div>
                        
                        {/* Mobile menu button */}
                        <button 
                            className="md:hidden text-white p-2"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <FontAwesomeIcon icon={menuOpen ? faX : faBars} className="text-xl" />
                        </button>
                    </div>
                </div>
            </header>
            
            {/* Mobile menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 md:hidden pt-20">
                    <div className="container mx-auto px-6 py-8">
                        <nav className="flex flex-col space-y-6 text-center text-xl">
                            <Link 
                                href="#features" 
                                className="text-white hover:text-blue-300 transition-colors py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link 
                                href="#overview" 
                                className="text-white hover:text-blue-300 transition-colors py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                How It Works
                            </Link>
                            <Link 
                                href="#pricing" 
                                className="text-white hover:text-blue-300 transition-colors py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link 
                                href="#trial" 
                                className="text-white hover:text-blue-300 transition-colors py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                Free Trial
                            </Link>
                        </nav>
                        
                        <div className="flex justify-center space-x-8 mt-12">
                            <a 
                                href="https://github.com/OpenAdaptAI/OmniMCP" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                            </a>
                            <a 
                                href="https://discord.gg/fEEBqRryep" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="Discord"
                            >
                                <FontAwesomeIcon icon={faDiscord} className="text-3xl" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="relative flex items-center justify-center">
                <div className="relative z-30 py-5 text-2xl">
                    <div className="text-center pt-32"> {/* Increased top padding to accommodate fixed header */}
                        <div className="grid grid-flow-row auto-rows-max">
                            <h1 className="text-6xl mb-6 md:text-7xl">
                                <span className="font-thin">Omni</span>MCP
                            </h1>
                            <h2 className="text-4xl mt-0 mb-8 font-extralight">
                                Powerful UI Automation with AI Understanding
                            </h2>
                            <div className="mb-8 mx-auto max-w-4xl">
                                <p className="text-xl font-light">
                                    OmniMCP provides rich UI context and powerful interaction capabilities to AI models through 
                                    Model Context Protocol (MCP) and OmniParser.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center mb-8 max-w-4xl mx-auto p-4 rounded-xl bg-white/10">
                              <div className="md:w-2/5 mb-6 md:mb-0 text-left">
                                <h3 className="text-xl font-semibold mb-3">Core Features:</h3>
                                <ul className="space-y-2 pl-6 list-disc">
                                    <li>Rich Visual Context</li>
                                    <li>Natural Language Interface</li>
                                    <li>Comprehensive Interactions</li>
                                    <li>Structured Types</li>
                                    <li>Robust Error Handling</li>
                                </ul>
                                </div>
                                <div className="md:w-3/5 md:pl-6 text-left">
                                  <pre className="bg-black/30 p-4 rounded-lg text-sm overflow-x-auto w-full">
                                    <code className="text-xs sm:text-sm">
                                {`from omnimcp import Omni

omni = Omni()
if "login form" in omni.get_state():
    await omni.act("Enter email in the first field")
    await omni.act("Click Login")
else:
    await omni.act("Click Sign up")`}
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
            </div>
        </div>
    )
}
