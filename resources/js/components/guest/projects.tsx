import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;
    type?: string;
}

const projectCategories = {
    all: [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform with real-time inventory management and payment integration.',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/ecommerce',
            image: '/images/projects/ecommerce.jpg',
            type: 'personal'
        },
        {
            id: '2',
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates and team collaboration features.',
            technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/taskapp',
            image: '/images/projects/taskapp.jpg',
            type: 'open-source'
        },
        {
            id: '3',
            title: 'AI Chat Dashboard',
            description: 'Analytics dashboard powered by AI for insights and reporting with interactive visualizations.',
            technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/ai-chat',
            image: '/images/projects/ai-chat.jpg',
            type: 'private'
        },
        {
            id: '4',
            title: 'Social Media App',
            description: 'A social networking platform with real-time messaging, notifications, and user interactions.',
            technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/social-app',
            image: '/images/projects/social-app.jpg',
            type: 'open-source'
        },
        {
            id: '5',
            title: 'API Gateway Service',
            description: 'Scalable API gateway service with rate limiting, authentication, and request logging.',
            technologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/api-gateway',
            image: '/images/projects/api-gateway.jpg',
            type: 'private'
        },
        {
            id: '6',
            title: 'Mobile Fitness Tracker',
            description: 'Mobile application for tracking fitness goals with social features and progress analytics.',
            technologies: ['React Native', 'Firebase', 'TypeScript'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/fitness-tracker',
            image: '/images/projects/fitness-tracker.jpg',
            type: 'personal'
        }
    ],
    frontend: [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform with real-time inventory management and payment integration.',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/ecommerce',
            image: '/images/projects/ecommerce.jpg',
            type: 'personal'
        },
        {
            id: '2',
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates and team collaboration features.',
            technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/taskapp',
            image: '/images/projects/taskapp.jpg',
            type: 'open-source'
        },
        {
            id: '4',
            title: 'Social Media App',
            description: 'A social networking platform with real-time messaging, notifications, and user interactions.',
            technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/social-app',
            image: '/images/projects/social-app.jpg',
            type: 'open-source'
        }
    ],
    backend: [
        {
            id: '3',
            title: 'AI Chat Dashboard',
            description: 'Analytics dashboard powered by AI for insights and reporting with interactive visualizations.',
            technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/ai-chat',
            image: '/images/projects/ai-chat.jpg',
            type: 'private'
        },
        {
            id: '5',
            title: 'API Gateway Service',
            description: 'Scalable API gateway service with rate limiting, authentication, and request logging.',
            technologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/api-gateway',
            image: '/images/projects/api-gateway.jpg',
            type: 'private'
        }
    ],
    mobile: [
        {
            id: '6',
            title: 'Mobile Fitness Tracker',
            description: 'Mobile application for tracking fitness goals with social features and progress analytics.',
            technologies: ['React Native', 'Firebase', 'TypeScript'],
            link: 'https://example.com',
            github: 'https://github.com/bijanshakya/fitness-tracker',
            image: '/images/projects/fitness-tracker.jpg',
            type: 'personal'
        }
    ]
};

function ProjectCard({ project }: { project: Project }) {
    const getTypeColor = (type?: string) => {
        switch (type) {
            case 'open-source':
                return 'border-green-200  bg-green-50  text-green-700 ';
            case 'private':
                return 'border-red-200  bg-red-50  text-red-700 ';
            case 'personal':
                return 'border-blue-200  bg-blue-50  text-blue-700 ';
            default:
                return 'border-gray-200  bg-gray-50  text-gray-700 ';
        }
    };

    const getTypeLabel = (type?: string) => {
        switch (type) {
            case 'open-source':
                return 'Open Source';
            case 'private':
                return 'Private';
            case 'personal':
                return 'Personal';
            default:
                return '';
        }
    };

    return (
        <div className="border border-gray-200  overflow-hidden rounded hover:border-blue-600 -400 transition-colors">
            {/* Project Image */}
            {project.image && (
                <div className="relative w-full h-48 bg-gray-100  overflow-hidden">
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900  flex-1">
                        {project.title}
                    </h3>
                    {project.type && (
                        <span className={`text-xs px-2 py-1 border rounded whitespace-nowrap ${getTypeColor(project.type)}`}>
                            {getTypeLabel(project.type)}
                        </span>
                    )}
                </div>
                <p className="text-gray-600  text-sm mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 border border-gray-200  text-gray-700  rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-200  text-gray-700  hover:bg-gray-100 -900 hover:text-blue-600 -400 rounded transition-all text-sm"
                        >
                            <ExternalLink size={16} />
                            View Project
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-200  text-gray-700  hover:bg-gray-100 -900 hover:text-blue-600 -400 rounded transition-all text-sm"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects({ className }: { className?: string }) {
    return (
        <div className={`w-full ${className}`}>
            <div className='text-center'>
                <h1 className="text-3xl  font-bold text-gray-900  mb-6">
                    Works & Projects
                </h1>

                <p className='mb-6'>
                    Take a look at my work and projects. I'm always looking for new opportunities to collaborate and
                    contribute to exciting projects.
                </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
                <TabsList className=" bg-white mb-8 w-full justify-start" variant="line">
                    <TabsTrigger value="all">All Projects</TabsTrigger>
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="mobile">Mobile</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectCategories.all.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="frontend" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectCategories.frontend.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="backend" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectCategories.backend.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="mobile" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectCategories.mobile.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
