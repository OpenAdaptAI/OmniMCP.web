// components/TrialForm.js
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function TrialForm() {
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [useCase, setUseCase] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(event.target)
        formData.append('form-name', 'trial-signup')

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            })
            
            setFormSubmitted(true)
            console.log('Form successfully submitted')
        } catch (error) {
            console.error('Form submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div
            id="trial"
            className="py-20 bg-indigo-700 text-white"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}
        >
            {formSubmitted ? (
                <div
                    className="fade-in"
                    style={{ opacity: 1, transition: 'opacity 1s ease-in' }}
                >
                    <h2 className="font-light text-white text-2xl mb-4 text-center">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-4" />
                        Thank You for Signing Up!
                    </h2>
                    <p className="text-white text-lg max-w-xl text-center">
                        We've sent an email with instructions to get started with your free 14-day trial of OmniMCP.
                    </p>
                </div>
            ) : (
                <form
                    id="trial-signup"
                    className="flex items-center justify-center w-full max-w-xl mx-auto px-4"
                    onSubmit={handleSubmit}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    name="trial-signup"
                >
                    <div className="grid grid-flow-row auto-rows-max row-auto w-full">
                        <input
                            type="hidden"
                            name="form-name"
                            value="trial-signup"
                        />
                        <p className="hidden">
                            <label>
                                Don't fill this out if you're human:{' '}
                                <input name="bot-field" />
                            </label>
                        </p>
                        <h1 className="font-light text-3xl text-white my-0 text-center">
                            Start Your Free Trial
                        </h1>
                        <h2 className="mt-6 mb-8 font-light text-white flex-auto text-center">
                            Experience the power of OmniMCP for 14 days, no credit card required.
                        </h2>
                        
                        <label
                            className="block mb-2 text-sm font-medium"
                            htmlFor="email"
                        >
                            Email Address: <span className="text-red-300">*</span>
                        </label>
                        <input
                            id="email"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="you@company.com"
                        />

                        <label
                            className="block mb-2 text-sm font-medium"
                            htmlFor="company"
                        >
                            Company Name:
                        </label>
                        <input
                            id="company"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
                            type="text"
                            name="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Acme Inc."
                        />
                        
                        <label 
                            className="block mb-2 text-sm font-medium" 
                            htmlFor="use_case"
                        >
                            How do you plan to use OmniMCP?
                        </label>
                        <textarea
                            id="use_case"
                            style={{ minHeight: "100px" }}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
                            name="use_case"
                            value={useCase}
                            onChange={(e) => setUseCase(e.target.value)}
                            placeholder="Describe your use case here..."
                        ></textarea>
                        
                        <div
                            className="mt-6 text-center"
                        >
                            <button
                                className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                                disabled={isSubmitting}
                                type="submit"
                            >
                                {isSubmitting ? 'Submitting...' : 'Start Free Trial'}
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    )
}
