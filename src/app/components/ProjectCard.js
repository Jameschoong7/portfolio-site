export default function ProjectCard({title, description, tags, github}){
    return(
        <div className="border rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600 text-sm flex-1">{description}</p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag)=>(
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            {github &&(
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline">
                    GitHub →
                </a>
            )}

        </div>
    )


}