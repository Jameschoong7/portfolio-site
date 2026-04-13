import ProjectCard from "../components/ProjectCard";
export const metadata = {title:"Projects"}
const projects = [
    
    {
        title:"Searchable RAG Copilot",
        description: "An enterprise search system that lets users query internal documents and receive cited, grounded answers using Retrieval-Augmented Generation",
        tags:["AI","Backend","Python","FastAPI"],
        github : "https://github.com/Jameschoong7/searchable-rag-copilot",
    },
    {
        title:"GreenChain",
        description:"A blockchain-based recycling and donation platform deployed on Sepolia testnet, built during the DevMatch 2025 hackathon.",
        tags:["Blockchain","Hackathon","Solidity"],
        github:"https://github.com/Jameschoong7/DevMatch2025",
    },
    {
        title:"WEii Café Restaurant Website",
        description:"A PHP-based restaurant website with full admin panel for menu management, built with my class mates as our Diploma Final Year Project",
        tags:["PHP", "MySQL","Full Stack"],
        github: "https://github.com/Jameschoong7/weiicafe",
    },
    {
        title: "Job Tracker",
        description: "A personal job application tracker to manage applications, deadlines, and follow-up status in one place.",
        tags: ["Full Stack", "Personal Tool", "Productivity"],
        github: null,
    },
    {
        title: "Daily News Bot",
        description: "A bot that fetches, summarises, and delivers daily news relevant to my interests — built as a personal productivity tool and AI pipeline exercise.",
        tags: ["AI", "Automation", "Personal Tool"],
        github: null,
    },
    


]


export default function Projects(){
    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project)=>(
                    <ProjectCard key={project.title}{...project} />
                ))}
            </div>
        </main>
    )
}