import { Link, usePage } from "@inertiajs/react";
import { Handshake, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Navbar() {
    const { url } = usePage();
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Service", href: "/service" },
        { name: "Project", href: "/project" },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (href: string) =>
        href === "/" ? url === "/" : url.startsWith(href);

    return (
        <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-gray-900 hover:text-indigo-600 transition-colors duration-300"
                >
                    Bijan Shakya
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                                    ${active
                                            ? "text-indigo-600 bg-indigo-50"
                                            : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/60"
                                        }`}
                                >
                                    {item.name}
                                    {active && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-indigo-600 rounded-full" />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <Button asChild size="lg" variant="default" className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <span className="flex items-center gap-2">
                                Hire Me
                                <Handshake size={16} />
                            </span>
                        </Button>
                    </Link>
                </div>

                {/* ================= MOBILE BUTTON ================= */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            {open && (
                <div className="md:hidden border-t border-gray-100 bg-white px-4 sm:px-6 pb-6 pt-4 space-y-1 animate-in fade-in slide-in-from-top-2">
                    {navItems.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200
                                ${active
                                        ? "text-indigo-600 bg-indigo-50 font-semibold"
                                        : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/60"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                    <div className="pt-3">
                        <Button asChild className="w-full flex items-center justify-center gap-2 rounded-lg">
                            <Link href="/contact" onClick={() => setOpen(false)}>
                                Hire Me
                                <Handshake size={16} />
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
