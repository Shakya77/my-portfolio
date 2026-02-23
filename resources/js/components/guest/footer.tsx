import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200/60 text-center py-6 mt-12">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()}{" "}
                <Link
                    href="/"
                    className="font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                >
                    Bijan Shakya
                </Link>{""}
                . All rights reserved.
            </p>
        </footer>
    );
}
