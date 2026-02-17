import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Soft Orbs - Localized Refinements */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2 animate-pulse-glow will-change-[opacity]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[40px] -translate-x-1/2 translate-y-1/2 animate-pulse-glow will-change-[opacity]" style={{ animationDelay: '2.5s' }} />

            <Container className="relative z-10 text-center px-4">
                <div className="inline-block mb-10 px-8 py-2.5 rounded-full bg-white/40 border border-slate-200 shadow-xl animate-slide-up group hover:scale-105 transition-transform duration-500 will-change-transform">
                    <span className="text-secondary font-mono font-bold tracking-[0.3em] text-xs uppercase flex items-center">
                        <span className="w-2 h-2 rounded-full bg-accent mr-3 animate-pulse" />
                        Admissions Open 2026-2027
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-primary mb-10 tracking-tighter leading-none drop-shadow-sm animate-slide-up uppercase">
                    UMMAH<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary relative inline-block">
                        VISION
                        <span className="absolute inset-x-0 -bottom-2 h-1.5 bg-gradient-to-r from-accent via-secondary to-primary rounded-full blur-[2px] opacity-80 scale-x-75 animate-pulse" />
                        <span className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary blur-2xl opacity-20 -z-10 animate-pulse"></span>
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    Nurturing <span className="text-primary font-bold">Intellect</span>, Building <span className="text-secondary font-bold">Character</span>, Inspiring <span className="text-accent font-bold italic">Faith</span>.
                    A sanctuary where modern education meets timeless wisdom.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <Button size="lg" className="h-20 px-16 text-xl rounded-full bg-primary text-white hover:bg-primary/95 shadow-[0_20px_40px_rgba(27,54,93,0.3)] hover:shadow-[0_25px_50px_rgba(27,54,93,0.5)] transition-all duration-500 transform hover:scale-105 group font-black uppercase tracking-tighter" asChild>
                        <Link href="/admissions">
                            START APPLICATION
                            <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-20 px-16 text-xl rounded-full border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary bg-white/40 hover:bg-slate-50 transition-all duration-500 hover:shadow-2xl transform hover:scale-105 font-black uppercase tracking-tighter will-change-transform" asChild>
                        <Link href="/programs">
                            OUR PROGRAMS
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
