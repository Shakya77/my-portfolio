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
        { name: "My Gadgets", href: "/my-gadgets" },
    ];

    const isActive = (href: string) =>
        href === "/" ? url === "/" : url.startsWith(href);

    return (
        <header className="w-full sticky top-0 z-50 bg-white/90  backdrop-blur border-b shadow-sm">
            <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-gray-900  "
                >
                    Bijan Shakya
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`text-base  transition
                                    ${active
                                            ? "text-red-600   font-extrabold"
                                            : "text-gray-600   hover:text-red-600 font-medium"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block cursor-pointer">
                    <Link href="/contact">
                        <Button asChild className="" size="lg" variant="default">
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
                    className="md:hidden text-gray-700  "
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            {open && (
                <div className="md:hidden border-t bg-white   px-6 pb-6 pt-4 space-y-4 animate-in fade-in slide-in-from-top-2">
                    {navItems.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`block text-base font-medium transition
                                ${active
                                        ? "text-blue-600   font-semibold"
                                        : "text-gray-600   hover:text-blue-600"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                    <Button asChild className="w-full flex items-center justify-center gap-2 mt-3">
                        <Link href="/contact" >
                            Hire Me
                            <Handshake size={16} />
                        </Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
