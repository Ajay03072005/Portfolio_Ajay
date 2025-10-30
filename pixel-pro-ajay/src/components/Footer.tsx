import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-muted-foreground text-center flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> by{" "}
            <span className="font-semibold text-foreground">Ajay</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ajay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
