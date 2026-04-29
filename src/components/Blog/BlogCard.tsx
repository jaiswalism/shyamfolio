'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: number;
    date: string;
    featured?: boolean;
    slug: string;
    image?: string;
}

interface BlogCardProps {
    post: BlogPost;
    index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group flex flex-col gap-6"
        >
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl bg-white/5 aspect-[16/10] relative">
                {/* Image Placeholder / Actual Image */}
                {post.image ? (
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <span className="text-white/20 font-mono text-4xl font-bold opacity-50">{post.category.substring(0, 2).toUpperCase()}</span>
                    </div>
                )}
            </Link>

            <div className="flex flex-col flex-1">
                {/* Category */}
                <div className="mb-3">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">
                        {post.category}
                    </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block mb-3">
                    <h3 className="text-2xl font-bold text-white leading-snug group-hover:text-white/80 transition-colors">
                        {post.title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-text-secondary text-base leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-auto pt-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex-shrink-0">
                        {/* Placeholder for author image */}
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent-secondary/20" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-sm font-medium">Shyam Jaiswal</span>
                        <span className="text-text-muted text-xs">{post.date} · {post.readTime} min read</span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;
