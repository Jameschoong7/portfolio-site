export default function Contact(){
    return(
        <main className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <p className="text-gray-600 mb-10">
                 I'm currently open to internship opportunities starting September 2026,
        based in Penang with flexibility to KL. Feel free to reach out.
            </p>

            <div className="flex flex-col gap-4">
                <div>
                    <span className="text-sm text-gray-500">Email</span>
                    <p>
                        <a href="mailto:jameschoong7@gmail.com" className="underline hover:text-gray-600">
                            jameschoong7@gmail.com
                        </a>
                    </p>
                </div>
                <div>
                    <span className="text-sm text-gray-500">GitHub</span>
                    <p>
                        <a href="https://github.com/Jameschoong7" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                        github.com/Jameschoong7
                        </a>
                    </p>
                </div>

                <div>
                    <span className="text-sm text-gray-500">Location</span>
                    <p className="text-gray-800">Penang, Malaysia</p>
                </div>
            </div>
            
        </main>
    )
}