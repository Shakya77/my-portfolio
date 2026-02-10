import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100   text-center py-4 mt-8">
            <p className="text-sm text-gray-600  ">
                &copy; {new Date().getFullYear()}{" "}
                <Link
                    href="/"
                    className="font-semibold hover:text-red-600 transition-colors"
                >
                    Bijan Shakya
                </Link>{""}
                . All rights reserved.
            </p>
        </footer>
    );
}
