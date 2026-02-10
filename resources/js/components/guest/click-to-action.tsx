import { Link } from "@inertiajs/react";
import { MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

export default function ClickToAction({ className }: { className?: string }) {
    return (
        <section
            className={`py-14 bg-gray-200 rounded-lg  ${className}`}
        >
            <div className="container mx-auto px-6 text-center flex flex-col items-center gap-6 max-w-3xl">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Ready to build something amazing together?
                </h2>

                {/* Description */}
                <p className=" text-lg max-w-2xl">
                    I help turn ideas into fast, modern, and scalable web experiences.
                    Whether it’s a startup, business tool, or full product —
                    let’s collaborate and make it real.
                </p>

                {/* CTA Button */}
                <Link href="/contact">
                    <Button size="lg" className="gap-2 text-base">
                        Let’s Talk
                        <MessageSquare size={18} />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
