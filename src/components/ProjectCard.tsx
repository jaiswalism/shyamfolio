import { Github, ExternalLink, Activity, Layers, Code } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    metrics?: { label: string; value: string }[];
    github?: string;
    live?: string;
    type?: string;
}

const ProjectCard = ({ title, description, tech, metrics, github, live, type = "DApp" }: ProjectProps) => {
    return (
        <div className="group relative h-full">
            {/* Background Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-secondary rounded-xl opacity-20 group-hover:opacity-60 blur transition duration-500"></div>

            <div className="relative h-full bg-card-bg backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col overflow-hidden">
                {/* Header / Type */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2 text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded border border-accent-cyan/20">
                        <Activity size={12} />
                        <span>{type}</span>
                    </div>

                    <div className="flex space-x-3 text-text-muted">
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hover:scale-110">
                                <Github size={18} />
                            </a>
                        )}
                        {live && (
                            <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hover:scale-110">
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Metrics / Stats */}
                {metrics && metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-dark/40 rounded-lg border border-white/5">
                        {metrics.map((m, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-text-muted">{m.label}</span>
                                <span className="text-secondary font-mono font-bold text-sm">{m.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-2 mt-auto">
                    <div className="flex items-center space-x-2 text-xs text-text-muted mb-2">
                        <Code size={12} />
                        <span>Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tech.map((t) => (
                            <span key={t} className="px-2 py-1 text-[10px] font-medium text-text-primary bg-white/5 hover:bg-white/10 rounded border border-white/5 transition-colors cursor-default">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Layers size={80} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
