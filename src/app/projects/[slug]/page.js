import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | James Choong`,
      description: project.description,
      url: `/projects/${project.slug}`,
    },
  };
}


export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    notFound();
  }
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projects" className="text-sm text-gray-500 underline hover:text-gray-800">
        Back to Projects
      </Link>

      <header className="mt-8 border-b pb-10">
        <p className="text-sm text-gray-500 mb-4">Project Detail</p>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-gray-600 mt-4 text-lg leading-8">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {(project.status || project.timeline) && (
          <div className="flex flex-wrap gap-2 mt-6 text-sm">
            {project.status && (
              <span className="rounded-full border px-3 py-1 text-gray-700">
                {project.status}
              </span>
            )}
            {project.timeline && (
              <span className="rounded-full border px-3 py-1 text-gray-700">
                {project.timeline}
              </span>
            )}
          </div>
        )}
      </header>

      {project.problem && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-3">The Problem</h2>
          <p className="text-gray-600">{project.problem}</p>
        </section>
      )}
      {project.whatIBuilt && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">What I Built</h2>
          <p className="text-gray-600">{project.whatIBuilt}</p>
        </section>
      )}

      {project.screenshots?.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Screenshots</h2>

          <div className="grid gap-6">
            {project.screenshots.map((screenshot) => (
              <figure key={screenshot.src} >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={screenshot.width ?? (screenshot.variant === "phone" ? 390 : 1200)}
                  height={screenshot.height ?? (screenshot.variant === "phone" ? 844 : 675)}
                  className={
                    screenshot.variant === "phone"
                      ? "mx-auto h-auto max-h-[520px] w-auto max-w-full rounded-xl border object-contain"
                      : screenshot.variant === "compact"
                        ? "mx-auto h-auto max-h-[620px] w-auto max-w-full rounded-xl border object-contain"
                      : "w-full rounded-xl border"
                  } />

                {screenshot.caption && (
                  <figcaption className="text-sm text-gray-500 mt-2">
                    {screenshot.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {project.techStack?.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.techStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {project.decisions?.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Decisions I Made</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </section>
      )}

      {project.learnings?.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">What I Learned</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.learnings.map((learning) => (
              <li key={learning}>{learning}</li>
            ))}
          </ul>
        </section>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          View GitHub
        </a>
      )}
    </main>
  )
}
