'use client';

import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    role?: string;
    github?: string;
    live?: string;
    type?: string;
    image?: string;
    accent?: string;
}

const ProjectCard = ({ title, description, tech, role, github, live, type, image }: ProjectProps) => {
    return (
        <div className="group relative h-full flex flex-col bg-card-bg border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/15 hover:bg-card-bg/80 shadow-lg hover:shadow-2xl hover:shadow-black/50">
            {/* Image Section */}
            <div className="relative w-full aspect-video overflow-hidden bg-white/5 border-b border-white/5">
                {image ? (
                    <img
                        src={image}
                        alt={`${title} preview`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/[0.02] text-text-muted font-mono text-sm relative">
                        {/* Placeholder visual */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" style={{ backgroundSize: '20px 20px', backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)' }}></div>
                        <span className="relative z-10 flex flex-col items-center gap-2">
                            <span className="p-3 rounded-full border border-white/10 bg-white/5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                            </span>
                            Add Image
                        </span>
                    </div>
                )}
                
                {/* Overlay gradient for smooth transition to card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent opacity-90 pointer-events-none"></div>
                
                {/* Type badge overlaying the image */}
                {type && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 text-[10px] font-mono font-semibold text-white bg-black/40 backdrop-blur-md rounded-full border border-white/10 tracking-wider uppercase shadow-sm">
                            {type}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-4 gap-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                            {title}
                        </h3>
                        {role && (
                            <p className="text-xs font-mono text-accent/80 mb-1">{role}</p>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {github && github !== '#' && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full text-text-muted bg-white/5 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                                aria-label="View Source Code"
                            >
                                <Github size={16} />
                            </a>
                        )}
                        {live && live !== '#' && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full text-text-muted bg-white/5 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                                aria-label="View Live Project"
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="px-2.5 py-1 text-[11px] font-medium text-text-muted bg-white/[0.03] rounded-md border border-white/5 hover:bg-white/10 hover:text-white transition-colors"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
