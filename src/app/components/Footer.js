import Link from "next/link";

export default function Footer(){
    return(
        <footer className="mt-auto border-t px-6 py-4 text-sm text-center text-gray-500">
             © {new Date().getFullYear()} Choong Jun Cheng
        </footer>

    )
}