'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    // { href: '/#projects', label: 'Projects' },
    // { href: '/#skills', label: 'Skills' },
    // { href: '/#experience', label: 'Experience' },
    { href: '/blog', label: 'Blog' },
    { href: '/mint', label: 'Mint' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/hide based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            // Background blur after scrolling
            setScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        if (href.startsWith('/#')) return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: hidden ? -100 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
                    : 'bg-transparent'
                    }`}
            >
                <nav className="container-custom">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="relative group flex items-center gap-2">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-accent/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center justify-center w-9 h-9 bg-accent/10 border border-accent/30 rounded-lg group-hover:border-accent/60 transition-colors">
                                    <Terminal size={18} className="text-accent" />
                                </div>
                            </div>
                            <span className="font-bold text-lg tracking-tight text-white group-hover:text-accent transition-colors">
                                SJ<span className="text-accent">.</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg group ${isActive(link.href)
                                        ? 'text-accent'
                                        : 'text-text-secondary hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                    {/* Active indicator */}
                                    {isActive(link.href) && (
                                        <div className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/20" />
                                    )}
                                    {/* Hover effect */}
                                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href="/#contact"
                                className="group relative px-5 py-2.5 bg-accent text-dark text-sm font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-1.5">
                                    Let&apos;s Talk
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={20} className="text-accent" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={20} className="text-text-secondary" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-dark/90 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-surface border-l border-white/10 z-50 md:hidden overflow-y-auto"
                        >
                            <div className="flex flex-col h-full">
                                {/* Menu Header */}
                                <div className="flex items-center justify-between p-4 border-b border-white/5">
                                    <span className="text-sm font-mono text-text-muted uppercase tracking-wider">Menu</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        <X size={18} className="text-text-muted" />
                                    </button>
                                </div>

                                {/* Menu Links */}
                                <nav className="flex-1 p-4">
                                    <div className="space-y-1">
                                        {navLinks.map((link, index) => (
                                            <motion.div
                                                key={link.href}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all ${isActive(link.href)
                                                        ? 'bg-accent/10 text-accent border border-accent/20'
                                                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                                                        }`}
                                                >
                                                    <span className="font-medium">{link.label}</span>
                                                    {isActive(link.href) && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                    )}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </nav>

                                {/* Menu Footer */}
                                <div className="p-4 border-t border-white/5">
                                    <Link
                                        href="/#contact"
                                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent text-dark font-bold rounded-lg hover:bg-accent-hover transition-colors"
                                    >
                                        Let&apos;s Talk
                                        <ArrowUpRight size={16} />
                                    </Link>

                                    <p className="text-center text-xs text-text-muted mt-4">
                                        © 2026 Shyam Jaiswal
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
