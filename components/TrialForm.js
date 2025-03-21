import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faGithub } from '@fortawesome/free-solid-svg-icons'

export default function TrialForm() {
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [useCase, setUseCase] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const encodeFormData = (data) => {
        return new URLSearchParams(data).toString()
    }

    /*
    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(event.target)
        formData.append('form-name', 'trial-signup') // Ensure this matches Netlify

        try {
            await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encodeFormData(formData),
            })

            setFormSubmitted(true)
            console.log('Form successfully submitted')
        } catch (error) {
            console.error('Form submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }
    */
    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(event.target)
        formData.append('form-name', 'trial-signup')

        fetch('/__forms.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .then((response) => {
                if (response.ok) {
                    setFormSubmitted(true) // Hide form and show success message on successful submission
                    console.log('Form successfully submitted')
                } else {
                    console.error('Form submission failed')
                }
                setIsSubmitting(false)
            })
            .catch((error) => {
                console.error('Form submission error:', error)
                setIsSubmitting(false)
            })
    }

    return (
        <div
            id="trial"
            className="py-20 bg-indigo-700 text-white flex flex-col justify-center items-center min-h-[80vh]"
        >
            {formSubmitted ? (
                <div className="fade-in max-w-xl text-center px-4">
                    <h2 className="font-light text-white text-2xl mb-4 text-center">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-4" />
                        Thanks for your interest!
                    </h2>
                    <p className="text-white text-lg mb-6">
                        We're still setting things up, but we'll notify you as soon as our managed service is ready for early access.
                    </p>
                    <p className="text-white text-lg mb-8">
                        In the meantime, you can explore the open-source version on GitHub.
                    </p>
                    <a 
                        href="https://github.com/OpenAdaptAI/OmniMCP" 
                        className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        View on GitHub
                    </a>
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
                        <input type="hidden" name="form-name" value="trial-signup" />

                        <p className="hidden">
                            <label>
                                Don't fill this out if you're human:{' '}
                                <input name="bot-field" />
                            </label>
                        </p>

                        <h1 className="font-light text-3xl text-white my-0 text-center">
                            Join the Waitlist
                        </h1>
                        <h2 className="mt-6 mb-8 font-light text-white flex-auto text-center">
                            Be the first to access our managed OmniMCP service when it launches.
                        </h2>

                        <label className="block mb-2 text-sm font-medium" htmlFor="email">
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

                        <label className="block mb-2 text-sm font-medium" htmlFor="company">
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

                        <label className="block mb-2 text-sm font-medium" htmlFor="use_case">
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

                        <div className="mt-6 text-center">
                            <button
                                className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                                disabled={isSubmitting}
                                type="submit"
                            >
                                {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                            </button>
                        </div>

                        <div className="mt-6 text-center text-sm opacity-80">
                            <p>
                                Want to try it now?{' '}
                                <a
                                    href="https://github.com/OpenAdaptAI/OmniMCP"
                                    className="underline hover:text-blue-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Check out our open-source version on GitHub
                                </a>.
                            </p>
                        </div>
                    </div>
                </form>
            )}
        </div>
    )
}
