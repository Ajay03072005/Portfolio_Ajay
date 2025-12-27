import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Code, Smartphone, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience and engagement.",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and performant web applications using modern frameworks and technologies.",
    },
    {
      icon: Smartphone,
      title: "Website Redesign",
      description: "Modernizing existing websites with fresh designs and improved user experience.",
    },
    {
      icon: Palette,
      title: "Prototyping & Branding",
      description: "Developing interactive prototypes and cohesive brand identities that stand out.",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-primary/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-glow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group text-center border-border hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-slide-up bg-card/80 backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-glow"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-[var(--shadow-elegant)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
