import Link from "next/link";

export default function ProjectCard({ title, description, tags, github, slug, status }) {
    return (
        <div className="border rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                {status && (
                    <span className="shrink-0 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                        {status}
                    </span>
                )}
            </div>
            <p className="text-gray-600 text-sm flex-1">{description}</p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium">
                <Link href={`/projects/${slug}`} className="rounded-full bg-black px-4 py-2 text-white hover:bg-gray-800">
                    View Details
                </Link>
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="px-1 py-2 underline hover:text-gray-600">
                        GitHub →
                    </a>
                )}
            </div>
        </div>
    );
}
