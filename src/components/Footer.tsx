import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Links */}
          <div className="flex flex-wrap gap-6">
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link 
              to="/#features" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Portfolio
            </Link>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Created By */}
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm font-medium">
              Created by
            </span>
            <Link to="/" className="inline-block">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                digni<span className="text-primary italic font-serif">fyd</span>
                <span className="text-primary">.</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
