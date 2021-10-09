function Contact() {

    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if ( !field.name ) return;
            formData[field.name] = field.value;
        });
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData);
    }

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-sm md:px-24 lg:px-8">
        <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
            Contact Form
            </h3>
            <form method="post" onSubmit={handleOnSubmit}>
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
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none"
                name="email"
                />
            </div>
            <div className="mb-1 sm:mb-2">
                <label
                htmlFor="phone"
                className="inline-block mb-1 font-medium"
                >
                Phone
                </label>
                <input
                placeholder="Contact Number"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none"
                name="phone"
                />
            </div>
            <div className="mb-1 sm:mb-2">
                <label
                htmlFor="message"
                className="inline-block mb-1 font-medium"
                >
                Message
                </label>
                <textarea
                placeholder="type your message"
                required
                className="flex-grow w-full h-24 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none"
                name="message"
                />
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
                <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                Submit
                </button>
            </div>
            <p className="text-xs text-gray-600 sm:text-sm">
                We respect your privacy. Unsubscribe at any time.
            </p>
            </form>
        </div>
        </div>
    )
}

export default Contact