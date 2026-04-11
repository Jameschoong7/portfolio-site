import Link from "next/link";
import Image from "next/image";

export default function Home(){

  return (
    <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center">
      {/*Hero Section */}
      <Image src ="/profile.png" alt="Choong Jun Cheng" width={240} height={240} quality={100} className="rounded-full mb-6"/>

      <h1 className="text-4xl font-bold mb-4">Hi, I'm Choong Jun Cheng.</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-2">
        Computer Science Student at UOW Malaysia KDU Penang, graduating December 2026.
      </p>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        I build backend systems and AI-powered tools - currently developing a RAG-based enterprise search system for my industry FYP.
      </p>

      {/* CTA Button */}
      <div className="flex gap-4 mb-16">
        <Link href="/projects" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
        View My Projects
        </Link>
        <a href="/resume.pdf" download className="px-6 py-3 border border-black rounded-full hover:bg-gray-100">
          Download Resume
        </a>

      </div>

      {/* Quick Intro Strip */}
      <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-500">
        <span>📍 Based in Penang, Malaysia</span>
        <span>🎓 CGPA 3.71 — High Achievers Scholarship</span>
        <span>💼 Open to internships from Sep 2026</span>

      </div>

    </main>

  )



}