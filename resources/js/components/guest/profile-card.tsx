import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function ProfileCard({ content }: { content?: string }) {
    return (
        <div className="w-full md:w-2/8 border border-gray-200 rounded-xl p-6 sm:p-8 bg-white shadow-sm">

            <div className="flex flex-col items-center text-center">
                <img
                    src="/images/profile.jpg"
                    alt="Bijan Shakya"
                    className="h-56 sm:h-72 object-cover rounded-lg"
                />

                {content && (
                    <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
                        {content ?? 'Bijan Shakya'}
                    </h2>
                )}

                {/* Divider */}
                <div className="my-6 w-full border-t border-gray-200" />

                <div className="flex items-center justify-center gap-4">
                    <a
                        href="https://github.com/shakya77"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300"
                    >
                        <Github size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/bijan-shakya-56b50b2b6/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300"
                    >
                        <Linkedin size={20} />
                    </a>

                    <a
                        href="https://www.instagram.com/bijan.shakya/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300"
                    >
                        <Instagram size={20} />
                    </a>

                    <a
                        href="mailto:bijanshakya145@gmail.com"
                        aria-label="Email"
                        className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}
