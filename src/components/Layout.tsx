import React from 'react';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main className="min-h-screen bg-dark text-text-primary overflow-x-hidden selection:bg-accent selection:text-dark">
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
