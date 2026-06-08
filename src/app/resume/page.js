export const metadata = { title: "Resume" };

export default function Resume() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-4">Resume</h1>
            <p className="text-gray-600 mb-8">
                My resume is kept updated as I complete new projects, refine my technical skills, and prepare for September 2026 internship opportunities.
            </p>

            <a href="/ChoongJunCheng_Resume.pdf" download className="inline-block mb-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                Download PDF
            </a>

            <iframe
                src="/ChoongJunCheng_Resume.pdf"
                className="h-[560px] w-full rounded-xl border sm:h-[800px]"
                title="Resume Preview"
            />
        </main>
    );
}
