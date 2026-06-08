import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex flex-col gap-4 border-b px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-lg font-bold">
                Choong Jun Cheng
            </Link>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base">
                <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
                <li><Link href="/projects" className="hover:text-gray-600">Projects</Link></li>
                <li><Link href="/resume" className="hover:text-gray-600">Resume</Link></li>
                <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
            </ul>
        </nav>
    );
}
