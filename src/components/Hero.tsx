import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Palette, Zap, Heart, Award, TrendingUp, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }}></div>
      
      {/* Animated Gradient Orbs - Super Enhanced */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/40 via-primary-glow/30 to-transparent rounded-full blur-3xl animate-float opacity-90"></div>
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-accent/40 via-accent/25 to-transparent rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-glow/20 via-primary/15 to-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-gradient-to-br from-primary/25 via-accent/20 to-primary-glow/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-accent/20 to-primary/15 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: "3s" }}></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "radial-gradient(circle, var(--primary) 1px, transparent 1px)", 
        backgroundSize: "50px 50px"
      }}></div>

      {/* Decorative Icons - Subtle and Fixed */}
      <div className="absolute top-32 left-20 opacity-20 pointer-events-none">
        <Code className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-20 pointer-events-none">
        <Palette className="w-16 h-16 text-accent" />
      </div>
      <div className="absolute top-1/2 right-32 opacity-15 pointer-events-none">
        <Zap className="w-20 h-20 text-primary-glow" />
      </div>
      <div className="absolute top-40 right-40 opacity-15 pointer-events-none">
        <Rocket className="w-14 h-14 text-accent" />
      </div>
      
      {/* Cursive A Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <div className="text-[800px] font-serif italic text-primary/5 dark:text-primary/10 leading-none" style={{ fontFamily: "'Brush Script MT', cursive" }}>
          A
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge - Professional */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-background/80 backdrop-blur-md border border-primary/30 rounded-full text-sm font-medium mb-6 animate-scale-in shadow-lg hover:shadow-primary/30 hover:border-primary/50 transition-all">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-foreground/80">
              Welcome to my Portfolio
            </span>
          </div>

          {/* Main Title with Enhanced Animation */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-foreground text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-slide-up drop-shadow-xl">
                Hi, I'm
              </span>
              <span className="relative inline-block animate-slide-up group" style={{ animationDelay: "0.1s" }}>
                <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-gradient font-extrabold tracking-tight hover:tracking-wide transition-all duration-500">
                  Ajay P
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary-glow rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="h-1.5 w-20 bg-gradient-to-r from-transparent via-primary to-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground drop-shadow-lg hover:scale-105 transition-transform duration-300">
                UI/UX Designer & <span className="text-primary">Web Developer</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-l from-transparent via-accent to-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto animate-slide-up space-y-6" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
              Crafting beautiful, intuitive digital experiences that blend 
              <span className="relative inline-block mx-2">
                <span className="text-primary font-bold bg-primary/10 px-3 py-1 rounded-lg border border-primary/20 hover:scale-105 transition-transform">stunning design</span>
              </span>
              with 
              <span className="relative inline-block mx-2">
                <span className="text-accent font-bold bg-accent/10 px-3 py-1 rounded-lg border border-accent/20 hover:scale-105 transition-transform">powerful functionality</span>
              </span>
            </p>

            <div className="relative inline-block mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-glow blur-xl opacity-30 animate-pulse"></div>
              <span className="relative text-foreground font-bold text-2xl sm:text-3xl md:text-4xl inline-block bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                Let's bring your ideas to life! 🚀
              </span>
            </div>
          </div>

          {/* CTA Buttons - Enhanced */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto group relative overflow-hidden px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-accent opacity-0 group-hover:opacity-100 transition-opacity animate-gradient"></span>
              <span className="relative z-10 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                View My Work
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto border-2 border-primary/40 hover:border-primary hover:bg-primary/20 px-10 py-7 text-xl font-bold shadow-xl hover:shadow-accent/50 transition-all hover:scale-110 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Hire Me
                <Sparkles className="w-5 h-5" />
              </span>
            </Button>
          </div>

          {/* Role Tags - Enhanced */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="group px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/30 rounded-full text-base font-bold text-primary backdrop-blur-md shadow-lg hover:shadow-primary/50 hover:scale-110 transition-all cursor-pointer">
              <span className="flex items-center gap-2">
                💼 Intern at Rajni Tech Foundation
              </span>
            </div>
            <div className="group px-6 py-3 bg-gradient-to-r from-accent/20 to-accent/10 border-2 border-accent/30 rounded-full text-base font-bold text-accent backdrop-blur-md shadow-lg hover:shadow-accent/50 hover:scale-110 transition-all cursor-pointer">
              <span className="flex items-center gap-2">
                👥 Team Lead - Web Development
                <span className="inline-block group-hover:rotate-12 transition-transform">🚀</span>
              </span>
            </div>
            <div className="group px-6 py-3 bg-gradient-to-r from-primary-glow/20 to-primary-glow/10 border-2 border-primary-glow/30 rounded-full text-base font-bold text-primary-glow backdrop-blur-md shadow-lg hover:shadow-primary-glow/50 hover:scale-110 transition-all cursor-pointer">
              <span className="flex items-center gap-2">
                ⚡ Full Stack Developer
                <span className="inline-block group-hover:scale-125 transition-transform">💻</span>
              </span>
            </div>
          </div>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-3 justify-center items-center pt-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {["React", "TypeScript", "Node.js", "Tailwind CSS", "Figma", "UI/UX"].map((skill, index) => (
              <div
                key={skill}
                className="px-4 py-2 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-lg text-sm font-semibold text-foreground/80 hover:text-primary hover:border-primary/40 hover:scale-110 transition-all cursor-pointer shadow-md hover:shadow-primary/30"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
