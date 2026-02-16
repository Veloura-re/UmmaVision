"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, Info, BookOpen, GraduationCap, Mail, Camera } from "lucide-react";
import { Logo } from "@/components/brand/logo";

export function Dock() {
    return (
        <nav className="fixed z-[9999] 
            lg:left-6 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto
            bottom-8 left-1/2 -translate-x-1/2 
            flex lg:flex-col flex-row items-center gap-4 w-max max-w-[90vw]">

            <Link href="/" className="mb-2 hidden lg:block hover:scale-110 transition-transform duration-300">
                <Logo size={48} />
            </Link>

            <div className="flex lg:flex-col flex-row items-center gap-2 lg:gap-4 rounded-full bg-white/90 p-2 lg:p-3 lg:py-6 backdrop-blur-lg border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <DockCloud>
                    <DockIcon href="/" icon={Home} label="Home" />
                    <DockIcon href="/about" icon={Info} label="About" />
                    <DockIcon href="/programs" icon={BookOpen} label="Programs" />
                    <DockIcon href="/campus" icon={Camera} label="Campus" />
                    <DockIcon href="/admissions" icon={GraduationCap} label="Admissions" />
                    <DockIcon href="/contact" icon={Mail} label="Contact" />
                </DockCloud>
            </div>
        </nav>
    );
}

function DockCloud({ children }: { children: React.ReactNode }) {
    const mousePos = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => {
                // Determine mouse position based on parent layout (horizontal on mobile, vertical on desktop)
                const isMobile = window.innerWidth < 1024;
                mousePos.set(isMobile ? e.clientX : e.clientY);
            }}
            onMouseLeave={() => mousePos.set(Infinity)}
            className="flex lg:flex-col flex-row items-center gap-4 h-full"
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return React.cloneElement(child as React.ReactElement<any>, { mousePos } as any);
                }
                return child;
            })}
        </motion.div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DockIcon({ href, icon: Icon, label, mousePos }: { href: string; icon: React.ElementType; label: string; mousePos?: any }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mousePos, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

        if (isMobile) {
            return val - bounds.x - bounds.width / 2;
        }
        return val - bounds.y - bounds.height / 2;
    });

    const sizeSync = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
    const size = useSpring(sizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href} className="group relative flex items-center justify-center">
            <motion.div
                ref={ref}
                style={{ width: size, height: size }}
                className="rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors shadow-sm animate-in fade-in zoom-in duration-500 will-change-[width,height]"
            >
                <Icon className="text-slate-600 w-1/2 h-1/2 group-hover:text-white transition-colors duration-300" />
            </motion.div>
            <span className="absolute lg:left-full lg:ml-4 bottom-full mb-4 lg:mb-0 lg:bottom-auto scale-0 rounded bg-slate-900 px-2 py-1 text-xs text-nowrap text-white group-hover:scale-100 transition-all lg:origin-left origin-bottom shadow-lg">
                {label}
            </span>
        </Link>
    );
}
