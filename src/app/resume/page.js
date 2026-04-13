export const metadata = {title:"Resume"}
export default function Resume(){
    return(
        <main className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-2">Resume</h1>
            <p className="text-gray-600 mb-6">
                Here's my current resume. Kept updated as I complete new projects and milestones.
            </p>

            <a href="/resume.pdf" download className="inline-block mb-8 px-6 py-3 bg-black text-white rounded-full hover:br-gray-800">
            Download PDF</a>

            <iframe src="/resume.pdf" className="w-full border rounded-xl" height="800px" title="Resume Preview"/>
        </main>
    )
}