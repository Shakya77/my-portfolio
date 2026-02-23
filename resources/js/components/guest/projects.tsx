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
        image: '',
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
            case 'open-source': return 'bg-emerald-500/10 text-emerald-400';
            case 'private': return 'bg-rose-500/10 text-rose-400';
            case 'personal': return 'bg-[#eb5d3a]/10 text-[#eb5d3a]';
            default: return 'bg-[#1a1a1a] text-[#9f9f9f]';
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
        <div className="bg-[#0f0f0f] rounded-xl overflow-hidden hover:bg-[#141414] transition-all duration-300">
            {/* Project Image */}
            <div className="relative w-full h-40 sm:h-48 bg-[#1a1a1a] overflow-hidden">
                <img
                    src={project.image || "https://placehold.co/600x400/1a1a1a/9f9f9f?text=No+Image"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-80 hover:opacity-100"
                />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white flex-1">{project.title}</h3>
                    {project.type && (
                        <span className={`text-xs px-2 py-1 rounded-lg font-medium whitespace-nowrap ${getTypeColor(project.type)}`}>
                            {getTypeLabel(project.type)}
                        </span>
                    )}
                </div>

                <p className="text-[#9f9f9f] text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 bg-[#1a1a1a] text-[#cecece] rounded-lg">
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
                            className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-[#cecece] hover:bg-[#eb5d3a] hover:text-white rounded-xl text-sm transition-all duration-300"
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
                            className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-[#cecece] hover:bg-[#eb5d3a] hover:text-white rounded-xl text-sm transition-all duration-300"
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
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Works & Projects</h1>
                <p className="text-[#9f9f9f]">Take a look at my work and projects. I'm always looking for new opportunities to collaborate and contribute to exciting projects.</p>
            </div>)}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}