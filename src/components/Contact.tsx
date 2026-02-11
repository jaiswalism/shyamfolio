
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark to-accent/5 pointer-events-none"></div>

            <div className="container-custom relative z-10 text-center max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-sm mb-6">
                        ● System Ready
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                        Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">ship</span> something great.
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Ready to deploy your next big idea? I build scalable Web2 platforms and secure Web3 protocols that users actually use.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="mailto:contact@example.com" className="group relative px-8 py-4 bg-white text-dark font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                            <span>Initialize Protocol</span>
                        </span>
                    </a>

                    <a href="#" className="grooup px-8 py-4 bg-transparent border border-white/10 text-white font-medium text-lg rounded-full hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-accent" />
                        <span>Schedule Call</span>
                    </a>
                </motion.div>


            </div>
        </section>
    );
};

export default Contact;
