import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function ProfileCard({ content }: { content?: string }) {
    return (
        <div className="w-full md:w-2/8 bg-[#0f0f0f] rounded-xl p-6 sm:p-8">

            <div className="flex flex-col items-center text-center">
                <img
                    src="/images/profile.jpg"
                    alt="Bijan Shakya"
                    className="h-56 sm:h-72 object-cover rounded-xl"
                />

                {content && (
                    <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
                        {content ?? 'Bijan Shakya'}
                    </h2>
                )}

                {/* Divider */}
                <div className="my-6 w-full border-t border-[#1a1a1a]" />

                <div className="flex items-center justify-center gap-4">
                    <a
                        href="https://github.com/shakya77"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="p-2.5 rounded-xl bg-[#1a1a1a] text-[#9f9f9f] hover:bg-[#eb5d3a] hover:text-white transition-all duration-300"
                    >
                        <Github size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/bijan-shakya-56b50b2b6/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-2.5 rounded-xl bg-[#1a1a1a] text-[#9f9f9f] hover:bg-[#eb5d3a] hover:text-white transition-all duration-300"
                    >
                        <Linkedin size={20} />
                    </a>

                    <a
                        href="https://www.instagram.com/bijan.shakya/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="p-2.5 rounded-xl bg-[#1a1a1a] text-[#9f9f9f] hover:bg-[#eb5d3a] hover:text-white transition-all duration-300"
                    >
                        <Instagram size={20} />
                    </a>

                    <a
                        href="mailto:bijanshakya145@gmail.com"
                        aria-label="Email"
                        className="p-2.5 rounded-xl bg-[#1a1a1a] text-[#9f9f9f] hover:bg-[#eb5d3a] hover:text-white transition-all duration-300"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}
