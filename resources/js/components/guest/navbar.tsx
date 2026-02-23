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
        <header className="w-full sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white"
                >
                    Portfolio<span className="text-[#eb5d3a]">.</span>
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors duration-300
                                    ${active
                                            ? "text-[#eb5d3a]"
                                            : "text-[#cecece] hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-[#eb5d3a] hover:border-[#eb5d3a] hover:text-white transition-all duration-300">
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
                    className="md:hidden p-2 rounded-lg text-[#cecece] hover:text-white transition-colors duration-200"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            {open && (
                <div className="md:hidden border-t border-[#1a1a1a] bg-black px-4 sm:px-6 pb-6 pt-4 space-y-1 animate-in fade-in slide-in-from-top-2">
                    {navItems.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200
                                ${active
                                        ? "text-[#eb5d3a]"
                                        : "text-[#cecece] hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                    <div className="pt-3">
                        <Link href="/contact" onClick={() => setOpen(false)}>
                            <Button variant="outline" className="w-full flex items-center justify-center gap-2 rounded-full border-white/20 text-white hover:bg-[#eb5d3a] hover:border-[#eb5d3a]">
                                Hire Me
                                <Handshake size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
