import { projects } from "./data/projects";

const baseUrl = "https://choongjuncheng.my";

export default function sitemap() {
    const staticRoutes = [
        "",
        "/about",
        "/projects",
        "/resume",
        "/contact",
    ];

    return [
        ...staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        })),
        ...projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        })),
    ];
}