import { Star } from 'lucide-react';
import GuestLayout from '@/layouts/guest/guest-layout';

interface SetupItem {
    id: string;
    name: string;
    category: string;
    image: string;
    description: string;
    rating: number;
    review: string;
    specs: string[];
    price?: string;
}

const setupItems: SetupItem[] = [
    {
        id: '1',
        name: 'MacBook Pro 14"',
        category: 'Laptop',
        image: '/images/setup/macbook.jpg',
        description: 'My primary development machine. The M3 Pro chip provides incredible performance for development, design, and video editing.',
        rating: 5,
        review: 'The best laptop I\'ve ever used. Fast, reliable, and perfect for development work. The display is stunning and battery life is exceptional.',
        specs: ['Apple M3 Pro', '16GB RAM', '512GB SSD', 'Retina Display'],
        price: '$1,999'
    },
    {
        id: '2',
        name: 'iPhone 15 Pro',
        category: 'Smartphone',
        image: '/images/setup/iphone.jpg',
        description: 'Essential for testing mobile applications. The design and performance make it perfect for iOS development.',
        rating: 5,
        review: 'Outstanding device. The camera quality is incredible and the performance is blazingly fast. Great for development and testing.',
        specs: ['A17 Pro Chip', '8GB RAM', '256GB Storage', '6.1" Display'],
        price: '$999'
    },
    {
        id: '3',
        name: 'Logitech MX Master 3S',
        category: 'Mouse',
        image: '/images/setup/mouse.jpg',
        description: 'The ultimate productivity mouse. Exceptional precision and comfort for long coding sessions.',
        rating: 5,
        review: 'Hands down the best mouse for developers. The precision is unmatched, customizable buttons increase productivity dramatically.',
        specs: ['8K DPI Sensor', 'Wireless', 'Multi-Device', 'Custom Buttons'],
        price: '$99'
    },
    {
        id: '4',
        name: 'Keychron K8 Pro',
        category: 'Keyboard',
        image: '/images/setup/keyboard.jpg',
        description: 'Mechanical keyboard with hot-swappable switches. Perfect typing experience with minimal sound.',
        rating: 4.5,
        review: 'Great mechanical keyboard. Build quality is excellent, switches are smooth, and it\'s wireless. Highly recommended for developers.',
        specs: ['Mechanical Switches', 'Hot-Swappable', 'Wireless/Wired', 'RGB Backlight'],
        price: '$149'
    },
    {
        id: '5',
        name: 'Dell UltraSharp U2723DE',
        category: 'Monitor',
        image: '/images/setup/monitor.jpg',
        description: '27-inch 1440p monitor with exceptional color accuracy. Perfect for design work and coding.',
        rating: 5,
        review: 'Fantastic display. Color accuracy is perfect for design work, the resolution is ideal for development, and the build quality is premium.',
        specs: ['27" IPS', '2560x1440', '99% sRGB', 'USB-C Hub'],
        price: '$599'
    },
    {
        id: '6',
        name: 'Sony WH-1000XM5',
        category: 'Headphones',
        image: '/images/setup/headphones.jpg',
        description: 'Noise-canceling headphones for focused work sessions. Superior sound quality and comfort.',
        rating: 5,
        review: 'The best noise-canceling headphones. Sound quality is excellent, comfort is superb, and noise cancellation is top-tier.',
        specs: ['Active Noise Cancellation', '40h Battery', 'Wireless', 'Premium Sound'],
        price: '$399'
    }
];

function SetupCard({ item }: { item: SetupItem }) {
    return (
        <div className="border border-gray-200 dark:border-gray-800 rounded overflow-hidden hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
            {/* Image */}
            <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden">
                <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="mb-2">
                    <span className="text-xs px-2 py-1 border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded">
                        {item.category}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                    {item.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className={i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-700'}
                            />
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.rating}</span>
                </div>

                {/* Review */}
                <div className="border-l-4 border-blue-600 pl-4 py-3 mb-4 bg-gray-50 dark:bg-gray-900">
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        "{item.review}"
                    </p>
                </div>

                {/* Specs */}
                <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">Specifications</p>
                    <div className="flex flex-wrap gap-2">
                        {item.specs.map((spec) => (
                            <span
                                key={spec}
                                className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded"
                            >
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Price */}
                {item.price && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {item.price}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Setup() {
    return (
        <GuestLayout breadcrumbs="Setup">
            <section>
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                        My Setup & Tools
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                        Here's a detailed look at the tools and equipment I use daily for development, design, and content creation. Each item has been carefully selected for quality, performance, and productivity.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                    <div className="border border-gray-200 dark:border-gray-800 p-6 rounded">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Devices</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-800 p-6 rounded">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.9</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-800 p-6 rounded">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$4K+</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Investment</p>
                    </div>
                </div>

                {/* Setup Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {setupItems.map((item) => (
                        <SetupCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </GuestLayout>
    );
}
