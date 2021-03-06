import { useState } from 'react'
import axios from 'axios'

function Hero() {
    const [errorMessage, setErrorMessage] = useState(null)
    const [email, setEmail] = useState("")
    const [state, setState] = useState("IDLE")

const subscribe = async () => {
    setState("LOADING")
    setErrorMessage(null)
    try {
        const response = await axios.post("api/subscribe", { email })
        setState("SUCCESS")
    } catch (e) {
    setErrorMessage(e.response.data.error)
    setState("ERROR")}}

    return (
        <div className="overflow-hidden bg-gray-00">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-10">
                    We are provide the <br className="hidden md:block" />
                    fastest{' '}
                    <span className="text-deep-purple-accent-400">App Hosting</span>
                    </h2>
                    <p className="max-w-xl mb-4 text-base text-gray-800 md:text-lg">
                    We serve end-to-end website design, development and digital marketing solutions that focus on the goals and objectives of the customer, from strategy and design to internet marketing.
                    </p>
                    <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-accent-700"
                    >
                    Learn more
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                    </a>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                    <div className="relative">
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-deep-purple-accent-400 lg:w-32 lg:-mr-16 sm:block"
                    >
                        <defs>
                        <pattern
                            id="766323e1-e594-4ffd-a688-e7275079d540"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                        >
                            <circle cx="1" cy="1" r=".7" />
                        </pattern>
                        </defs>
                        <rect
                        fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                        width="52"
                        height="24"
                        />
                    </svg>
                    <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                        Sign up for updates
                        </h3>
                        <form>
                        <div className="mb-1 sm:mb-2">
                            <label
                            htmlFor="name"
                            className="inline-block mb-1 font-medium"
                            >
                            Name
                            </label>
                            <input
                            placeholder="John Doe"
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none"
                            id="name"
                            name="name"
                            />
                        </div>
                        <div className="mb-1 sm:mb-2">
                            <label
                            htmlFor="email"
                            className="inline-block mb-1 font-medium"
                            >
                            E-mail
                            </label>
                            <input
                            placeholder="john.doe@example.org"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none"
                            id="email"
                            name="email"
                            />
                            {state === "ERROR" && <p className="text-red-700 sm:text-sm">{errorMessage}</p>}
                            {state === "SUCCESS" && <p className="text-green-600 sm:text-sm">You have successfully subscribed!</p>}
                        </div>
                        <div className="mt-4 mb-2 sm:mb-4">
                            <button
                            type="button"
                            disabled={state === "LOADING"}
                            onClick={subscribe}
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                            Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-600 sm:text-sm">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero