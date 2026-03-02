'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, Bookmark } from 'lucide-react';

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: number;
    date: string;
    featured?: boolean;
    gradient?: string;
    slug: string;
}

interface BlogCardProps {
    post: BlogPost;
    variant?: 'default' | 'featured' | 'compact' | 'editorial';
    index?: number;
}

const categoryColors: Record<string, { bg: string; text: string; glow: string }> = {
    'Web3': { bg: 'bg-accent/10', text: 'text-accent', glow: 'shadow-accent/20' },
    'Backend': { bg: 'bg-accent-cyan/10', text: 'text-accent-cyan', glow: 'shadow-accent-cyan/20' },
    'iOS': { bg: 'bg-accent-secondary/10', text: 'text-accent-secondary', glow: 'shadow-accent-secondary/20' },
    'Architecture': { bg: 'bg-success/10', text: 'text-success', glow: 'shadow-success/20' },
    'Thoughts': { bg: 'bg-warning/10', text: 'text-warning', glow: 'shadow-warning/20' },
};

const BlogCard = ({ post, variant = 'default', index = 0 }: BlogCardProps) => {
    const colors = categoryColors[post.category] || categoryColors['Thoughts'];

    if (variant === 'featured') {
        return (
            <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative col-span-full lg:col-span-2 row-span-2"
            >
                {/* Layered background effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-secondary to-accent-cyan rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="relative h-full min-h-[400px] md:min-h-[500px] bg-card-bg backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                    {/* Decorative grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff79c608_1px,transparent_1px),linear-gradient(to_bottom,#ff79c608_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                        {/* Category & Meta */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full border ${colors.bg} ${colors.text} border-current/20`}>
                                {post.category}
                            </span>
                            <span className="text-text-muted text-sm">{post.date}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[0.95] tracking-tight mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-secondary transition-all duration-500">
                            {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-8">
                            {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-text-muted">
                                <Clock size={14} />
                                <span className="text-sm font-mono">{post.readTime} min read</span>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-dark font-bold rounded-lg group/btn"
                            >
                                Read Article
                                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Floating label */}
                    <div className="absolute top-6 right-6 px-3 py-1 bg-accent/90 text-dark text-xs font-bold uppercase tracking-wider rounded">
                        Featured
                    </div>
                </div>
            </motion.article>
        );
    }

    if (variant === 'editorial') {
        return (
            <motion.article
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
            >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start py-10 border-b border-white/5 hover:border-accent/20 transition-colors">
                    {/* Large number */}
                    <div className="text-8xl md:text-9xl font-bold text-white/[0.03] group-hover:text-accent/10 transition-colors leading-none select-none">
                        {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-4">
                            <span className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded ${colors.bg} ${colors.text}`}>
                                {post.category}
                            </span>
                            <span className="text-text-muted text-xs">{post.date}</span>
                            <span className="text-text-muted text-xs flex items-center gap-1">
                                <Clock size={10} /> {post.readTime}m
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                            {post.title}
                        </h3>

                        <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-all self-center"
                    >
                        <ArrowUpRight size={20} className="text-text-muted group-hover:text-accent transition-colors" />
                    </motion.div>
                </div>
            </motion.article>
        );
    }

    if (variant === 'compact') {
        return (
            <motion.article
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group"
            >
                <div className="relative p-5 bg-card-bg/50 backdrop-blur-sm border border-white/5 rounded-xl hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,121,198,0.1)]">
                    <div className="flex items-start justify-between gap-4 mb-3">
                        <span className={`px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded ${colors.bg} ${colors.text}`}>
                            {post.category}
                        </span>
                        <Bookmark size={14} className="text-text-muted group-hover:text-accent transition-colors cursor-pointer" />
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug mb-2">
                        {post.title}
                    </h4>

                    <div className="flex items-center gap-3 text-text-muted text-xs">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-text-muted" />
                        <span className="flex items-center gap-1">
                            <Clock size={10} /> {post.readTime}m
                        </span>
                    </div>
                </div>
            </motion.article>
        );
    }

    // Default variant - 3D depth card
    return (
        <motion.article
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotateX: -2, rotateY: 2 }}
            style={{ transformPerspective: 1000 }}
            className="group relative"
        >
            {/* Glow effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-br from-accent/30 to-accent-secondary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500`} />

            <div className="relative h-full bg-card-bg backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col group-hover:border-accent/30 transition-all duration-300">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full border ${colors.bg} ${colors.text} border-current/20`}>
                        {post.category}
                    </span>
                    <Bookmark size={16} className="text-text-muted group-hover:text-accent transition-colors cursor-pointer hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors leading-tight mb-3">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-text-muted text-xs">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                            <Clock size={12} /> {post.readTime}m
                        </span>
                    </div>

                    <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Depth shadow layers */}
                <div className="absolute -bottom-2 left-2 right-2 h-full bg-card-bg/30 rounded-xl -z-10 border border-white/5" />
                <div className="absolute -bottom-4 left-4 right-4 h-full bg-card-bg/20 rounded-xl -z-20 border border-white/5" />
            </div>
        </motion.article>
    );
};

export default BlogCard;
