import { Hero } from "@/components/hero";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/section-header";
import { ValueCard } from "@/components/value-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  BookOpen,
  ShieldCheck,
  Heart,
  ArrowRight,
  Users,
  Trophy,
  Star,
  Quote
} from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/animations/fade-in";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />

        {/* Stats Section - building trust */}
        <section className="py-12 relative z-20 -mt-20">
          <Container>
            <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4">
              {[
                { label: "Students", value: "300+", icon: Users, color: "text-primary", glow: "group-hover:shadow-[0_0_20px_rgba(27,54,93,0.2)]" },
                { label: "Success Rate", value: "100%", icon: Trophy, color: "text-accent", glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]" },
                { label: "Moral Grade", value: "A+", icon: Star, color: "text-secondary", glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]" },
                { label: "Years Exp", value: "15+", icon: BookOpen, color: "text-slate-600", glow: "group-hover:shadow-[0_0_20px_rgba(148,163,184,0.2)]" },
              ].map((stat, idx) => (
                <FadeIn key={idx} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                  <Card className={`bg-white/70 backdrop-blur-md border border-white/50 p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-500 group ${stat.glow} hover:-translate-y-2 h-full`}>
                    <div className={`p-4 rounded-2xl bg-white shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                      <stat.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-3xl font-heading font-black text-slate-900 leading-none">{stat.value}</span>
                    <span className="text-xs text-slate-500 font-mono font-bold uppercase tracking-widest mt-2">{stat.label}</span>
                  </Card>
                </FadeIn>
              ))}
            </FadeInStagger>
          </Container>
        </section>

        {/* 'A Day in the Life' Experience Section */}
        <section className="py-32 relative overflow-hidden">
          <Container>
            <FadeIn className="max-w-4xl mx-auto text-center mb-24">
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-accent uppercase mb-6 block">The Student Journey</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-none mb-8 tracking-tighter uppercase">
                A DAY IN THE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary">LIFE</span>
              </h2>
              <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                Education at Ummah Vision is a rhythmic blend of intellectual challenge, spiritual reflection, and creative discovery.
              </p>
            </FadeIn>

            <div className="relative">
              <FadeInStagger className="space-y-12">
                {[
                  { time: "08:00 AM", title: "Morning Reflection", desc: "A serene start with spiritual mindfulness and goal setting for the day.", icon: "✨", align: "left" },
                  { time: "10:30 AM", title: "Core Academics", desc: "Deep diving into advanced sciences and mathematics using modern inquiry methods.", icon: "🧪", align: "right" },
                  { time: "01:00 PM", title: "Community Lunch", desc: "Fostering social bonds and learning the art of graceful communication.", icon: "🍽️", align: "left" },
                  { time: "02:30 PM", title: "Creative Logic", desc: "Transitioning to coding, arts, and applied critical thinking projects.", icon: "💻", align: "right" }
                ].map((item, idx) => (
                  <FadeIn key={idx} direction={item.align === 'left' ? "right" : "left"} className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative`}>
                    <div className={`md:w-[45%] ${item.align === 'right' ? 'md:order-2' : ''}`}>
                      <div className={`bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group relative`}>
                        <div className="absolute top-6 right-8 text-[10px] font-mono font-bold tracking-widest text-primary/40 uppercase">{item.time}</div>
                        <span className="text-4xl mb-6 block group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                        <h4 className="text-2xl font-heading font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h4>
                        <p className="text-slate-600 font-light leading-relaxed italic">&quot;{item.desc}&quot;</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary shadow-lg hidden md:block" />
                    <div className="md:w-[45%]" />
                  </FadeIn>
                ))}
              </FadeInStagger>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-24 relative">
          <Container>
            <SectionHeader
              title="Our Core Foundation"
              subtitle="Equipping the next generation with more than just academic knowledge."
            />

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              <FadeIn>
                <ValueCard
                  icon={BookOpen}
                  title="Academic Excellence"
                  description="Our rigorous curriculum is designed to challenge students, pushing them toward critical thinking and intellectual discovery."
                />
              </FadeIn>
              <FadeIn>
                <ValueCard
                  icon={Heart}
                  title="Spiritual Growth"
                  description="We nurture the soul as much as the mind, fostering a deep connection to faith and an unwavering moral compass."
                />
              </FadeIn>
              <FadeIn>
                <ValueCard
                  icon={ShieldCheck}
                  title="Integrity & Honor"
                  description="Students learn that true success is built on honesty, respect, and responsibility to their community and the world."
                />
              </FadeIn>
            </FadeInStagger>
          </Container>
        </section>

        <FadeIn direction="none" className="py-24 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <Container className="text-center relative">
            <Quote className="h-16 w-16 text-accent/20 mx-auto mb-8 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-heading font-light text-slate-800 leading-tight max-w-4xl mx-auto italic">
              &quot;Educating the mind without educating the heart is <span className="text-primary font-bold">no education at all.</span>&quot;
            </h2>
            <p className="mt-8 text-slate-500 font-mono text-sm tracking-widest border-t border-slate-100 pt-8 inline-block px-12 uppercase">
              Our Commitment to Every Child
            </p>
          </Container>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </FadeIn>

        {/* Modernized Programs Preview */}
        <section className="py-24 relative">
          <Container>
            <FadeIn className="flex flex-col md:flex-row items-center justify-between mb-16 px-4 gap-8">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4 leading-none lowercase tracking-tighter">
                  LEARNING JOURNEYS
                </h2>
                <p className="text-lg text-slate-600 font-light">Customized pathways designed for specific developmental milestones.</p>
              </div>
              <Button variant="outline" className="h-12 px-8 rounded-full border-primary text-primary hover:bg-primary hover:text-white group" asChild>
                <Link href="/programs">
                  VIEW ALL PROGRAMS
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {[
                { title: "KINDERGARTEN", age: "4-6 YEARS", desc: "A creative harbor where little minds begin their journey of discovery and wonder.", color: "text-accent", border: "border-accent/20", glow: "hover:shadow-accent/10" },
                { title: "PRIMARY SCHOOL", age: "7-11 YEARS", desc: "Building core mastery in academics while rooting the heart in timeless values.", color: "text-primary", border: "border-primary/20", glow: "hover:shadow-primary/10" },
                { title: "SECONDARY", age: "12-18 YEARS", desc: "Rigorous preparation for university and leadership in an ever-changing world.", color: "text-secondary", border: "border-secondary/20", glow: "hover:shadow-secondary/10" },
              ].map((program, idx) => (
                <FadeIn key={idx}>
                  <div className={`bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border ${program.border} group ${program.glow} hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full`}>
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700`} />

                    <span className={`text-xs font-mono font-bold tracking-[0.2em] ${program.color} opacity-60 mb-2 block`}>{program.age}</span>
                    <h3 className={`text-2xl font-black mb-4 font-heading text-slate-900 group-hover:tracking-wider transition-all duration-300`}>{program.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed font-light text-sm">{program.desc}</p>

                    <Button variant="ghost" className={`p-0 h-auto font-bold text-xs tracking-widest ${program.color} hover:bg-transparent group/btn flex items-center`} asChild>
                      <Link href="/programs">
                        EXPLORE CURRICULUM
                        <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-2 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </Container>
        </section>

        {/* Future-Ready Skills Section */}
        <section className="py-32 relative">
          <Container>
            <FadeIn className="max-w-4xl mx-auto text-center mb-24">
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-secondary uppercase mb-6 block">Beyond the Curriculum</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-none mb-8 tracking-tighter uppercase">
                FUTURE-READY<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary">MASTERIES</span>
              </h2>
              <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                We equip our students with the technical prowess and emotional intelligence required to lead in a complex, digital world.
              </p>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {[
                { title: "Digital Fluency", desc: "Mastering coding, AI literacy, and ethical digital citizenship.", icon: "🤖", color: "from-primary/10 to-transparent" },
                { title: "Critical Logic", desc: "Developing the armor of critical thinking against misinformation.", icon: "🧠", color: "from-accent/10 to-transparent" },
                { title: "Social Wisdom", desc: "Emotional intelligence, empathy, and graceful leadership skills.", icon: "🤝", color: "from-secondary/10 to-transparent" },
                { title: "Global Vision", desc: "Understanding world systems with a deeply rooted moral compass.", icon: "🌍", color: "from-primary/10 to-transparent" }
              ].map((skill, idx) => (
                <FadeIn key={idx}>
                  <Card className="bg-white/70 backdrop-blur-md border border-white/50 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-700 group relative overflow-hidden h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <span className="text-4xl mb-6 block group-hover:scale-125 transition-transform duration-500 relative z-10">{skill.icon}</span>
                    <h4 className="text-xl font-heading font-black text-slate-900 mb-4 uppercase tracking-tighter relative z-10">{skill.title}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed relative z-10">{skill.desc}</p>
                  </Card>
                </FadeIn>
              ))}
            </FadeInStagger>
          </Container>
        </section>

        {/* Community Voices (Testimonials) */}
        <section className="py-32 relative">
          <Container>
            <FadeIn className="max-w-4xl mx-auto text-center mb-24">
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-primary uppercase mb-6 block">Our Families</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-none mb-8 tracking-tighter uppercase">
                COMMUNITY<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary">VOICES</span>
              </h2>
              <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                Real stories from the hearts of families who chose the visionary path for their children.
              </p>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {[
                { name: "The Al-Farsi family", quote: "The way the teachers integrate moral values into every lesson is truly unique. Our children are excited to go to school every day.", role: "Parent of 3 students" },
                { name: "Dr. Suleiman", quote: "The academic rigor combined with a focus on emotional intelligence has transformed my son's approach to learning and leadership.", role: "Education Specialist & Parent" },
                { name: "The Khan Family", quote: "We wanted a sanctuary where our values were respected and our children were challenged. We found exactly that at Ummah Vision.", role: "Primary School Parents" }
              ].map((item, idx) => (
                <FadeIn key={idx}>
                  <div className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between h-full">
                    <div>
                      <div className="text-accent text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">&quot;</div>
                      <p className="text-slate-600 font-light text-lg mb-8 italic leading-relaxed">
                        {item.quote}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-slate-900 uppercase tracking-tighter">{item.name}</h4>
                      <p className="text-[10px] font-mono font-bold tracking-widest text-primary/50 uppercase">{item.role}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </Container>
        </section>

        {/* Extreme High-Impact CTA */}
        <FadeIn direction="none" className="py-40 relative overflow-hidden mx-4 md:mx-12 lg:mx-20 mb-12 group">
          <div className="absolute inset-0 bg-primary overflow-hidden rounded-[4rem] shadow-[0_40px_100px_rgba(27,54,93,0.4)]">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary/95 to-[#1e3a8a]/40" />

            {/* Animated Aura Glows */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <Container className="relative z-10 text-center text-white px-4">
            <FadeIn delay={0.2} className="inline-block mb-10 px-8 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <span className="text-accent font-mono font-bold tracking-[0.4em] text-[10px] uppercase">Final Call to Excellence</span>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="text-5xl md:text-8xl lg:text-9xl font-heading font-black mb-10 leading-none tracking-tighter uppercase">
                READY FOR THE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary relative decoration-clone pb-4">
                  FUTURE?
                  <span className="absolute inset-x-0 -bottom-2 h-2 bg-gradient-to-r from-accent via-white to-secondary rounded-full blur-[2px] opacity-80" />
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-3xl text-blue-50/80 mb-16 max-w-3xl mx-auto font-light leading-relaxed italic">
                Join a world-class sanctuary where modern achievement and timeless wisdom unite to shape the leaders of tomorrow.
              </p>
            </FadeIn>

            <FadeInStagger className="flex flex-col sm:flex-row gap-10 justify-center items-center">
              <FadeIn direction="right">
                <Button size="lg" className="h-24 px-20 text-2xl rounded-full bg-white text-primary hover:bg-slate-50 shadow-[0_30px_60px_rgba(255,255,255,0.2)] hover:shadow-[0_40px_80px_rgba(255,255,255,0.3)] transition-all duration-700 transform hover:scale-105 font-black uppercase tracking-tighter group/btn relative overflow-hidden" asChild>
                  <Link href="/admissions">
                    <span className="relative z-10">START APPLICATION</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  </Link>
                </Button>
              </FadeIn>
              <FadeIn direction="left">
                <Button size="lg" variant="outline" className="h-24 px-20 text-2xl rounded-full border-2 border-white/40 bg-transparent text-white hover:bg-white/10 backdrop-blur-xl transition-all duration-700 transform hover:scale-105 font-black uppercase tracking-tighter" asChild>
                  <Link href="/contact">TALK TO US</Link>
                </Button>
              </FadeIn>
            </FadeInStagger>

            <FadeIn delay={0.7} className="mt-20 flex justify-center gap-16 opacity-30 group-hover:opacity-60 transition-opacity duration-1000">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black">15+</span>
                <span className="text-[8px] font-mono font-bold tracking-[0.2em] uppercase">Years</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black">100%</span>
                <span className="text-[8px] font-mono font-bold tracking-[0.2em] uppercase">Growth</span>
              </div>
            </FadeIn>
          </Container>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
