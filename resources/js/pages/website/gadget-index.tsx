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
        <div className="bg-[#0f0f0f] rounded-xl overflow-hidden hover:bg-[#141414] transition-all duration-300">
            {/* Image */}
            <div className="relative w-full h-48 bg-[#1a1a1a] overflow-hidden">
                <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-80 hover:opacity-100"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="mb-2">
                    <span className="text-xs px-2 py-1 bg-[#eb5d3a]/10 text-[#eb5d3a] rounded-lg">
                        {item.category}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                </h3>

                <p className="text-[#9f9f9f] text-sm mb-4 leading-relaxed">
                    {item.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className={i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-[#2a2a2a]'}
                            />
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-[#cecece]">{item.rating}</span>
                </div>

                {/* Review */}
                <div className="border-l-4 border-[#eb5d3a] pl-4 py-3 mb-4 bg-[#eb5d3a]/5 rounded-r-xl">
                    <p className="text-sm text-[#9f9f9f] italic">
                        "{item.review}"
                    </p>
                </div>

                {/* Specs */}
                <div className="mb-4">
                    <p className="text-xs font-semibold text-[#cecece] mb-2 uppercase">Specifications</p>
                    <div className="flex flex-wrap gap-2">
                        {item.specs.map((spec) => (
                            <span
                                key={spec}
                                className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#cecece] rounded-lg"
                            >
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Price */}
                {item.price && (
                    <div className="pt-4 border-t border-[#1a1a1a]">
                        <p className="text-lg font-semibold text-[#eb5d3a]">
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
        <GuestLayout breadcrumbs="My-Gadgets">
            <section>
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        My Setup & Tools
                    </h1>
                    <p className="text-base sm:text-lg text-[#9f9f9f] leading-relaxed max-w-3xl">
                        Here's a detailed look at the tools and equipment I use daily for development, design, and content creation. Each item has been carefully selected for quality, performance, and productivity.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-[#0f0f0f] p-6 rounded-xl">
                        <p className="text-3xl font-bold text-[#eb5d3a] mb-2">6</p>
                        <p className="text-sm text-[#9f9f9f]">Total Devices</p>
                    </div>
                    <div className="bg-[#0f0f0f] p-6 rounded-xl">
                        <p className="text-3xl font-bold text-[#eb5d3a] mb-2">4.9</p>
                        <p className="text-sm text-[#9f9f9f]">Average Rating</p>
                    </div>
                    <div className="bg-[#0f0f0f] p-6 rounded-xl">
                        <p className="text-3xl font-bold text-[#eb5d3a] mb-2">$4K+</p>
                        <p className="text-sm text-[#9f9f9f]">Total Investment</p>
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
