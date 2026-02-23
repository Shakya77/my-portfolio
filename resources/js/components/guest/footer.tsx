import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0f0f0f] border-t border-[#1a1a1a] text-center py-8 mt-16">
            <p className="text-sm text-[#9f9f9f]">
                &copy; {new Date().getFullYear()}{" "}
                <Link
                    href="/"
                    className="font-semibold text-[#eb5d3a] hover:text-white transition-colors duration-300"
                >
                    Bijan Shakya
                </Link>{""}
                . All rights reserved.
            </p>
        </footer>
    );
}
