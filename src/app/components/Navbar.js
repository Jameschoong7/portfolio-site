import Link from "next/link";


export default function Navbar(){
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b">
            <Link href="/" className="font-bold text-lg">
                Choong Jun Cheng
            </Link>

            <ul className="flex gap-6">
                <li><Link href="/about">About</Link> </li>
                <li><Link href="/projects">Projects</Link> </li>
                <li><Link href="/resume">Resume</Link> </li>
                <li><Link href="/contact">Contact</Link> </li>
            </ul>

        </nav>


    )
}