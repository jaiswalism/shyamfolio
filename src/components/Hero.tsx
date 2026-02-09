"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { GlowingOrb, GridBackground } from './VisualEffects';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark">
                <GridBackground />
                <GlowingOrb className="top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20" />
                <GlowingOrb className="bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-secondary/20 delay-700" />
            </div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span className="text-xs font-mono text-accent tracking-wider uppercase">Available for work</span>
                    </motion.div>

                    <div className="space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
                        >
                            WEB2 & WEB3 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary glitch-wrapper">
                                <span className="glitch" data-text="DEVELOPER">DEVELOPER</span>
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg sm:text-xl text-text-secondary max-w-lg leading-relaxed font-light"
                    >
                        Building production-grade web applications, mobile apps, and secure Web3 smart contract features.
                        <br />
                        <span className="text-sm font-mono text-accent mt-4 block">Backend • Full-Stack • iOS • Smart Contracts</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <button className="group relative px-6 py-3 bg-accent text-dark font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative flex items-center gap-2">
                                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button className="px-6 py-3 border border-white/10 hover:border-accent/50 text-white rounded-lg transition-all hover:bg-white/5 font-medium backdrop-blur-sm">
                            Contact Me
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center gap-6 pt-8 text-text-muted"
                    >
                        <a href="#" className="hover:text-accent transition-colors hover:scale-110 transform duration-200"><Github className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-accent transition-colors hover:scale-110 transform duration-200"><Linkedin className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-accent transition-colors hover:scale-110 transform duration-200"><Twitter className="w-6 h-6" /></a>
                    </motion.div>
                </div>


            </div>
        </section>
    );
};

export default Hero;
