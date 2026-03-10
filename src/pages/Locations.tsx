import { motion } from "motion/react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export const locations = [
  {
    name: "Vasco",
    venue: "Flora Grande Hotel (6th floor)",
    address: "Vasco da Gama, Goa 403802",
    schedule: "Wednesdays & Saturdays",
    mapUrl: "/flora-grand.webp",
    googleMapsUrl: "https://maps.google.com/?q=Flora+Grande+Hotel+Vasco+Goa",
  },
  {
    name: "Margao",
    venue: "Loyola School Hall",
    address: "Margao, Goa 403601",
    schedule: "Sundays",
    mapUrl: "/loyola.webp",
    googleMapsUrl: "https://maps.google.com/?q=Loyola+High+School+Margao+Goa",
  },
  {
    name: "Fatorda",
    venue: "Rosary School Hall",
    address: "Fatorda, Margao, Goa 403602",
    schedule: "Mondays & Thursdays",
    mapUrl: "/rosary.webp",
    googleMapsUrl: "https://maps.google.com/?q=Rosary+School+Fatorda+Goa",
  },
  {
    name: "Porvorim",
    venue: "Clergy Home Hall",
    address: "Porvorim, Goa 403521",
    schedule: "Tuesdays & Fridays",
    mapUrl: "/clergy-home.webp",
    googleMapsUrl: "https://maps.google.com/?q=Clergy+Home+Porvorim+Goa",
  },
];

export function Locations() {
  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Our <span className="text-gradient-primary">Locations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            We have multiple locations across Goa to make it convenient for you
            to join our classes. Find the one nearest to you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((location, idx) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group hover:shadow-purple-500/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="aspect-square lg:aspect-auto relative overflow-hidden">
                  <img
                    src={location.mapUrl}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl text-white font-bold text-lg">
                    {location.name}
                  </div>
                </div>

                <div className="p-8 space-y-6 flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {location.venue}
                    </h3>
                    <div className="flex items-start gap-2 text-slate-400">
                      <MapPin
                        size={18}
                        className="text-purple-500 shrink-0 mt-1"
                      />
                      <span className="text-sm">{location.address}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                        <Clock size={18} />
                      </div>
                      <div className="text-sm">
                        <p className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                          Schedule
                        </p>
                        <p className="font-medium">{location.schedule}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4 mt-auto">
                    <a
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow bg-white/5 border border-white/10 text-white py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
