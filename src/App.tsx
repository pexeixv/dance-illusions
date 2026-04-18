import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { DanceForms } from './pages/DanceForms'
import { DanceDetail } from './pages/DanceDetail'
import { Locations } from './pages/Locations'
import { Schedule } from './pages/Schedule'
import { CrashCourse } from './pages/CrashCourse'
import { Socials } from './pages/Socials'
import { WeddingDance } from './pages/WeddingDance'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import ScrollToTop from './components/ScrollToTop'
import TwSizeIndicator from './components/TwSizeIndicator'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <TwSizeIndicator />
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/20 blur-[120px] animate-pulse-glow" />
          <div
            className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/20 blur-[120px] animate-pulse-glow"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-cyan-600/15 blur-[120px] animate-pulse-glow"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forms" element={<DanceForms />} />
              <Route path="/forms/:slug" element={<DanceDetail />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/crash-course" element={<CrashCourse />} />
              <Route path="/socials" element={<Socials />} />
              <Route path="/wedding-dance" element={<WeddingDance />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}
