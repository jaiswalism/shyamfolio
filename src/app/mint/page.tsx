"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wallet, Sparkles, Hexagon, Database, Link as LinkIcon, Lock, Unlock, Zap, Gem } from "lucide-react";

// --- Types & Data ---

type Rarity = "Common" | "Rare" | "Legendary" | "Mythic";

interface Artifact {
    name: string;
    rarity: Rarity;
    icon: React.ReactNode;
    blurb: string;
    edition: string;
    chain: string;
}

const RARITY_COLORS: Record<Rarity, string> = {
    Common: "text-text-secondary border-text-secondary/30 bg-text-secondary/10",
    Rare: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10",
    Legendary: "text-accent border-accent/30 bg-accent/10",
    Mythic: "text-warning border-warning/30 bg-warning/10"
};

const ALL_ARTIFACTS: Artifact[] = [
    { name: "Void Relic", rarity: "Mythic", icon: <Lock className="w-12 h-12" />, blurb: "A sealed anomaly that distorts local consensus.", edition: "01/08", chain: "Base Mainnet" },
    { name: "Entropy Core", rarity: "Legendary", icon: <Zap className="w-12 h-12" />, blurb: "Volatile energy packed into a stable shard.", edition: "02/08", chain: "Base Mainnet" },
    { name: "Signal Shard", rarity: "Rare", icon: <Sparkles className="w-12 h-12" />, blurb: "A fragment of lost broadcasts from the chain.", edition: "03/08", chain: "Base Mainnet" },
    { name: "Genesis Fragment", rarity: "Legendary", icon: <Hexagon className="w-12 h-12" />, blurb: "First-epoch residue with near-perfect integrity.", edition: "04/08", chain: "Base Mainnet" },
    { name: "Chain Anchor", rarity: "Common", icon: <LinkIcon className="w-12 h-12" />, blurb: "Stabilizes weak connections across nodes.", edition: "05/08", chain: "Base Mainnet" },
    { name: "Gas Crystal", rarity: "Common", icon: <Gem className="w-12 h-12" />, blurb: "Compressed fee residue with low decay.", edition: "06/08", chain: "Base Mainnet" },
    { name: "Validator Sigil", rarity: "Common", icon: <Database className="w-12 h-12" />, blurb: "A durable mark from verified archives.", edition: "07/08", chain: "Base Mainnet" },
    { name: "Block Heart", rarity: "Rare", icon: <Unlock className="w-12 h-12" />, blurb: "A rare unlock key to dormant payloads.", edition: "08/08", chain: "Base Mainnet" },
];

const CONSOLE_MESSAGES = [
    "> awaiting command...",
    "> protocol handshake initialized...",
    "> network sync complete...",
    "> ready for artifact mint",
    "> vault connection secure..."
];

// --- Subcomponents ---

// Particle Background Component
const ParticleNetwork = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: ["0vh", "-100vh"],
                        x: [0, (Math.random() - 0.5) * 200],
                        opacity: [0, Math.random() * 0.5 + 0.1, 0],
                        scale: [0, Math.random() + 0.5, 0]
                    }}
                    transition={{
                        duration: 10 + Math.random() * 20,
                        repeat: Infinity,
                        delay: Math.random() * -20,
                        ease: "linear"
                    }}
                    className="absolute w-1.5 h-1.5 bg-accent-cyan rounded-full blur-[1px]"
                    style={{
                        top: '100%',
                        left: `${Math.random() * 100}%`
                    }}
                />
            ))}
        </div>
    );
};

const ShowcaseCard = ({ artifact }: { artifact: Artifact }) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[520px] h-[520px]">
                <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-white/10 via-transparent to-transparent blur-2xl opacity-60" />
                <div className={`absolute -inset-10 rounded-full blur-[80px] opacity-30 ${RARITY_COLORS[artifact.rarity].split(" ")[0]}`} />
                <div className="relative h-full rounded-[48px] border border-white/10 bg-black/40 backdrop-blur-lg overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_45%,rgba(0,0,0,0.5)_100%)]" />
                    <div className="absolute top-6 left-6 text-xs font-mono uppercase tracking-widest text-white/50">{artifact.edition}</div>
                    <div className="absolute bottom-6 right-6 text-xs font-mono uppercase tracking-widest text-white/50">Artifact</div>

                    <div className="h-full flex items-center justify-center">
                        <div className={`p-10 rounded-[36px] border ${RARITY_COLORS[artifact.rarity]} bg-black/60 shadow-[0_0_40px_currentColor]`}>
                            {artifact.icon}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main Page Component ---
export default function MintPage() {
    // --- State ---
    const [isMounted, setIsMounted] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [isMinting, setIsMinting] = useState(false);
    const [mintStep, setMintStep] = useState<"idle" | "decrypting" | "retrieving" | "revealed">("idle");
    const [mintResult, setMintResult] = useState<Artifact | null>(null);
    const [supply, setSupply] = useState(0);
    const [consoleMsgIdx, setConsoleMsgIdx] = useState(0);
    const scrollSectionRef = useRef<HTMLDivElement>(null);
    const showcaseCardRefs = useRef<HTMLDivElement[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    useEffect(() => {
        if (!scrollSectionRef.current) return;
        gsap.registerPlugin(ScrollTrigger);
        const total = ALL_ARTIFACTS.length;

        const ctx = gsap.context(() => {
            const updateCards = (progress: number) => {
                const rawIndex = progress * (total - 1);
                const nextIndex = Math.round(rawIndex);

                if (nextIndex !== activeIndexRef.current) {
                    activeIndexRef.current = nextIndex;
                    setActiveIndex(nextIndex);
                }

                showcaseCardRefs.current.forEach((card, idx) => {
                    if (!card) return;
                    const offset = idx - rawIndex;
                    const distance = Math.abs(offset);
                    const opacity = 1 - Math.min(distance * 0.45, 0.85);
                    const scale = 1 - Math.min(distance * 0.09, 0.25);
                    const y = offset * 55;
                    const rotate = offset * 3;

                    gsap.set(card, {
                        opacity,
                        scale,
                        y,
                        rotate,
                        zIndex: Math.round(100 - distance * 10),
                        transformOrigin: "50% 50%",
                    });
                });
            };

            ScrollTrigger.create({
                trigger: scrollSectionRef.current,
                start: "top top+=120",
                end: `+=${total * 520}`,
                scrub: true,
                pin: true,
                onUpdate: (self) => updateCards(self.progress),
            });

            updateCards(0);
        }, scrollSectionRef);

        return () => ctx.revert();
    }, []);

    // Swap idle messages
    useEffect(() => {
        if (mintStep === "idle") {
            const interval = setInterval(() => {
                setConsoleMsgIdx((prev) => (prev + 1) % CONSOLE_MESSAGES.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [mintStep]);

    // --- Handlers ---
    const handleAction = () => {
        if (!isConnected) {
            setIsConnected(true);
            return;
        }

        if (isMinting) return;

        setIsMinting(true);
        setMintStep("decrypting");

        // Simulate minting sequence
        setTimeout(() => {
            setMintStep("retrieving");

            setTimeout(() => {
                // Randomly pick an artifact for demo
                const randomArtifact = ALL_ARTIFACTS[Math.floor(Math.random() * ALL_ARTIFACTS.length)];
                setMintResult(randomArtifact);
                setMintStep("revealed");
                setIsMinting(false);
                setSupply((prev) => prev + 1);
            }, 2000);

        }, 1500);
    };

    // --- Render ---
    return (
        <div className="min-h-screen bg-dark w-full pt-28 pb-32 relative overflow-hidden font-sans selection:bg-accent-cyan selection:text-dark">

            {/* Background Atmosphere */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-5"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 121, 198, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 121, 198, 0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
            />
            {/* Ambient Glows */}
            <div className="absolute top-0 right-1/3 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen" />
            <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#230046] rounded-full blur-[200px] pointer-events-none -z-10 opacity-60" />

            <ParticleNetwork />

            <div className="container-custom relative z-10 max-w-7xl mx-auto space-y-40">

                {/* 1. HERO SECTION */}
                <section className="relative min-h-[75vh] flex items-center justify-center">

                    {/* Glowing Centerpiece Artifact (Behind the text somewhat, but central) */}
                    <div className="absolute top-1/2 left-1/2 md:left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] pointer-events-none flex items-center justify-center z-0 opacity-30 md:opacity-60 mix-blend-screen">
                        {/* Soft neon glow */}
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px] animate-pulse" />

                        {/* Slow rotation boundary */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-10 rounded-full border border-accent/20 border-dashed"
                        />

                        {/* Faint particle aura */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-2 border-accent-cyan/10"
                        />

                        {/* Floating visual core */}
                        <motion.div
                            animate={{ y: [-15, 15, -15], rotateZ: [0, 5, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#1c0036] via-[#2f005c] to-black border border-accent/60 rounded-[40px] flex items-center justify-center shadow-[0_0_80px_rgba(255,121,198,0.2)] md:shadow-[0_0_100px_rgba(255,121,198,0.3)] rotate-45"
                        >
                            <Hexagon className="w-24 h-24 md:w-32 md:h-32 text-accent/80 filter drop-shadow-[0_0_15px_rgba(255,121,198,0.6)] -rotate-45" />
                            <div className="absolute inset-0 rounded-[40px] shadow-[inset_0_0_30px_rgba(255,121,198,0.4)]" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full z-10 relative">

                        {/* Hero Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-8"
                        >
                            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 w-max shadow-[0_0_20px_rgba(139,233,253,0.1)]">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
                                </span>
                                <span className="text-accent-cyan font-mono text-sm tracking-widest uppercase font-bold">Protocol Vault V1</span>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                                    <span className="block text-white text-glow">Protocol</span>
                                    <span className="block neon-text">Artifacts</span>
                                </h1>
                            </div>

                            <p className="text-xl md:text-2xl text-text-secondary font-medium max-w-xl leading-relaxed">
                                Uncover highly classified anomalies encoded deeply within the chain memory.
                            </p>

                            <p className="text-text-muted text-lg max-w-lg leading-relaxed flex items-center space-x-3">
                                <Database className="w-5 h-5 text-accent-cyan" />
                                <span>Every mint sequence extracts a provably random and unique digital relic directly into your wallet.</span>
                            </p>
                        </motion.div>

                        {/* Mint Panel Right Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="col-span-1 lg:col-span-5 flex items-center"
                        >
                            <div className="glass-panel w-full p-px relative rounded-2xl group">
                                {/* Animated Neon Border effect via spinning gradient behind panel */}
                                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(transparent_0%,rgba(255,121,198,0.8)_25%,transparent_50%,rgba(139,233,253,0.8)_75%,transparent_100%)] animate-spin-slow opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                                </div>

                                <div className="relative z-10 bg-surface/95 backdrop-blur-xl rounded-[15px] p-8 md:p-10 space-y-8 shadow-2xl overflow-hidden">
                                    {/* Scanline overlay */}
                                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] opacity-50" />

                                    {/* Status Header */}
                                    <div className="flex justify-between items-center pb-6 border-b border-white/10 font-mono text-sm relative z-10">
                                        <div className="space-y-1.5">
                                            <div className="text-text-muted uppercase tracking-wider text-xs">Uplink Status</div>
                                            <div className={`font-bold flex items-center space-x-2 ${isConnected ? 'text-success' : 'text-danger'}`}>
                                                <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-success shadow-[0_0_10px_#50fa7b]' : 'bg-danger shadow-[0_0_10px_#ff5555]'}`} />
                                                <span>{isConnected ? "Connected (0x...fa12)" : "Disconnected"}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5 text-right">
                                            <div className="text-text-muted uppercase tracking-wider text-xs">Network</div>
                                            <div className="font-bold text-accent-cyan">Base Mainnet</div>
                                        </div>
                                    </div>

                                    {/* Supply & Price */}
                                    <div className="text-center space-y-2 relative z-10">
                                        <div className="text-text-muted font-mono uppercase tracking-widest text-xs">Vault Supply</div>
                                        <div className="text-5xl font-black tracking-tight font-mono">{supply} <span className="text-text-muted font-light text-3xl">/ 1000</span></div>
                                        <div className="text-lg font-bold text-accent uppercase tracking-widest pt-2">Zero Cost Matrix</div>
                                    </div>

                                    {/* Advanced Console Terminal */}
                                    <div className="bg-dark/90 rounded-lg p-5 font-mono text-sm min-h-[160px] border border-white/10 relative shadow-inner z-10">
                                        <div className="absolute top-3 left-3 flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                        </div>

                                        <div className="mt-6 flex flex-col h-full items-start justify-center">
                                            <AnimatePresence mode="wait">
                                                {mintStep === "idle" && (
                                                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-text-muted tracking-tight">
                                                        <motion.div
                                                            animate={{ opacity: [1, 0, 1] }}
                                                            transition={{ repeat: Infinity, duration: 0.8, times: [0, 0.5, 1], ease: "linear" }}
                                                            className="inline-block w-2 h-4 bg-accent-cyan mr-2 align-middle"
                                                        />
                                                        {isMounted ? CONSOLE_MESSAGES[consoleMsgIdx] : CONSOLE_MESSAGES[0]}
                                                    </motion.div>
                                                )}

                                                {mintStep === "decrypting" && (
                                                    <motion.div key="decrypting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-accent-cyan w-full">
                                                        <div className="flex items-center space-x-2 mb-3">
                                                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Hexagon className="w-4 h-4" /></motion.div>
                                                            <span>Decrypting chain memory...</span>
                                                        </div>
                                                        <div className="w-full h-1.5 bg-white/10 rounded overflow-hidden">
                                                            <motion.div className="h-full bg-accent-cyan shadow-[0_0_10px_#8be9fd]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "linear" }} />
                                                        </div>
                                                        <div className="mt-2 text-xs opacity-50 break-all text-left">
                                                            {isMounted && Array.from({ length: 3 }).map((_, i) => <div key={i}>0x{(Math.random() * 10e16).toString(16).toUpperCase()}</div>)}
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {mintStep === "retrieving" && (
                                                    <motion.div key="retrieving" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-accent w-full text-center">
                                                        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="text-lg font-bold font-sans uppercase tracking-widest">
                                                            Extracting Payload...
                                                        </motion.div>
                                                    </motion.div>
                                                )}

                                                {mintStep === "revealed" && mintResult && (
                                                    <motion.div key="revealed" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center w-full space-y-3">
                                                        <div className="text-text-secondary text-xs uppercase tracking-widest">Artifact Discovered</div>
                                                        <div className={`text-xl font-bold uppercase tracking-wider px-5 py-2.5 rounded border flex flex-col items-center space-y-1 bg-dark shadow-xl ${RARITY_COLORS[mintResult.rarity]}`}>
                                                            <span>{mintResult.name}</span>
                                                            <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded">{mintResult.rarity} TIER</span>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="pt-2 relative z-10 w-full">
                                        <button
                                            onClick={handleAction}
                                            disabled={isMinting}
                                            className={`w-full py-5 rounded-xl text-xl font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden group
                                                ${isMinting ? 'bg-accent/20 text-accent border border-accent/50 cursor-wait' :
                                                    !isConnected ? 'bg-white text-dark hover:bg-gray-200' :
                                                        'bg-accent text-dark border border-accent/50 hover:bg-accent-hover shadow-[0_0_20px_rgba(255,121,198,0.4)] hover:shadow-[0_0_40px_rgba(255,121,198,0.7)]'}`}
                                        >
                                            {isMinting ? (
                                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                                                    Loading...
                                                </motion.div>
                                            ) : !isConnected ? (
                                                <>
                                                    <Wallet className="w-6 h-6" />
                                                    <span>Connect Wallet</span>
                                                </>
                                            ) : (
                                                <>
                                                    {/* Pulse effect only on mint button */}
                                                    <div className="absolute inset-0 rounded-xl bg-accent opacity-0 animate-ping" style={{ animationDuration: '3s' }} />
                                                    <Sparkles className="w-6 h-6" />
                                                    <span className="relative z-10">Mint Artifact</span>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. SCROLLING ARTIFACT SHOWCASE */}
                <section ref={scrollSectionRef} className="relative">
                    <div className="hidden md:block" style={{ height: `${Math.max(ALL_ARTIFACTS.length * 90, 260)}vh` }}>
                        <div className="sticky top-24 h-[72vh] grid grid-cols-12 gap-10 items-center">
                            <div className="col-span-12 flex justify-between items-center text-sm text-text-muted font-mono uppercase tracking-widest">
                                <div className="flex items-center space-x-3">
                                    <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_#8be9fd]" />
                                    <span>A selection of minted relics from the archive.</span>
                                </div>
                                <span>{(activeIndex + 1).toString().padStart(2, "0")} / {ALL_ARTIFACTS.length.toString().padStart(2, "0")}</span>
                            </div>

                            <div className="col-span-2 flex flex-col items-center space-y-4">
                                {ALL_ARTIFACTS.map((artifact, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-20 h-14 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center text-xs font-mono uppercase tracking-widest transition-all ${idx === activeIndex ? "border-accent shadow-[0_0_18px_rgba(255,121,198,0.35)] scale-105" : "opacity-50"}`}
                                    >
                                        {(idx + 1).toString().padStart(2, "0")}
                                    </div>
                                ))}
                            </div>

                            <div className="col-span-6 relative h-[520px]">
                                <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
                                <div className="absolute left-8 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-[120px]" />
                                {ALL_ARTIFACTS.map((artifact, idx) => (
                                    <div
                                        key={idx}
                                        ref={(el) => {
                                            if (el) showcaseCardRefs.current[idx] = el;
                                        }}
                                        className="absolute inset-0"
                                    >
                                        <ShowcaseCard artifact={artifact} />
                                    </div>
                                ))}
                            </div>

                            <div className="col-span-4">
                                <div className="glass-panel border-white/10 rounded-3xl p-8 space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                                    <div className="space-y-2">
                                        <div className="text-text-muted uppercase tracking-widest text-xs font-mono">Artifact Info</div>
                                        <div className="text-3xl font-bold tracking-tight">{ALL_ARTIFACTS[activeIndex].name}</div>
                                        <div className={`inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-3 py-1 rounded border ${RARITY_COLORS[ALL_ARTIFACTS[activeIndex].rarity]}`}>
                                            <span>{ALL_ARTIFACTS[activeIndex].rarity}</span>
                                        </div>
                                    </div>

                                    <p className="text-text-secondary leading-relaxed text-sm">
                                        {ALL_ARTIFACTS[activeIndex].blurb}
                                    </p>

                                    <div className="space-y-3 text-sm text-text-muted">
                                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                            <span>Edition</span>
                                            <span className="text-text-primary font-mono">{ALL_ARTIFACTS[activeIndex].edition}</span>
                                        </div>
                                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                            <span>Network</span>
                                            <span className="text-text-primary font-mono">{ALL_ARTIFACTS[activeIndex].chain}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Mint Window</span>
                                            <span className="text-text-primary font-mono">Open</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <button className="flex-1 py-2.5 rounded-full border border-white/15 text-sm uppercase tracking-widest text-text-primary hover:border-accent transition-colors">
                                            View Details
                                        </button>
                                        <button className="flex-1 py-2.5 rounded-full bg-white/10 text-sm uppercase tracking-widest text-text-primary hover:bg-white/20 transition-colors">
                                            View Live
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="md:hidden space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black tracking-tight neon-text uppercase">Identified Relics</h2>
                            <p className="text-text-muted text-base">
                                The catalog surfaces as you explore. Each relic holds a unique signal trace.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {ALL_ARTIFACTS.map((artifact, idx) => (
                                <div key={idx} className="glass-panel border-white/10 rounded-2xl p-6 space-y-4">
                                    <div className={`inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-3 py-1 rounded border ${RARITY_COLORS[artifact.rarity]}`}>
                                        <span>{artifact.rarity}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold">{artifact.name}</h3>
                                        <div className={`p-3 rounded-xl border ${RARITY_COLORS[artifact.rarity]} bg-dark/50`}>{artifact.icon}</div>
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed">{artifact.blurb}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* 3. RARITY DISTRIBUTION */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel p-10 md:p-16 border-white/10 relative overflow-hidden rounded-3xl"
                >
                    {/* Deep glow background for the distribution panel */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 via-dark to-accent/5 -z-10" />
                    <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] -z-10" />
                    <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight flex items-center space-x-4">
                                <Database className="w-10 h-10 text-accent-cyan" />
                                <span>Network Probabilities</span>
                            </h2>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                The extraction mechanism is governed by immutable smart contract logic. Outcomes are determined by block hashes upon execution, adhering to strict probabilistic tiers.
                            </p>
                        </div>

                        <div className="w-full flex-1 grid grid-cols-2 gap-4">
                            {[
                                { tier: "Common", prob: "70%", styles: "text-text-secondary border-text-secondary/20 shadow-[0_0_20px_rgba(179,185,197,0.05)]" },
                                { tier: "Rare", prob: "20%", styles: "text-accent-cyan border-accent-cyan/20 shadow-[0_0_20px_rgba(139,233,253,0.1)]" },
                                { tier: "Legendary", prob: "9%", styles: "text-accent border-accent/20 shadow-[0_0_20px_rgba(255,121,198,0.15)] glow-hover" },
                                { tier: "Mythic", prob: "1%", styles: "text-warning border-warning/30 shadow-[0_0_30px_rgba(255,184,108,0.2)] text-glow" },
                            ].map((r, idx) => (
                                <div key={idx} className={`p-8 rounded-2xl border bg-surface/50 backdrop-blur-md flex flex-col items-center justify-center space-y-3 transition-transform hover:-translate-y-1 ${r.styles}`}>
                                    <div className="text-4xl lg:text-5xl font-black font-mono tracking-tighter">{r.prob}</div>
                                    <div className="uppercase tracking-widest text-sm font-bold opacity-80">{r.tier}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* 4. INITIALIZATION PROTOCOL (How it Works) */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16 pb-20 pt-10"
                >
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Initialization Protocol</h2>
                        <p className="text-text-muted text-lg">Acquire your artifact directly from the network in three steps.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                        {/* Connecting energetic line for desktop */}
                        <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 z-0" />

                        {[
                            { step: 1, title: "Establish Uplink", desc: "Connect your Web3 compatible wallet to establish a secure data stream to the Base network.", icon: <Wallet className="w-8 h-8" /> },
                            { step: 2, title: "Execute Extraction", desc: "Submit the mint transaction via the central console to request a random block anomaly.", icon: <Hexagon className="w-8 h-8" /> },
                            { step: 3, title: "Decrypt Payload", desc: "Acknowledge the transaction to reveal the rarity and identity of your discovered relic.", icon: <Lock className="w-8 h-8" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                                <div className="w-20 h-20 rounded-2xl bg-dark flex items-center justify-center border border-accent/30 text-accent shadow-[0_0_20px_rgba(255,121,198,0.2)] group-hover:shadow-[0_0_30px_rgba(255,121,198,0.4)] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-accent">
                                    {item.icon}
                                </div>
                                <div className="space-y-3">
                                    <div className="text-accent-cyan font-mono text-sm uppercase tracking-widest bg-accent-cyan/10 px-3 py-1 rounded inline-block">Phase 0{item.step}</div>
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                    <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
