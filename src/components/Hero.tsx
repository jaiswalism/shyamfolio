'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Terminal, Cpu } from 'lucide-react';
import { GlowingOrb, GridBackground } from './VisualEffects';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark">
                <GridBackground />
                <GlowingOrb className="top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20" />
                <GlowingOrb className="bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-secondary/20 delay-700" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-dark" />
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
                        <a href="https://github.com/jaiswalism" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hover:scale-110 transform duration-200"><Github className="w-6 h-6" /></a>
                        <a href="https://www.linkedin.com/in/jaiswalism" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hover:scale-110 transform duration-200"><Linkedin className="w-6 h-6" /></a>
                        <a href="https://twitter.com/jaiswalism" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hover:scale-110 transform duration-200"><Twitter className="w-6 h-6" /></a>
                    </motion.div>
                </div>

                {/* Visual Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        {/* Abstract Tech Visual */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-accent-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>

                        <div className="relative z-10 w-full h-full border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-6 rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

                            {/* Fake Code / Terminal */}
                            <div className="font-mono text-xs sm:text-sm text-accent-secondary opacity-80 space-y-2">
                                <div className="flex items-center gap-2 text-text-muted border-b border-white/10 pb-4 mb-4">
                                    <Terminal className="w-4 h-4" />
                                    <span>backend.service.ts</span>
                                </div>
                                <div className="space-y-1">
                                    <p>
                                        <span className="text-purple-400">export</span>{" "}
                                        <span className="text-purple-400">async</span>{" "}
                                        <span className="text-purple-400">function</span>{" "}
                                        <span className="text-yellow-300">processTransaction</span>
                                        <span className="text-white/60">(</span>
                                        <span className="text-orange-300">payload</span>
                                        <span className="text-white/60">:</span>{" "}
                                        <span className="text-blue-300">TransactionPayload</span>
                                        <span className="text-white/60">) {"{"}</span>
                                    </p>

                                    <p className="pl-4 text-gray-500">{'// Validate business rules'}</p>

                                    <p className="pl-4">
                                        <span className="text-purple-400">const</span>{" "}
                                        <span className="text-white">isValid</span>{" "}
                                        <span className="text-white/60">=</span>{" "}
                                        <span className="text-yellow-300">validatePayload</span>
                                        <span className="text-white/60">(</span>
                                        <span className="text-orange-300">payload</span>
                                        <span className="text-white/60">)</span>
                                    </p>

                                    <p className="pl-4">
                                        <span className="text-purple-400">if</span>{" "}
                                        <span className="text-white/60">(!</span>
                                        <span className="text-white">isValid</span>
                                        <span className="text-white/60">) {"{"}</span>
                                    </p>

                                    <p className="pl-8">
                                        <span className="text-purple-400">throw</span>{" "}
                                        <span className="text-purple-400">new</span>{" "}
                                        <span className="text-blue-300">Error</span>
                                        <span className="text-white/60">(</span>
                                        <span className="text-amber-300">&quot;Invalid payload&quot;</span>
                                        <span className="text-white/60">)</span>
                                    </p>

                                    <p className="pl-4 text-white/60">{"}"}</p>

                                    <p className="pl-4 text-gray-500">{'// Payload verified'}</p>

                                    <p className="pl-4">
                                        <span className="text-green-400">logger</span>
                                        <span className="text-white/60">.</span>
                                        <span className="text-green-400">info</span>
                                        <span className="text-white/60">(</span>
                                        <span className="text-green-300">&quot;Payload validated successfully&quot;</span>
                                        <span className="text-white/60">)</span>
                                    </p>

                                    <p className="pl-4">
                                        <span className="text-purple-400">await</span>{" "}
                                        <span className="text-white">db</span>
                                        <span className="text-white/60">.</span>
                                        <span className="text-white">transactions</span>
                                        <span className="text-white/60">.</span>
                                        <span className="text-yellow-300">insert</span>
                                        <span className="text-white/60">(</span>
                                        <span className="text-orange-300">payload</span>
                                        <span className="text-white/60">)</span>
                                    </p>

                                    <p className="pl-4">
                                        <span className="text-white">queue</span>
                                        <span className="text-white/60">.</span>
                                        <span className="text-yellow-300">publish</span>
                                        <span className="text-white/60">(</span>
                                        <span className="text-amber-300">&quot;transactions.processed&quot;</span>
                                        <span className="text-white/60">,</span>{" "}
                                        <span className="text-orange-300">payload</span>
                                        <span className="text-white/60">)</span>
                                    </p>

                                    <p className="text-white/60">{"}"}</p>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute -right-4 -bottom-4 p-4 bg-dark rounded-xl border border-white/10 shadow-xl animate-float">
                                <Cpu className="w-8 h-8 text-accent" />
                            </div>
                        </div>

                        <div className="absolute -top-6 -left-6 z-0 w-24 h-24 border-t-2 border-l-2 border-accent/20 rounded-tl-3xl"></div>
                        <div className="absolute -bottom-6 -right-6 z-0 w-24 h-24 border-b-2 border-r-2 border-accent/20 rounded-br-3xl"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
