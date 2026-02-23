export default function Header({ title, description }: { title: string, description: string }) {
    return (
        <div className="text-center flex flex-col items-center gap-4 mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                {description}
            </p>
        </div>
    )
}
