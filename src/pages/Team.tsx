import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, Star, Award, Music } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Martin D\'Costa',
    role: 'Founder & Lead Instructor',
    bio: 'Over two decades of experience teaching ballroom and Latin dance. A visionary in the Goan dance scene, Dr. Martin has trained hundreds of dancers and choreographed numerous award-winning performances.',
    image: 'https://i.pravatar.cc/300?u=martin',
    socials: { instagram: '#', facebook: '#', youtube: '#' },
    achievements: ['20+ Years Experience', 'Professional Ballroom Adjudicator', 'Founder of Dance Illusions'],
  },
  {
    name: 'Sarah Fernandes',
    role: 'Senior Latin Instructor',
    bio: 'Specializing in Salsa, Bachata, and Cha Cha. Sarah brings a vibrant energy to her classes and focuses on rhythm, connection, and the joy of social dancing.',
    image: 'https://i.pravatar.cc/300?u=sarah',
    socials: { instagram: '#', facebook: '#', youtube: '#' },
    achievements: ['Latin Dance Specialist', '10+ Years Teaching', 'Social Dance Expert'],
  },
  {
    name: 'David D\'Souza',
    role: 'Ballroom Technique Specialist',
    bio: 'Expert in Waltz, Tango, and Foxtrot. David focuses on technical precision, posture, and the elegant flow of ballroom dancing.',
    image: 'https://i.pravatar.cc/300?u=david',
    socials: { instagram: '#', facebook: '#', youtube: '#' },
    achievements: ['Ballroom Technique Expert', 'Competitive Dancer', 'Choreography Specialist'],
  },
  {
    name: 'Elena Rodrigues',
    role: 'Social Jive & Wedding Choreographer',
    bio: 'Elena specializes in making dance accessible and fun for everyone. She is our lead choreographer for wedding first dances and social jive workshops.',
    image: 'https://i.pravatar.cc/300?u=elena',
    socials: { instagram: '#', facebook: '#', youtube: '#' },
    achievements: ['Wedding Choreography Lead', 'Social Jive Specialist', 'Beginner Friendly Expert'],
  },
];

export function Team() {
  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Meet Our <span className="text-gradient-primary">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Learn from the best. Our team of professional instructors is dedicated to helping you achieve your dance goals in a fun and supportive environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group hover:shadow-purple-500/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex gap-3">
                    <a href={member.socials.instagram} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:text-purple-400 hover:border-purple-400/50 transition-all">
                      <Instagram size={18} />
                    </a>
                    <a href={member.socials.facebook} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:text-purple-400 hover:border-purple-400/50 transition-all">
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm uppercase tracking-widest">{member.role}</p>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-3">
                    <p className="text-white font-bold text-xs uppercase tracking-widest">Key Achievements</p>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center gap-2 text-slate-300 text-xs">
                          <Award size={14} className="text-cyan-400" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <div className="flex-grow bg-white/5 border border-white/10 text-slate-400 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 italic">
                      Professional Instructor
                    </div>
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
