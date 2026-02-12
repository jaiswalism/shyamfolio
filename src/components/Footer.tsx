import { Github, Linkedin, Twitter, ArrowUpRight, Heart, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="bg-dark/50 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* LEFT COLUMN: Identity (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight mb-2 relative inline-block">
                                Shyam Jaiswal
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ease-out ${mounted ? 'w-[65%]' : 'w-0'}`} />
                            </h2>
                            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mt-4">
                                Building production-grade web, mobile, and Web3 systems.
                                Focused on reliability and real-world usage.
                            </p>
                        </div>


                        <div className="space-y-3 text-sm text-text-secondary">
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-accent" />
                                <span>Chennai, India</span>
                            </div>
                            <a href="mailto:hello@shyamjaiswal.in" className="flex items-center gap-3 hover:text-accent transition-colors group">
                                <Mail size={16} className="text-accent" />
                                <span>hello@shyamjaiswal.in</span>
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-300 group">
                                <Github size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-300 group">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-300 group">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* SPACER (Span 2) */}
                    <div className="hidden lg:block lg:col-span-2" />

                    {/* MIDDLE COLUMN: Navigation (Span 3) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-accent"></span>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'Projects', 'Blogs', 'Experience', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-muted-foreground hover:text-[#ff79c6] text-sm group"
                                    >
                                        <span className="relative inline-flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="lucide lucide-arrow-right w-3 h-3 absolute -left-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-accent"></span>
                            Focus Areas
                        </h3>
                        <ul className="space-y-3">
                            {['Backend Systems', 'Web Platforms', 'iOS Applications', 'Web3 Integrations', 'System Design'].map((item) => (
                                <li key={item} className="text-text-muted text-sm cursor-default">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* STAY UPDATED SECTION */}
                <div className="border-t border-b border-white/5 pt-8 pb-8 mb-12">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="max-w-md">
                            <h3 className="text-white font-bold mb-2">Stay Updated</h3>
                            <p className="text-text-muted text-sm">
                                Occasional updates on projects, writing, and things I&apos;m building.
                            </p>
                        </div>
                        <div className="flex justify-end max-md:justify-center">
                            <form className="flex items-center gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-[280px] bg-dark border border-white/10 rounded-md px-4 py-2 text-sm text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                                />
                                <button
                                    type="button"
                                    className="bg-accent hover:bg-accent-hover text-dark font-bold px-4 py-2 rounded-md text-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FOOTER BOTTOM BAR */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono">
                    <div className="flex items-center gap-2">
                        <span className="text-text-secondary">© 2026 Shyam Jaiswal.</span>
                        <span>Made with</span>
                        <Heart size={12} className="text-red-500 fill-red-500" />
                        <span>and</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                            <line x1="6" y1="1" x2="6" y2="4"></line>
                            <line x1="10" y1="1" x2="10" y2="4"></line>
                            <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                        <span>in India.</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span>·</span>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <span>·</span>
                        <a href="https://github.com/shyam/portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors group">
                            View Source
                            <ArrowUpRight size={10} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
