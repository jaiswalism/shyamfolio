'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Filter, Search } from 'lucide-react';
import BlogCard, { BlogPost } from './BlogCard';
import { GlowingOrb } from '../VisualEffects';

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Building Gas-Optimized Smart Contracts: Lessons from Production',
        excerpt: 'Deep dive into gas optimization patterns I discovered while building DeFi protocols. From storage packing to assembly tricks that saved millions in transaction costs.',
        category: 'Web3',
        readTime: 12,
        date: 'Feb 28, 2026',
        featured: true,
        slug: 'gas-optimized-smart-contracts'
    },
    {
        id: '2',
        title: 'SwiftUI Architecture at Scale',
        excerpt: 'How I structured a production iOS app with 50+ screens using composable architecture patterns and dependency injection.',
        category: 'iOS',
        readTime: 8,
        date: 'Feb 20, 2026',
        slug: 'swiftui-architecture-scale'
    },
    {
        id: '3',
        title: 'Event Sourcing in Node.js: A Practical Guide',
        excerpt: 'Implementing event sourcing for a payments platform. When to use it, when to avoid it, and the patterns that actually work.',
        category: 'Backend',
        readTime: 15,
        date: 'Feb 15, 2026',
        slug: 'event-sourcing-nodejs'
    },
    {
        id: '4',
        title: 'The Monorepo Decision: Turborepo in Production',
        excerpt: 'After 6 months of running a turborepo setup with 12 packages, here is what I learned about build times, dependencies, and team velocity.',
        category: 'Architecture',
        readTime: 10,
        date: 'Feb 10, 2026',
        slug: 'monorepo-turborepo-production'
    },
    {
        id: '5',
        title: 'Why I Stopped Chasing New Frameworks',
        excerpt: 'A reflection on developer productivity, the cost of context switching, and finding depth over breadth in an ever-changing landscape.',
        category: 'Thoughts',
        readTime: 6,
        date: 'Feb 5, 2026',
        slug: 'stopped-chasing-frameworks'
    },
    {
        id: '6',
        title: 'Zero-Knowledge Proofs for Web Developers',
        excerpt: 'Breaking down ZK concepts for frontend and backend developers. No mathematics degree required.',
        category: 'Web3',
        readTime: 14,
        date: 'Jan 28, 2026',
        slug: 'zk-proofs-web-developers'
    },
    {
        id: '7',
        title: 'Building Offline-First iOS Apps',
        excerpt: 'Strategies for sync, conflict resolution, and maintaining data integrity when connectivity is unreliable.',
        category: 'iOS',
        readTime: 11,
        date: 'Jan 20, 2026',
        slug: 'offline-first-ios'
    },
    {
        id: '8',
        title: 'API Design Mistakes I Keep Making',
        excerpt: 'A honest look at common API design pitfalls and how to build APIs that developers actually enjoy using.',
        category: 'Backend',
        readTime: 7,
        date: 'Jan 15, 2026',
        slug: 'api-design-mistakes'
    },
];

const categories = ['All', 'Web3', 'Backend', 'iOS', 'Architecture', 'Thoughts'];

const BlogHero = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fadeStart = 0;
            const fadeEnd = 400;
            const opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
            setScrollOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background effects */}
            <GlowingOrb className="top-[10%] left-[20%] w-[400px] h-[400px] bg-accent/20" />
            <GlowingOrb className="bottom-[10%] right-[15%] w-[300px] h-[300px] bg-accent-secondary/20 delay-500" />

            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-30" />

            <motion.div 
                style={{ opacity: scrollOpacity }} 
                className="relative z-10 text-center px-4"
            >
                {/* Floating tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-8"
                >
                    <Sparkles size={14} className="text-accent" />
                    <span className="text-xs font-mono text-accent tracking-wider uppercase">Thoughts & Explorations</span>
                </motion.div>

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-6"
                >
                    <span className="text-white">The </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
                        Blog
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light"
                >
                    Engineering insights, architectural decisions, and occasional musings
                    on building software that works.
                </motion.p>
            </motion.div>
        </div>
    );
};

const CategoryFilter = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16"
        >
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat, i) => (
                    <motion.button
                        key={cat}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                            i === 0
                                ? 'bg-accent text-dark'
                                : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white border border-white/5'
                        }`}
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>

            {/* Search */}
            <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
                />
            </div>
        </motion.div>
    );
};

const FeaturedSection = () => {
    const featured = blogPosts.find(p => p.featured);
    const secondary = blogPosts.filter(p => !p.featured).slice(0, 2);

    return (
        <section className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Featured post - large */}
                {featured && (
                    <div className="lg:col-span-2">
                        <BlogCard post={featured} variant="featured" />
                    </div>
                )}

                {/* Secondary posts - stacked */}
                <div className="flex flex-col gap-6">
                    {secondary.map((post, i) => (
                        <BlogCard key={post.id} post={post} variant="default" index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const EditorialSection = () => {
    const posts = blogPosts.filter(p => !p.featured).slice(2, 6);

    return (
        <section className="mb-24">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="w-12 h-1 bg-gradient-to-r from-accent to-transparent rounded-full" />
                <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
                <Filter size={16} className="text-text-muted" />
            </motion.div>

            <div className="space-y-0">
                {posts.map((post, i) => (
                    <BlogCard key={post.id} post={post} variant="editorial" index={i} />
                ))}
            </div>
        </section>
    );
};

const QuickReadsSection = () => {
    const posts = blogPosts.filter(p => p.readTime <= 8);

    return (
        <section className="mb-24">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between mb-8"
            >
                <div className="flex items-center gap-4">
                    <span className="w-8 h-1 bg-accent-cyan rounded-full" />
                    <h2 className="text-xl font-bold text-white">Quick Reads</h2>
                    <span className="text-xs font-mono text-text-muted px-2 py-0.5 bg-white/5 rounded">{'< 8 min'}</span>
                </div>
                <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors"
                >
                    See all <ArrowRight size={14} />
                </motion.button>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.slice(0, 3).map((post, i) => (
                    <BlogCard key={post.id} post={post} variant="compact" index={i} />
                ))}
            </div>
        </section>
    );
};

const HorizontalScroll = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const posts = blogPosts.slice(0, 5);

    return (
        <section className="mb-24 -mx-4 sm:-mx-6 lg:-mx-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between mb-8 px-4 sm:px-6 lg:px-8"
            >
                <div className="flex items-center gap-4">
                    <span className="w-8 h-1 bg-accent-secondary rounded-full" />
                    <h2 className="text-xl font-bold text-white">Browse by Interest</h2>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                        <ArrowRight size={16} className="rotate-180 text-text-muted" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                        <ArrowRight size={16} className="text-text-muted" />
                    </button>
                </div>
            </motion.div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pt-3 pb-4 px-4 sm:px-6 lg:px-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
                style={{ scrollbarWidth: 'thin' }}
            >
                {posts.map((post, i) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-shrink-0 w-[320px] sm:w-[380px]"
                    >
                        <BlogCard post={post} variant="default" index={i} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const Newsletter = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 via-card-bg to-accent-secondary/10 border border-white/10 p-8 md:p-12 mb-24"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,121,198,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(189,147,249,0.1),transparent_50%)]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Stay in the loop
                    </h3>
                    <p className="text-text-secondary max-w-md">
                        Get notified when I publish new articles. No spam, unsubscribe anytime.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 md:w-64 px-4 py-3 bg-dark/50 border border-white/10 rounded-lg text-white placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-all"
                    />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-accent text-dark font-bold rounded-lg hover:bg-accent-hover transition-colors"
                    >
                        Subscribe
                    </motion.button>
                </div>
            </div>
        </motion.section>
    );
};

const Blog = () => {
    return (
        <div className="min-h-screen bg-dark">
            {/* Hero */}
            <BlogHero />

            {/* Main content */}
            <div className="container-custom py-12">
                <CategoryFilter />
                <FeaturedSection />
                <HorizontalScroll />
                <EditorialSection />
                <QuickReadsSection />
                <Newsletter />
            </div>
        </div>
    );
};

export default Blog;
