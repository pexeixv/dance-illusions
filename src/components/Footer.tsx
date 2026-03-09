import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  CodeIcon,
  CodeXmlIcon,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">DI</span>
              </div>
              <span className="text-white font-display font-bold text-xl tracking-tight">
                Dance <span className="text-gradient-primary">Illusions</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Goa's premier Ballroom & Latin dance school. Professional
              instruction, vibrant community, and unforgettable social dance
              experiences.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-400/50 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-400/50 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-400/50 transition-all"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                "About Us",
                "Dance Forms",
                "Schedule",
                "Locations",
                "Crash Course",
                "Team",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-500 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dance Forms */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Dance Forms
            </h3>
            <ul className="space-y-4">
              {[
                "Rumba",
                "Cha Cha",
                "Samba",
                "Waltz",
                "Tango",
                "Salsa",
                "Bachata",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/forms/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-500 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="text-purple-500 shrink-0" size={18} />
                <span>+91 98230 12345</span>
              </li>
            </ul>
            <a
              href="//gavn.in/?ref=dance-illusions"
              target="_blank"
              className="text-white font-semibold text-lg mb-6 mt-8 flex flex-wrap items-center gap-2 group"
            >
              <CodeXmlIcon className="shrink-0" size={18} /> by{" "}
              <span className="transition-colors underline decoration-transparent group-hover:decoration-purple-500 group-hover:text-purple-500 underline-offset-2">
                Gavin Pereira
              </span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Dance Illusions Goa. All rights
            reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
