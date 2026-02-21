import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function ProfileCard({ content }: { content?: string }) {
    return (
        <div className="w-full md:w-2/8 border border-gray-200   p-8">

            <div className="flex flex-col items-center text-center">
                <img
                    src="/images/profile.jpg"
                    alt="Bijan Shakya"
                    className="h-72  object-cover rounded"
                />

                {content && (
                    <h2 className="mt-8 text-3xl font-bold text-gray-900  ">
                        {content ?? 'Bijan Shakya'}
                    </h2>
                )}

                {/* Divider */}
                <div className="my-8 w-full border-t border-gray-200  " />

                <div className="flex items-center justify-center gap-6">
                    <a
                        href="https://github.com/shakya77"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="p-2 rounded border border-gray-200   text-gray-700   hover:bg-gray-100   hover:text-blue-600   transition-all"
                    >
                        <Github size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/bijan-shakya-56b50b2b6/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 rounded border border-gray-200   text-gray-700   hover:bg-gray-100   hover:text-blue-600   transition-all"
                    >
                        <Linkedin size={20} />
                    </a>

                    <a
                        href="https://www.instagram.com/bijan.shakya/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"
                        className="p-2 rounded border border-gray-200   text-gray-700   hover:bg-gray-100   hover:text-blue-600   transition-all"
                    >
                        <Instagram size={20} />
                    </a>

                    <a
                        href="mailto:bijanshakya145@gmail.com"
                        aria-label="Email"
                        className="p-2 rounded border border-gray-200   text-gray-700   hover:bg-gray-100   hover:text-blue-600   transition-all"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}
