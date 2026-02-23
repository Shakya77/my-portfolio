import { Link } from "@inertiajs/react";
import { MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

export default function ClickToAction({ className }: { className?: string }) {
    return (
        <section
            className={`py-14 bg-linear-to-br from-indigo-50 to-gray-100 rounded-xl ${className}`}
        >
            <div className="container mx-auto px-6 text-center flex flex-col items-center gap-6 max-w-3xl">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                    Ready to build something amazing together?
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                    I help turn ideas into fast, modern, and scalable web experiences.
                    Whether it's a startup, business tool, or full product —
                    let's collaborate and make it real.
                </p>

                {/* CTA Button */}
                <Link href="/contact">
                    <Button size="lg" className="gap-2 text-base rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        Let's Talk
                        <MessageSquare size={18} />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
