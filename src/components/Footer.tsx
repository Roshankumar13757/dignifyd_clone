import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-semibold tracking-tight">
                digni<span className="text-primary italic font-serif">fyd</span>
                <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Move beyond fragmented vendors with integrated, growth-driven digital solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/web-and-ux-design" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  UI & UX Design
                </Link>
              </li>
              <li>
                <Link to="/brand-strategy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/influencer-marketing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link to="/creative-and-content" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Creative & Content
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dignifyd Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
