'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Veyro",
        type: "Production",
        role: "Full-Stack · Solo",
        description: "Billing and service management system built for a logistics client. Handles service logs, route tracking, billing, and payments in a production environment.",
        tech: ["Backend Logic", "Data Modeling", "Business Rules"],
        github: "#",
        live: "#"
    },
    {
        title: "Rewind",
        type: "iOS · Team",
        role: "Core iOS Developer",
        description: "Native mental health companion app designed for privacy and calm. Implemented core state management and smooth performance with Swift and SwiftUI.",
        tech: ["Swift", "SwiftUI", "State Management"],
        github: "#",
        live: "#"
    },
    {
        title: "CodePvP",
        type: "Web · Team",
        role: "Backend Developer",
        description: "Real-time competitive coding platform for head-to-head matches. Built the backend judging logic and result processing for live code evaluation.",
        tech: ["Real-Time Systems", "Judging Logic", "Backend"],
        github: "#",
        live: "#"
    },
    {
        title: "Taskify",
        type: "Full Stack",
        role: "Solo Project",
        description: "Productivity app with custom API design, secure authentication, and relational data modeling. Full ownership from database to frontend.",
        tech: ["React", "Node.js", "PostgreSQL"],
        github: "#",
        live: "#"
    },
    {
        title: "Elyxir",
        type: "Web3",
        role: "Experiment",
        description: "Decentralized application exploring EVM tooling integration and security-aware smart contract interaction.",
        tech: ["Solidity", "Ethers.js", "React"],
        github: "#",
        live: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-dark relative">
            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 mb-16"
                >
                    <span className="w-8 h-1 bg-accent rounded-full"></span>
                    <h2 className="text-3xl font-bold text-white">Projects <span className="text-text-muted text-lg font-normal ml-2">{'// Selected Work'}</span></h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
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
