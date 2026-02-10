export interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
}

export default function ServiceBlock({ service }: { service: Service }) {
    return (
        <div className="border border-gray-200   rounded p-6 hover:border-blue-600   transition-colors">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded border border-gray-200   bg-gray-50  ">
                    {service.icon}
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900   mb-2">
                {service.title}
            </h3>

            <p className="text-gray-600   text-sm leading-relaxed mb-4">
                {service.description}
            </p>

            <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-700  ">Key Features:</p>
                <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600   flex items-center">
                            <span className="h-1 w-1 bg-blue-600   rounded-full mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}