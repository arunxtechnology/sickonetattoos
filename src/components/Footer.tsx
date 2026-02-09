import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl tracking-wider text-foreground">
              SICK ONE <span className="text-primary">TATTOOS</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-2 flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              300 W Utah Ave, Ste 104 • Las Vegas, NV 89102
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+17025551234"
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

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-xs font-condensed uppercase tracking-wider">
            © {new Date().getFullYear()} Sick One Tattoos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
