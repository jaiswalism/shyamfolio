import Blog from '@/components/Blog';
import Layout from '@/components/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Shyam Jaiswal',
    description: 'Engineering insights, architectural decisions, and thoughts on building software - by Shyam Jaiswal',
};

export default function BlogPage() {
    return (
        <Layout>
            <Blog />
        </Layout>
    );
}
