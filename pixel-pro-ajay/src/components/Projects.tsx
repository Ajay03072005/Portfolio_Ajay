import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PMSSS Scholarship Portal",
      description: "Scholarship management system for students and administrators",
      image: project1,
      tools: ["Web Development", "Database", "Authentication"],
      demo: "https://github.com/Ajay03072005/PMSSS_SCHOLARSHIP.git",
      github: "https://github.com/Ajay03072005/PMSSS_SCHOLARSHIP.git",
    },
    {
      id: 2,
      title: "EcoLearn Platform",
      description: "Educational platform focused on environmental awareness and sustainability",
      image: project2,
      tools: ["React", "Node.js", "MongoDB"],
      demo: "https://github.com/Ajay03072005/Ecolearn.git",
      github: "https://github.com/Ajay03072005/Ecolearn.git",
    },
    {
      id: 3,
      title: "E-Commerce Store",
      description: "Full-featured online store with shopping cart and payment integration",
      image: project3,
      tools: ["React", "E-Commerce", "Payment Gateway"],
      demo: "https://github.com/Ajay03072005/Store.git",
      github: "https://github.com/Ajay03072005/Store.git",
    },
    {
      id: 4,
      title: "Telemedicine Healthcare App",
      description: "Healthcare app prototype for remote medical consultations and patient management",
      image: project4,
      tools: ["Figma", "UI/UX Design", "Prototyping"],
      demo: "https://www.figma.com/make/XKfFD89VRpbmabMS4x4D4A/Telemedicine-Healthcare-App-Prototype?fullscreen=1",
      figma: "https://www.figma.com/make/XKfFD89VRpbmabMS4x4D4A/Telemedicine-Healthcare-App-Prototype?fullscreen=1",
    },
    {
      id: 5,
      title: "Mobile App Design Prototype",
      description: "Interactive mobile application design with modern UI components",
      image: project5,
      tools: ["Figma", "UI Design", "Mobile UX"],
      demo: "https://www.figma.com/proto/NAo94VTWgATh8kZ6rq8N2p/Untitled?page-id=0%3A1&node-id=0-3&p=f&viewport=211%2C120%2C0.09&t=SCi8fGMUyZVIqdV3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A3",
      figma: "https://www.figma.com/proto/NAo94VTWgATh8kZ6rq8N2p/Untitled?page-id=0%3A1&node-id=0-3&p=f&viewport=211%2C120%2C0.09&t=SCi8fGMUyZVIqdV3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A3",
    },
    {
      id: 6,
      title: "Console Project",
      description: "Command-line based application with advanced terminal features",
      image: project6,
      tools: ["CLI", "Terminal", "Scripting"],
      demo: "https://github.com/Ajay03072005/console-project.git",
      github: "https://github.com/Ajay03072005/console-project.git",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-3 animate-slide-up bg-card relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="hero" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
