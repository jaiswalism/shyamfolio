'use client';

import { motion } from 'framer-motion';
import TechIcon, { TechIconName } from './TechIcon';

const techStack: TechIconName[] = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'Hono',
    'Bun',
    // 'Python',
    'C++',
    'Supabase',
    'MongoDB',
    'Swift',
    'Solidity',
    'Git',
    'Figma',
];

const contextChips = [
    { label: 'FRONTEND', color: '#2b7fff', duration: 3 },
    { label: 'BACKEND & SYSTEMS', color: '#22c55e', duration: 4 },
    { label: 'MOBILE', color: '#ff79c6', duration: 3.5 },
    { label: 'WEB3', color: '#f59e0b', duration: 4.5 },
];

const Skills = () => {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter"
                    >
                        TECH STACK
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary max-w-2xl mx-auto text-lg font-light"
                    >
                        Core technologies I use to build and ship production software.
                    </motion.p>
                </div>

                {/* Context Chips */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {contextChips.map((chip, index) => (
                        <div
                            key={index}
                            className="px-6 py-2 rounded-full border border-white/5 bg-white/5 text-xs font-semibold tracking-widest text-text-muted select-none flex items-center gap-2"
                        >
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{
                                    backgroundColor: chip.color,
                                    animation: `blink ${chip.duration}s ease-in-out infinite`,
                                }}
                            />
                            {chip.label}
                        </div>
                    ))}
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300"
                        >
                            <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                                <TechIcon name={tech} className="w-10 h-10 text-white" />
                            </div>
                            <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors text-center leading-tight">
                                {tech}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
        </section>
    );
};

export default Skills;