import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Dock } from "@/components/layout/dock";
import { PageTransition } from "@/components/animations/page-transition";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani"
});

export const metadata: Metadata = {
  title: "Ummah Vision School | Future Ready",
  description: "A futuristic educational experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(rajdhani.variable, orbitron.variable, "font-sans antialiased text-slate-900 selection:bg-accent/30 min-h-screen relative")}>
        {/* Global Background Decorations */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(27,54,93,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,54,93,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Navy Blue Glow */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary rounded-full blur-[60px] animate-glow-cycle will-change-[opacity,transform]" />

          {/* Emerald Green Glow */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[60px] animate-glow-cycle will-change-[opacity,transform]" style={{ animationDelay: '4s' }} />

          {/* Golden Glow */}
          <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] bg-accent rounded-full blur-[60px] animate-glow-cycle will-change-[opacity,transform]" style={{ animationDelay: '7s' }} />

          {/* Central Softener - Removed heavy backdrop-blur for performance */}
          <div className="absolute inset-0 bg-background/40" />
        </div>

        <PageTransition>
          {children}
        </PageTransition>
        <Dock />
      </body>
    </html>
  );
}
