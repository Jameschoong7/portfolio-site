import ProjectCard from "../components/ProjectCard";

import {projects} from "../data/projects"

export const metadata = {title:"Projects"}



export default function Projects(){
    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <p className="text-gray-600 mb-10">
                A selection of backend, AI, blockchain, and full-stack projects. Each project page explains the problem, what I built, key decisions, and what I learned.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project)=>(
                    <ProjectCard key={project.slug} {...project} />
                ))}
            </div>
        </main>
    )
}
