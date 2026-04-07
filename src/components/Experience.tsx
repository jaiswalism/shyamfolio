'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, Trophy, Zap } from 'lucide-react';

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
        <section className="py-20 bg-dark relative">
            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 mb-16"
                >
                    <span className="w-8 h-1 bg-accent rounded-full"></span>
                    <h2 className="text-3xl font-bold text-white">Career <span className="text-text-muted text-lg font-normal ml-2">{'// Trajectory'}</span></h2>
                </motion.div>

                {/* SECTION 1: EXPERIENCE - Career Log Timeline */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h3 className="text-xs font-mono text-accent/60 tracking-widest uppercase mb-2">SYSTEM LOG</h3>
                        <h3 className="text-2xl font-bold text-white pl-4 border-l-4 border-accent">Experience</h3>
                    </motion.div>

                    <div className="relative space-y-8">
                        {/* Vertical Line */}
                        <div className="absolute left-[9px] md:left-[9px] top-2 bottom-2 w-px bg-white/10"></div>

                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex gap-8"
                            >
                                {/* Timeline Node */}
                                <div className={`absolute left-[4px] md:left-[4px] top-7 w-[11px] h-[11px] rounded-full bg-dark border border-accent z-10 ${item.isCurrent ? 'shadow-[0_0_12px_rgba(255,121,198,0.6)]' : 'shadow-[0_0_8px_rgba(255,121,198,0.4)]'}`}></div>

                                {/* Content */}
                                <div className="flex-1 ml-8">
                                    <div className={`p-6 bg-card-bg border rounded-xl transition-all duration-300 group ${item.isCurrent ? 'border-accent/20 shadow-[0_0_20px_rgba(255,121,198,0.15)]' : 'border-white/5 hover:border-accent/30'}`}>
                                        {/* Company Name - Prominent */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <Briefcase size={16} className="text-accent" />
                                            <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{item.company}</h4>
                                        </div>

                                        {/* Role + Duration - Secondary */}
                                        <div className="flex flex-wrap items-center gap-3 text-sm mb-4 font-mono text-text-secondary">
                                            <span className="text-white/80">{item.role}</span>
                                            <span className="text-accent/40">•</span>
                                            <div className="flex items-center gap-1 text-accent/80">
                                                <Calendar size={12} />
                                                <span>{item.period}</span>
                                            </div>
                                        </div>

                                        {/* Max 2 Bullets */}
                                        <ul className="space-y-2">
                                            {item.bullets.map((bullet, i) => (
                                                <li key={i} className="text-text-muted text-sm leading-relaxed flex gap-2">
                                                    <span className="text-accent/60 mt-0.5 leading-none">▸</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* SECTION 2: ACHIEVEMENTS - Grid Badges */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h3 className="text-xs font-mono text-accent/60 tracking-widest uppercase mb-2">SIGNAL BADGES</h3>
                        <h3 className="text-2xl font-bold text-white pl-4 border-l-4 border-accent">Achievements</h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {achievementsData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.08) }}
                                className="group"
                            >
                                <div className="h-full p-5 bg-card-bg border border-white/5 rounded-xl hover:border-accent/40 hover:shadow-[0_0_25px_rgba(255,121,198,0.2)] transition-all duration-200 hover:scale-[1.02] relative overflow-hidden">

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                                            <item.icon size={18} className="text-accent" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-white leading-tight mb-2 group-hover:text-accent transition-colors">
                                                {item.title}
                                            </h4>
                                            <span className="text-xs font-mono text-accent/60">{item.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* SECTION 3: EDUCATION - System Metadata Block */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h3 className="text-xs font-mono text-accent/60 tracking-widest uppercase mb-2">SYSTEM METADATA</h3>
                        <h3 className="text-2xl font-bold text-white pl-4 border-l-4 border-accent">Education</h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="p-6 bg-card-bg/50 border border-white/10 rounded-lg"
                    >
                        <div className="font-mono text-sm space-y-3 text-text-secondary">
                            <div className="text-accent/80 text-xs tracking-wider border-b border-white/5 pb-2 mb-3">
                                SYSTEM: EDUCATION
                            </div>
                            <div className="grid grid-cols-[140px_1fr] gap-x-4 gap-y-2">
                                <span className="text-text-muted">Institution</span>
                                <span className="text-white">: SRM Institute of Science & Technology</span>

                                <span className="text-text-muted">Degree</span>
                                <span className="text-white">: B.Tech in Computer Science & Engineering</span>

                                <span className="text-text-muted">Specialization</span>
                                <span className="text-white">: Blockchain</span>

                                <span className="text-text-muted">CGPA</span>
                                <span className="text-white">: 9.62 / 10.00</span>

                                <span className="text-text-muted">Status</span>
                                <span className="text-accent">: In Progress</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
