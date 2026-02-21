import { Code, Smartphone, Database, Server, Palette, Zap } from 'lucide-react';
import ServiceBlock, { type Service } from '@/components/guest/block';
import ClickToAction from '@/components/guest/click-to-action';
import Header from '@/components/guest/header';
import GuestLayout from '@/layouts/guest/guest-layout';


const servicesData: Service[] = [
    {
        id: 'web-dev',
        title: 'Web Development',
        description: 'Building modern, responsive web applications using the latest technologies and best practices.',
        icon: <Code className="h-8 w-8 text-blue-600  " />,
        features: ['Blade', 'React & Next.js', 'Responsive Design', 'Performance Optimization'],
    },
    {
        id: 'mobile-dev',
        title: 'Mobile Development',
        description: 'Creating seamless mobile experiences for iOS and Android platforms.',
        icon: <Smartphone className="h-8 w-8 text-blue-600  " />,
        features: ['React Native', 'Cross-Platform'],
    },
    {
        id: 'backend-dev',
        title: 'Backend Development',
        description: 'Designing scalable server-side solutions with robust APIs and databases.',
        icon: <Server className="h-8 w-8 text-blue-600  " />,
        features: ['Laravel', 'Node.js & Express', 'Database Design', 'API Development'],
    },
    {
        id: 'database-design',
        title: 'Database Design',
        description: 'Architecting efficient and secure database solutions for your applications.',
        icon: <Database className="h-8 w-8 text-blue-600  " />,
        features: ['SQL', 'Data Modeling', 'Optimization'],
    },
    {
        id: 'optimization',
        title: 'Performance Optimization',
        description: 'Improving application speed and efficiency for better user experience.',
        icon: <Zap className="h-8 w-8 text-blue-600  " />,
        features: ['Code Optimization', 'Caching', 'Load Time Reduction'],
    },
];


export default function Services() {
    return (
        <GuestLayout breadcrumbs="Services">
            <section className="space-y-8">
                {/* Header */}
                <Header title="Our Services" description="I offer a comprehensive range of services to help bring your ideas to life. From concept to deployment, I provide professional solutions tailored to your specific needs." />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service) => (
                        <ServiceBlock key={service.id} service={service} />
                    ))}
                </div>

            </section>

            <ClickToAction className="mt-8" />
        </GuestLayout>
    );
}
