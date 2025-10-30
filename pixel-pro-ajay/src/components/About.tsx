import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Briefcase, Users } from "lucide-react";
import profileImg from "@/assets/Ajayog.jpg";
import resumePdf from "@/assets/AJAY_P.pdf";

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Figma", level: 95 },
    { name: "UI/UX Design", level: 92 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 80 },
  ];

  const achievements = [
    { icon: Briefcase, title: "Intern at Rajni Tech Foundation", description: "Learning & growing", color: "text-primary" },
    { icon: Users, title: "Team Lead", description: "Web Development Team", color: "text-accent" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer & designer crafting digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Profile Image */}
          <div className="relative animate-scale-in order-2 md:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing effect - circular */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary via-primary-glow to-accent rounded-full blur-3xl opacity-40 animate-glow"></div>
              
              <div className="relative rounded-full overflow-hidden shadow-2xl shadow-primary/20 aspect-square">
                <img
                  src={profileImg}
                  alt="Ajay - UI/UX Designer & Web Developer"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-slide-up order-1 md:order-2">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
                👋 Nice to meet you!
              </div>
              <h3 className="text-3xl font-bold mb-4">
                I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ajay</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A passionate <span className="text-primary font-semibold">UI/UX Designer</span> and <span className="text-accent font-semibold">Web Developer</span> currently pursuing B.Tech in Information Technology.
                My journey into design and development started with a curiosity to create digital experiences that not only
                look beautiful but also solve real problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of clean, intuitive design combined with robust functionality. Whether it's crafting
                pixel-perfect interfaces or bringing them to life with modern web technologies, I'm committed to
                delivering exceptional results.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={resumePdf} download="AJAY_P.pdf">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            </h3>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: 'slideRight 1s ease-out',
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'backwards'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideRight {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
