'use client';

import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    role?: string;
    github?: string;
    live?: string;
    type?: string;
    accent?: string;
}

const ProjectCard = ({ title, description, tech, role, github, live, type, accent = 'accent' }: ProjectProps) => {
    return (
        <div className="group relative h-full">
            <div className="relative h-full bg-card-bg border border-white/5 rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-white/15 hover:bg-card-bg/80">
                {/* Top row: type badge + links */}
                <div className="flex justify-between items-start mb-5">
                    {type && (
                        <span className="text-[11px] font-mono text-text-muted tracking-wider uppercase">
                            {type}
                        </span>
                    )}
                    <div className="flex items-center gap-2 ml-auto">
                        {github && github !== '#' && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-md text-text-muted hover:text-white hover:bg-white/5 transition-all"
                            >
                                <Github size={15} />
                            </a>
                        )}
                        {live && live !== '#' && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-md text-text-muted hover:text-white hover:bg-white/5 transition-all"
                            >
                                <ExternalLink size={15} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                    {title}
                </h3>

                {/* Role */}
                {role && (
                    <p className="text-xs font-mono text-accent/70 mb-3">{role}</p>
                )}

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="px-2 py-0.5 text-[11px] font-mono text-text-muted bg-white/[0.03] rounded border border-white/5"
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
