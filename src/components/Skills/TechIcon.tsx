import React from "react";

// Core SVG Icons
import Hono from "./icons/hono.svg";
import Bun from "./icons/bun.svg";
import Figma from "./icons/figma.svg";
import Swift from "./icons/swift.svg";
import Cpp from "./icons/cpp.svg";
import MongoDB from "./icons/mongodb.svg";
// import Python from "./icons/python.svg";
import ReactIcon from "./icons/react.svg";
import NextIcon from "./icons/nextjs.svg";
import TypeScriptIcon from "./icons/typescript.svg";
import JavaScriptIcon from "./icons/javascript.svg";
import TailwindIcon from "./icons/tailwind.svg";
import NodeIcon from "./icons/nodejs.svg";
import ExpressIcon from "./icons/express.svg";
import SupabaseIcon from "./icons/supabase.svg";
import GitIcon from "./icons/git.svg";
import SolidityIcon from "./icons/solidity.svg";

const iconMap = {
    Hono,
    Bun,
    Figma,
    Swift,
    "C++": Cpp,
    MongoDB,
    // Python,
    React: ReactIcon,
    "Next.js": NextIcon,
    TypeScript: TypeScriptIcon,
    JavaScript: JavaScriptIcon,
    "Tailwind CSS": TailwindIcon,
    "Node.js": NodeIcon,
    "Express.js": ExpressIcon,
    Supabase: SupabaseIcon,
    Git: GitIcon,
    Solidity: SolidityIcon,
} as const;

export type TechIconName = keyof typeof iconMap;

interface TechIconProps {
    name: TechIconName;
    className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className }) => {
    const Icon = iconMap[name];

    return (
        <div className="w-10 h-10 flex items-center justify-center">
            <Icon className={className ?? "w-full h-full"} />
        </div>
    );
};

export default TechIcon;