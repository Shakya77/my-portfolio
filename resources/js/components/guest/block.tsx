export interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
}

export default function ServiceBlock({ service }: { service: Service }) {
    return (
        <div className="bg-[#0f0f0f] rounded-xl p-6 hover:bg-[#141414] transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#1a1a1a]">
                    {service.icon}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
            </h3>

            <p className="text-[#9f9f9f] text-sm leading-relaxed mb-4">
                {service.description}
            </p>

            <div className="space-y-2">
                <p className="text-xs font-semibold text-[#cecece]">Key Features:</p>
                <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-[#9f9f9f] flex items-center">
                            <span className="h-1.5 w-1.5 bg-[#eb5d3a] rounded-full mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}