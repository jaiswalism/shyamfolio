'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Veyro",
        type: "Production Platform",
        description: "Billing and service management system built for a logistics client to replace manual workflows. Handles service logs, route tracking, billing, and payments in a production environment. Focused on data reliability and operational correctness.",
        tech: ["Backend Logic", "Data Modeling", "Business Rules", "Systems"],
        metrics: [
            { label: "Status", value: "Production" },
            { label: "Focus", value: "Reliability" }
        ],
        github: "#",
        live: "#"
    },
    {
        title: "Rewind",
        type: "Team Project · iOS",
        description: "Native iOS mental health companion app designed for privacy and calm. Implemented core state management and smooth performance for non-intrusive user reflection. Built with Swift and SwiftUI.",
        tech: ["Swift", "SwiftUI", "State Management", "Accessibility"],
        metrics: [
            { label: "Role", value: "iOS Dev" },
            { label: "Focus", value: "Privacy" }
        ],
        github: "#",
        live: "#"
    },
    {
        title: "CodePvP",
        type: "Team Project · Web",
        description: "Real-time competitive coding platform enabling head-to-head matches. Owned the backend development, implementing real-time judging logic and result processing for live code evaluation.",
        tech: ["Backend", "Real-Time Systems", "Judging Logic"],
        metrics: [
            { label: "Role", value: "Backend" },
            { label: "Type", value: "Real-Time" }
        ],
        github: "#",
        live: "#"
    },
    {
        title: "Taskify",
        type: "Full Stack",
        description: "Productivity application demonstrating full-stack ownership. Features custom API design, secure authentication, and relational data modeling.",
        tech: ["React", "Node.js", "PostgreSQL"],
        metrics: [
            { label: "Scope", value: "Full Stack" }
        ],
        github: "#",
        live: "#"
    },
    {
        title: "Elyxir",
        type: "Web3 Experiment",
        description: "Experimental decentralized application feature. Demonstrates EVM tooling integration and security-aware smart contract interaction.",
        tech: ["Solidity", "Ethers.js", "React"],
        metrics: [
            { label: "Type", value: "Web3" }
        ],
        github: "#",
        live: "#"
    }
];

const Projects = () => {
    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 pointer-events-none"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center space-x-2 mb-2"
                        >
                            <span className="w-8 h-1 bg-accent rounded-full"></span>
                            <span className="text-accent font-mono text-sm tracking-widest uppercase">Portfolio</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                            Deployed <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">Artifacts</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-text-secondary max-w-sm text-right hidden md:block"
                    >
                        <p>A collection of decentralized applications and smart contracts deployed on mainnet.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
