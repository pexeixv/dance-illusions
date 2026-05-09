import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const navLinks = [
  { name: 'Dance Forms', href: '/forms' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Locations', href: '/locations' },
  { name: 'Crash Course', href: '/crash-course' },
  { name: 'Weddings', href: '/wedding-dance' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Socials', href: '/socials' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const isActivePath = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center  group">
          <div className="hidden size-8 md:size-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all">
            <span className="text-white font-bold text-lg md:text-xl">DI</span>
          </div>

          <span className="text-white font-display font-bold sm:text-lg lg:text-xl tracking-tight flex items-center gap-1 ml-3">
            Dance <img src="/logo.svg" alt="Dance Illusions Logo" className="size-8 lg:size-9" />
            Illusions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = isActivePath(link.href)

            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-white relative',
                  isActive
                    ? "text-white after:content-[''] after:block after:w-3 after:h-1 after:rounded-full after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:bg-white after:absolute"
                    : 'text-slate-400'
                )}
              >
                {link.name}
              </NavLink>
            )
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-1 lg:gap-4">
          {/* Call Button */}
          <a
            href="tel:+919823014397"
            className="sm:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg hover:brightness-110 transition-all active:scale-95"
          >
            <Phone size={18} />
            <span className="max-sm:hidden">Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => {
                const isActive = isActivePath(link.href)

                return (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className={cn(
                      'text-lg font-medium py-2 border-b border-white/5',
                      isActive ? 'text-purple-400' : 'text-slate-300'
                    )}
                  >
                    {link.name}
                  </NavLink>
                )
              })}

              <a
                href="tel:+919823014397"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-4 rounded-xl font-medium mt-4"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
