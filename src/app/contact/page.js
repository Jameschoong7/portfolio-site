import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const metadata = { title: "Contact" };

export default function Contact() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <p className="text-gray-600 mb-10">
                I'm currently open to internship opportunities starting September 2026,
                based in Penang with flexibility to KL. Feel free to reach out.
            </p>

            <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                    <span className="mt-1 text-gray-500">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                        <span className="text-sm text-gray-500">Email</span>
                        <p>
                        <a href="mailto:jameschoong7@gmail.com" className="underline hover:text-gray-600">
                            jameschoong7@gmail.com
                        </a>
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <span className="mt-1 text-gray-500">
                        <FaGithub className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                        <span className="text-sm text-gray-500">GitHub</span>
                        <p>
                        <a href="https://github.com/Jameschoong7" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                            github.com/Jameschoong7
                        </a>
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <span className="mt-1 text-gray-500">
                        <FaLinkedin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                        <span className="text-sm text-gray-500">LinkedIn</span>
                        <p>
                        <a href="https://www.linkedin.com/in/choong-jun-cheng-4a6b161a6/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                            Choong Jun Cheng
                        </a>
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <span className="mt-1 text-gray-500">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                        <span className="text-sm text-gray-500">Location</span>
                        <p className="text-gray-800">Penang, Malaysia</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
