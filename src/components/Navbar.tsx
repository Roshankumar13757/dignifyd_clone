import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { name: "UI & UX Design", href: "/web-and-ux-design" },
  { name: "Brand Strategy", href: "/brand-strategy" },
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Influencer Marketing", href: "/influencer-marketing" },
  { name: "Creative & Content", href: "/creative-and-content" },
];

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isServicesPage = location.pathname === "/services" || services.some(s => location.pathname === s.href);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto">
      <nav className="nav-floating rounded-full px-4 py-3 flex items-center justify-between md:gap-2">
        {/* Logo */}
        <Link to="/" className="flex items-center px-2 md:px-4" onClick={closeMobileMenu}>
          <span className="text-xl font-semibold tracking-tight">
            <img src="/logo.png" alt="Dignifyd" className="h-8 w-auto" />
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/about"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-foreground ${
              location.pathname === "/about" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                isServicesPage ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 rounded-xl nav-floating py-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className={`block px-4 py-3 text-sm transition-colors hover:bg-secondary/50 hover:text-foreground ${
                        location.pathname === service.href
                          ? "text-foreground bg-secondary/30"
                          : "text-muted-foreground"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-foreground ${
              location.pathname === "/contact" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 nav-floating rounded-2xl overflow-hidden"
          >
            <div className="py-2">
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary/50 hover:text-foreground ${
                  location.pathname === "/about" ? "text-foreground bg-secondary/30" : "text-muted-foreground"
                }`}
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary/50 hover:text-foreground ${
                    isServicesPage ? "text-foreground bg-secondary/30" : "text-muted-foreground"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-secondary/10"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={closeMobileMenu}
                          className={`block px-10 py-3 text-sm transition-colors hover:bg-secondary/50 hover:text-foreground ${
                            location.pathname === service.href
                              ? "text-foreground bg-secondary/30"
                              : "text-muted-foreground"
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary/50 hover:text-foreground ${
                  location.pathname === "/contact" ? "text-foreground bg-secondary/30" : "text-muted-foreground"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;