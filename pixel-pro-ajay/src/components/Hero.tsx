import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Palette } from "lucide-react";
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
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow/10 rounded-full blur-3xl animate-glow"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="p-4 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg">
          <Code className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="p-4 bg-accent/10 backdrop-blur-sm rounded-2xl border border-accent/20 shadow-lg">
          <Palette className="w-8 h-8 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium mb-4 animate-scale-in backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
              Welcome to my Portfolio
            </span>
          </div>

          {/* Main Title with Enhanced Animation */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-foreground/80 text-2xl sm:text-3xl md:text-4xl font-medium mb-2 animate-slide-up">
                Hi, I'm
              </span>
              <span className="relative inline-block animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-accent blur-3xl opacity-60 animate-glow"></span>
                <span className="relative bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-gradient">
                  Ajay P
                </span>
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                UI/UX Designer & Web Developer
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.3s" }}>
            Crafting beautiful, intuitive digital experiences that blend stunning design with powerful functionality. 
            <span className="text-primary font-semibold"> Let's bring your ideas to life.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              Hire Me
            </Button>
          </div>

          {/* Role Tags */}
          <div className="flex flex-wrap gap-3 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
              💼 Intern at Rajni Tech
            </div>
            <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent backdrop-blur-sm">
              👥 Team Lead - Web Development
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
