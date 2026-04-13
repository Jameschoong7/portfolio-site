export const metadata = {title:"About"}
export default function About(){
    return(
        <main className="max-w-3xl mx-auto px-6 py-16">
            
            {/* About */}
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            <p className="text-gray-600 mb-4">
                I'm Choong Jun Cheng, a Computer Science undergraduate at UOW Malaysia KDU Penang University College, currently in my third year with a CGPA of 3.71.
            </p>
            <p className="text-gray-600 mb-4">
                I'm interested in backend development, AI systems, and building tools that solve real problems -- not just for the sake of building
            </p>
            <p className="text-gray-600 mb-4">
                I'm looking for a September 2026 internship in backend or full-stack development, based in Penang or Kuala Lumpur
            </p>

            {/* Skills */}
            <h2 className="text-2xl font-bold mb-6 mt-12">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div>
                    <h3 className="font-semibold mb-2">Languages</h3>
                    <p className="text-gray-600 text-sm">Python, Java, Kotlin, C++, JavaScript, HTML, CSS, SQL, Solidity</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Frameworks & Tools</h3>
                    <p className="text-gray-600 text-sm">Git, FastAPI, LangChain, ChromaDB, Azure OpenAI, Azure AI Search, Wordpress, Android Studio</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Currently Learning</h3>
                    <p className="text-gray-600 text-sm">RAG system design, local AI (Ollama), Unix development Environment</p>
                </div>
            </div>
            
            {/*Education*/}
            <h2 className="text-2xl font-bold mb-6 mt-12">Education</h2>
            <div className="flex flex-col gap-6 mb-16">
                <div className="border-l-4 border-black pl-4">
                    <h3 className="font-semibold">Bachelor of Computer Science</h3>
                    <p className="text-gray-500 text-sm">UOW Malaysia KDU Penang University College | 2024 - Present
                    </p>
                    <p className="text-gray-600 text-sm mt-1">CGPA: 3.71 · High Achievers Scholarship · Dean's List
                    </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                    <h3 className="font-semibold">Diploma in Information Technology</h3>
                    <p className="text-gray-500 text-sm">UOW Malaysia KDU Penang University College | 2022-2024</p>
                    <p className="text-gray-500 text-sm mt-1">CGPA: 3.86</p>
                </div>
            </div>

            {/*Experience */}
            <h2 className="text-2xl font-bold mb-6 mt-12">Experience</h2>
            <div className="flex flex-col gap-6">
                <div className="border-l-4 border-black pl-4">
                    <h3 className="font-semibold">Web Development Intern - Zoewebs Sdn Bhd</h3>
                    <p className="text-gray-500 text-sm">Perai, Penang | May 2024 - August 2024</p>
                    <ul className="text-gray-600 text-sm mt-2 list-disc list-inside space-y-1">
                        <li>Built and maintained client WordPress sites using Elementor or Oxygen</li>
                        <li>Implemented custom UI elements with HTML, CSS, and jQuery</li>
                        <li>Conducted client training sessions and produced user documentation</li>
                        <li>Applied basic SEO practices using Yoast to improve site visibility</li>
                    </ul>
                </div>


            </div>
        </main>

    )


}