import { useState } from 'react';
import * as ga from '../lib/ga'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [query, setQuery] = useState("");

    const search = () => {
        ga.event({
          action: "search",
          params : {
            search_term: query
          }
        })
      }

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
                >
                <svg
                    className="w-8 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    stroke="currentColor"
                    fill="none"
                >
                    <rect x="3" y="1" width="7" height="12" />
                    <rect x="3" y="17" width="7" height="6" />
                    <rect x="14" y="1" width="7" height="6" />
                    <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                    Earthcorp
                </span>
                </a>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                <li>
                    <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                    Product
                    </a>
                </li>
                <li>
                    <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                    Features
                    </a>
                </li>
                <li>
                    <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                    Pricing
                    </a>
                </li>
                <li>
                    <a
                    href="/"
                    aria-label="About us"
                    title="About us"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                    About us
                    </a>
                </li>
                <li>
                    <a
                    href="/contact"
                    aria-label="Contact"
                    title="Contact"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                    Contact
                    </a>
                </li>
                <li>
                    <a
                    href="/"
                    className="inline-flex items-center justify-center h-12 font-medium tracking-wide text-gray-700 transition duration-200 hover:text-deep-purple-accent-400"
                    aria-label="Sign up"
                    title="Sign up"
                    >
                    <span 
                    className="mr-3"
                    >
                    Cart
                    </span>
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4"
                >
                    <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="4,4 22,4 19,14 4,14 "
                    />
                    <circle
                    cx="4"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                    />
                    <circle
                    cx="20"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                    />
                    <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="1,1 4,4 4,14 2,18 23,18 "
                    />
                </svg>
                    </a>
                </li>
                <li>
                    <input
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search"
                    required
                    type="text"
                    className="flex-grow w-full h-10 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none"
                    id="search"
                    name="search"
                    />
                    <button 
                    type="submit" 
                    className="absolute right-0 top-0 mt-3 mr-2"
                    onClick={() => search()}
                    >
                        <svg
                            fill="none"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-6"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                </li>
                
                </ul>
                <div className="lg:hidden">
                <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
                </button>
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full">
                    <div className="p-5 bg-white border rounded shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                        <div>
                            <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                            >
                            <svg
                                className="w-8 text-deep-purple-accent-400"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="none"
                            >
                                <rect x="3" y="1" width="7" height="12" />
                                <rect x="3" y="17" width="7" height="6" />
                                <rect x="14" y="1" width="7" height="6" />
                                <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                Earthcorp
                            </span>
                            </a>
                        </div>
                        <div>
                            <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                />
                            </svg>
                            </button>
                        </div>
                        </div>
                        <nav>
                        <ul className="space-y-4">
                            <li>
                            <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Product
                            </a>
                            </li>
                            <li>
                            <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Features
                            </a>
                            </li>
                            <li>
                            <a
                                href="/"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Pricing
                            </a>
                            </li>
                            <li>
                            <a
                                href="/"
                                aria-label="About us"
                                title="About us"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                About us
                            </a>
                            </li>
                            <li>
                            <a
                                href="/contact"
                                aria-label="Contact"
                                title="Contact"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Contact
                            </a>
                            </li>
                            <li>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                            >
                                <span 
                                className="mr-3"
                                >
                                Cart
                                </span>
                                <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4"
                            >
                                <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                points="4,4 22,4 19,14 4,14 "
                                />
                                <circle
                                cx="4"
                                cy="22"
                                r="2"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                stroke="none"
                                fill="currentColor"
                                />
                                <circle
                                cx="20"
                                cy="22"
                                r="2"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                stroke="none"
                                fill="currentColor"
                                />
                                <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                points="1,1 4,4 4,14 2,18 23,18 "
                                />
                            </svg>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Header