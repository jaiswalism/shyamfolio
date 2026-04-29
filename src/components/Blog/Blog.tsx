'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Rss } from 'lucide-react';
import BlogCard, { BlogPost } from './BlogCard';

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Building Gas-Optimized Smart Contracts: Lessons from Production',
        excerpt: 'Deep dive into gas optimization patterns I discovered while building DeFi protocols. From storage packing to assembly tricks that saved millions in transaction costs.',
        category: 'Engineering',
        readTime: 12,
        date: 'Feb 28, 2026',
        slug: 'gas-optimized-smart-contracts'
    },
    {
        id: '2',
        title: 'SwiftUI Architecture at Scale',
        excerpt: 'How I structured a production iOS app with 50+ screens using composable architecture patterns and dependency injection.',
        category: 'Best practices',
        readTime: 8,
        date: 'Feb 20, 2026',
        slug: 'swiftui-architecture-scale'
    },
    {
        id: '3',
        title: 'Event Sourcing in Node.js: A Practical Guide',
        excerpt: 'Implementing event sourcing for a payments platform. When to use it, when to avoid it, and the patterns that actually work.',
        category: 'Engineering',
        readTime: 15,
        date: 'Feb 15, 2026',
        slug: 'event-sourcing-nodejs'
    },
    {
        id: '4',
        title: 'The Monorepo Decision: Turborepo in Production',
        excerpt: 'After 6 months of running a turborepo setup with 12 packages, here is what I learned about build times, dependencies, and team velocity.',
        category: 'For founders',
        readTime: 10,
        date: 'Feb 10, 2026',
        slug: 'monorepo-turborepo-production'
    },
    {
        id: '5',
        title: 'Why I Stopped Chasing New Frameworks',
        excerpt: 'A reflection on developer productivity, the cost of context switching, and finding depth over breadth in an ever-changing landscape.',
        category: 'Announcements',
        readTime: 6,
        date: 'Feb 5, 2026',
        slug: 'stopped-chasing-frameworks'
    },
    {
        id: '6',
        title: 'Zero-Knowledge Proofs for Web Developers',
        excerpt: 'Breaking down ZK concepts for frontend and backend developers. No mathematics degree required.',
        category: 'AI trends',
        readTime: 14,
        date: 'Jan 28, 2026',
        slug: 'zk-proofs-web-developers'
    },
    {
        id: '7',
        title: 'Building Offline-First iOS Apps',
        excerpt: 'Strategies for sync, conflict resolution, and maintaining data integrity when connectivity is unreliable.',
        category: 'Design',
        readTime: 11,
        date: 'Jan 20, 2026',
        slug: 'offline-first-ios'
    },
    {
        id: '8',
        title: 'API Design Mistakes I Keep Making',
        excerpt: 'A honest look at common API design pitfalls and how to build APIs that developers actually enjoy using.',
        category: 'Best practices',
        readTime: 7,
        date: 'Jan 15, 2026',
        slug: 'api-design-mistakes'
    },
];

const categories = ['All articles', 'AI trends', 'Announcements', 'For founders', 'Engineering', 'Design', 'Best practices'];

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
        <div className="relative pt-32 pb-24 flex items-center justify-center overflow-hidden border-b border-white/5">
            {/* Subtle Spotlight Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent blur-3xl rounded-full mix-blend-screen" />
            </div>

            <motion.div 
                style={{ opacity: scrollOpacity }} 
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 mb-6"
                >
                    <span className="text-xs font-mono text-text-muted tracking-widest uppercase">Writing</span>
                </motion.div>

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
                >
                    <span className="text-white">The </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent">
                        Blog
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
                >
                    Engineering insights, architectural decisions, and occasional musings
                    on building software that works.
                </motion.p>
            </motion.div>
        </div>
    );
};

const CategoryFilter = ({ activeCategory, setActiveCategory }: { activeCategory: string, setActiveCategory: (c: string) => void }) => {
    return (
        <div className="flex items-center justify-between gap-6 mb-12 border-b border-white/5 pb-4 overflow-x-auto scrollbar-hide">
            {/* Categories */}
            <div className="flex items-center gap-2 md:gap-6 whitespace-nowrap min-w-max">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                            activeCategory === cat
                                ? 'bg-white text-black'
                                : 'bg-transparent text-text-muted hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

const BlogGrid = ({ activeCategory }: { activeCategory: string }) => {
    const filteredPosts = activeCategory === 'All articles' 
        ? blogPosts 
        : blogPosts.filter(p => p.category === activeCategory);

    return (
        <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {filteredPosts.map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} />
                ))}
            </div>
            
            {filteredPosts.length === 0 && (
                <div className="text-center py-24">
                    <p className="text-text-muted text-lg">No articles found in this category.</p>
                </div>
            )}
        </section>
    );
};

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All articles');

    return (
        <div className="min-h-screen bg-[#0A0A0A]">
            {/* Hero */}
            <BlogHero />

            {/* Main content */}
            <div className="container-custom py-8 max-w-6xl mx-auto px-4 md:px-8">
                <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <BlogGrid activeCategory={activeCategory} />
            </div>
        </div>
    );
};

export default Blog;
