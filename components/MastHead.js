import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faFilePdf } from '@fortawesome/free-solid-svg-icons';
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
            {/* Header section remains unchanged */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
                {/* Header content unchanged */}
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
                            <Link href="https://github.com/OpenAdaptAI/OmniMCP/blob/main/paper/omnimcp_whitepaper.pdf" 
                                className="text-white hover:text-blue-300 transition-colors font-medium"
                                target="_blank"
                                rel="noopener noreferrer">
                                Whitepaper
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
            
            {/* Mobile menu - unchanged */}
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
                <div className="relative z-30 py-5 w-full max-w-7xl mx-auto px-4">
                    <div className="text-center pt-32"> {/* Increased top padding to accommodate fixed header */}
                        <div className="grid grid-flow-row auto-rows-max">
                            <div className="text-center pt-32">
                              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 px-5 py-1 shadow-md">
                                <span className="text-sm font-semibold text-white uppercase tracking-wider">Automate Any UI Effortlessly</span>
                              </div>
                              <h1 className="text-6xl mb-6 md:text-7xl">
                                <span className="font-thin">Omni</span>MCP
                              </h1>
                              <h2 className="text-4xl mt-0 mb-8 font-extralight">
                                Agent-Native Interface for Vision-Language UI Automation
                              </h2>
                              <div className="mb-8 mx-auto max-w-4xl">
                                <p className="text-xl font-light">
                                  Unlock powerful automation through scene graph tracking, rich visual context, persistent memory,
                                  and intuitive interactions powered by OmniParser and the Model Context Protocol (MCP).
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-stretch mb-12 max-w-6xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-950/80 to-blue-950/80 shadow-2xl border border-indigo-900/50">
                              {/* Feature list - Left side */}
                              <div className="md:w-1/3 p-6 bg-indigo-950/30 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-6 text-white">Core Features:</h3>
                                <ul className="space-y-4">
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                    <span className="text-lg font-light">Agent-Native Interface</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                    <span className="text-lg font-light">Rich Visual Context</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                    <span className="text-lg font-light">Scene Graph Tracking</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                    <span className="text-lg font-light">Memory Persistence</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                    <span className="text-lg font-light">Natural Language UI</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                    <span className="text-lg font-light">Comprehensive Actions</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                    <span className="text-lg font-light">Structured Types</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                    <span className="text-lg font-light">Robust Error Handling</span>
                                  </li>
                                </ul>
                              </div>
                            
                              {/* Code example - Right side (expanded width, reduced padding) */}
                              <div className="md:w-2/3 p-6 flex flex-col">
                                <pre className="flex-grow bg-black/50 p-4 rounded-xl text-sm overflow-x-auto shadow-inner border border-gray-800/50 text-left">
                                  <code className="text-base font-mono whitespace-pre">
                            {`from omnimcp import Omni
                            
omni = Omni()
with omni.session():
    email = omni.recall("credentials.email")
                            
    if omni.is("Login form ready"):
        omni.do(f"Enter {email}")
        omni.do("Submit login")
                            
    omni.store(
        "user.last_transaction_date",
        omni.observe("latest transaction date")
    )`}
                                  </code>
                                </pre>
                                <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                                  <p className="text-sm text-gray-300 italic">Simple, powerful interface for UI automation</p>
                                  <a
                                    href="https://github.com/OpenAdaptAI/OmniMCP/blob/main/paper/omnimcp_whitepaper.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-300 hover:text-blue-200 transition-colors flex items-center mt-2 md:mt-0"
                                  >
                                    <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                                    Read the technical whitepaper
                                  </a>
                                </div>
                              </div>
                            </div>

                            
                            {/* CTA Buttons */}
                            <div id="register" className="mb-10">
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        className="btn w-full sm:w-auto bg-transparent border-2 border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300 hover:bg-blue-900/20 transition-all"
                                        href="#pricing"
                                    >
                                        See Pricing
                                    </Link>
                                    <Link
                                        className="btn w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 border-0 shadow-lg hover:shadow-xl transition-all"
                                        href="#trial"
                                    >
                                        Start Free Trial
                                    </Link>
                                </div>
                            </div>
                            
                            {/* Technical Deep Dive Card */}
                            <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-8 rounded-2xl backdrop-blur-sm shadow-xl border border-indigo-800/30 hover:border-indigo-700/40 transition-all">
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="md:w-3/4 text-left">
                                        <h3 className="text-2xl font-bold mb-3 text-white">Technical Deep Dive</h3>
                                        <p className="text-gray-200 mb-0">Understand the architecture and capabilities of OmniMCP in depth with our comprehensive technical whitepaper.</p>
                                    </div>
                                    <div className="md:w-1/4 flex justify-center md:justify-end">
                                        <a 
                                            href="https://github.com/OpenAdaptAI/OmniMCP/blob/main/paper/omnimcp_whitepaper.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg"
                                        >
                                            <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                                            Read Whitepaper
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* GitHub Link */}
                            <div className="mt-8 mb-6">
                                <a 
                                    href="https://github.com/OpenAdaptAI/OmniMCP" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-5 py-2 text-blue-300 hover:text-blue-200 border border-blue-800/50 rounded-lg hover:bg-blue-900/20 transition-all"
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
