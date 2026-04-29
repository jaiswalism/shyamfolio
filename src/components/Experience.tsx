'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, Trophy, Zap, GraduationCap, Building2 } from 'lucide-react';

const experienceData = [
    {
        role: "iOS App Developer Intern",
        company: "Infosys",
        period: "Mar 2026",
        bullets: [
            "Enterprise iOS internship focused on Swift-based application development",
            "Contributing to production iOS codebases and mobile architecture"
        ],
        isCurrent: true
    },
    {
        role: "Backend & Web3 Developer Intern",
        company: "Paywaz",
        period: "Sep 2025 – Jan 2026",
        bullets: [
            "Built backend services and Web3 integrations for decentralized payments platform",
            "Implemented APIs and transaction flows supporting blockchain-powered payments"
        ],
        isCurrent: false
    },
    {
        role: "Full-Stack Developer",
        company: "Anand Tempo Services",
        period: "Jun 2025 – Aug 2025",
        bullets: [
            "Built production billing and service management system used in daily operations",
            "Implemented invoice generation, payment tracking, and structured data handling"
        ],
        isCurrent: false
    }
];

const achievementsData = [
    {
        title: "Apple Swift Student Challenge — Winner",
        year: "2025",
        icon: Trophy
    },
    {
        title: "IEI NWC QuadFusion 1.0 — 2nd Prize",
        year: "2025",
        icon: Award
    },
    {
        title: "Genesis Hackathon — 3rd Prize",
        year: "2023",
        icon: Zap
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-dark relative">
            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-accent rounded-full"></span>
                            <span className="text-accent text-sm font-mono tracking-widest uppercase font-semibold">Background</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Experience & Education
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24">
                    {/* LEFT COLUMN: Experience */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                            <Briefcase className="text-accent" size={24} />
                            Career History
                        </h3>
                        
                        <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12 pb-4">
                            {experienceData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="relative pl-8 md:pl-10 group"
                                >
                                    {/* Timeline Node */}
                                    <div className={`absolute left-[-5px] top-1.5 w-[10px] h-[10px] rounded-full transition-all duration-300 ${item.isCurrent ? 'bg-accent shadow-[0_0_12px_rgba(255,121,198,0.8)] scale-125' : 'bg-dark border-2 border-white/20 group-hover:border-accent'}`}></div>

                                    {/* Content */}
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                                        <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                                            {item.role}
                                        </h4>
                                        <div className="flex items-center gap-1.5 text-xs font-mono text-accent/80 bg-accent/10 px-3 py-1.5 rounded-full w-fit border border-accent/20">
                                            <Calendar size={13} />
                                            <span>{item.period}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-text-muted font-medium mb-5">
                                        <Building2 size={16} />
                                        <span className="text-[15px]">{item.company}</span>
                                    </div>

                                    <ul className="space-y-3 mt-4">
                                        {item.bullets.map((bullet, i) => (
                                            <li key={i} className="text-text-secondary text-sm leading-relaxed flex items-start gap-3 group/bullet">
                                                <span className="text-white/20 mt-1 transition-colors group-hover/bullet:text-accent">▹</span>
                                                <span className="flex-1">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Achievements & Education */}
                    <div className="space-y-16">
                        {/* Achievements */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Award className="text-accent" size={24} />
                                Achievements
                            </h3>
                            
                            <div className="space-y-4">
                                {achievementsData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] hover:border-accent/30 transition-all duration-300 shadow-sm"
                                    >
                                        <div className="p-3 bg-card-bg border border-white/5 rounded-lg group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-[0_0_15px_rgba(255,121,198,0.15)] transition-all">
                                            <item.icon size={20} className="text-accent group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-medium group-hover:text-accent transition-colors leading-tight">{item.title}</h4>
                                        </div>
                                        <div className="text-xs font-mono text-text-muted bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5 group-hover:text-white group-hover:border-white/20 transition-colors">
                                            {item.year}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                                <GraduationCap className="text-accent" size={24} />
                                Education
                            </h3>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-card-bg border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6 shadow-sm">
                                        <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                        </span>
                                        In Progress
                                    </div>
                                    
                                    <h4 className="text-xl font-bold text-white mb-2 leading-tight">B.Tech in Computer Science</h4>
                                    <p className="text-text-secondary mb-8 font-medium">SRM Institute of Science & Technology</p>
                                    
                                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                        <div>
                                            <p className="text-text-muted text-[11px] uppercase tracking-wider mb-1 font-semibold">Specialization</p>
                                            <p className="text-white font-medium text-sm">Blockchain</p>
                                        </div>
                                        <div>
                                            <p className="text-text-muted text-[11px] uppercase tracking-wider mb-1 font-semibold">CGPA</p>
                                            <p className="text-white font-medium text-sm">9.62 / 10.0</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
