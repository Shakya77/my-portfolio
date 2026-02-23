import { ExternalLink, Github } from 'lucide-react';

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

const projects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'Developed a simple E-commerce Application that allows users to browse products, add items to cart, and complete secure checkout processes...',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        link: '',
        github: '',
        image: '',
        type: 'personal'
    },
    {
        id: '2',
        title: 'Task Management App',
        description: 'Built a simple and intuitive Task Management App that allows users to create, organize, update, and delete daily tasks...',
        technologies: ['React', 'TypeScript'],
        link: '',
        github: '',
        image: '', // no image, will use placeholder
        type: 'open-source'
    },
    {
        id: '3',
        title: 'Restaurant Management System',
        description: 'Built a comprehensive Restaurant Management System to streamline daily restaurant operations...',
        technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
        link: '',
        github: '',
        image: '',
        type: 'private'
    },
    {
        id: '4',
        title: 'Password Keeper',
        description: 'Developed a secure Password Keeper Web App that allows users to safely store, organize, and manage their passwords...',
        technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
        link: '',
        github: 'https://github.com/Shakya77/password-keeper',
        image: '/images/image.png',
        type: 'open-source'
    },
];

function ProjectCard({ project }: { project: Project }) {
    const getTypeColor = (type?: string) => {
        switch (type) {
            case 'open-source': return 'border-emerald-200 bg-emerald-50 text-emerald-700';
            case 'private': return 'border-rose-200 bg-rose-50 text-rose-700';
            case 'personal': return 'border-indigo-200 bg-indigo-50 text-indigo-700';
            default: return 'border-gray-200 bg-gray-50 text-gray-700';
        }
    };

    const getTypeLabel = (type?: string) => {
        switch (type) {
            case 'open-source': return 'Open Source';
            case 'private': return 'Private';
            case 'personal': return 'Personal';
            default: return '';
        }
    };

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 hover:shadow-md transition-all duration-300 bg-white">
            {/* Project Image */}
            <div className="relative w-full h-40 sm:h-48 bg-gray-100 overflow-hidden">
                <img
                    src={project.image || "https://placehold.co/600x400?text=No+Image"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1">{project.title}</h3>
                    {project.type && (
                        <span className={`text-xs px-2 py-1 border rounded-md font-medium whitespace-nowrap ${getTypeColor(project.type)}`}>
                            {getTypeLabel(project.type)}
                        </span>
                    )}
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 border border-gray-200 text-gray-600 rounded-md bg-gray-50">
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
                            className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 rounded-lg text-sm transition-all duration-300"
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
                            className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 rounded-lg text-sm transition-all duration-300"
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

export default function Projects({ className, show }: { className?: string, show?: boolean }) {
    return (
        <div className={`w-full ${className}`}>

            {show && (<div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Works & Projects</h1>
                <p className="text-gray-600">Take a look at my work and projects. I'm always looking for new opportunities to collaborate and contribute to exciting projects.</p>
            </div>)}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}