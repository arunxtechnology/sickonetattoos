import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

import logo from "@/assets/logo.jpg";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Sick One Tattoos" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Las Vegas's premier tattoo studio. Award-winning custom tattoos, cover-ups, piercings, and laser services.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="tel:+16263915520"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/sickonetattoos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-condensed text-foreground font-bold uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-condensed text-foreground font-bold uppercase tracking-wider text-sm mb-4">
              Visit Us
            </h4>
            <p className="text-muted-foreground text-sm flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              300 W Utah Ave, Ste 104<br />Las Vegas, NV 89102
            </p>
            <div className="mt-4 text-muted-foreground text-sm space-y-1">
              <p>Mon – Sat: 11 AM – 10 PM</p>
              <p>Sunday: 12 PM – 8 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-xs font-condensed uppercase tracking-wider">
            © {new Date().getFullYear()} Sick One Tattoos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
