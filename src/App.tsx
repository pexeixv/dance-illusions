import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PageSkeleton } from './components/PageSkeleton'
import ScrollToTop from './components/ScrollToTop'
import TwSizeIndicator from './components/TwSizeIndicator'

// Lazy load all route pages for code splitting
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const DanceForms = lazy(() => import('./pages/DanceForms').then((m) => ({ default: m.DanceForms })))
const DanceDetail = lazy(() =>
  import('./pages/DanceDetail').then((m) => ({ default: m.DanceDetail }))
)
const Locations = lazy(() => import('./pages/Locations').then((m) => ({ default: m.Locations })))
const Schedule = lazy(() => import('./pages/Schedule').then((m) => ({ default: m.Schedule })))
const CrashCourse = lazy(() =>
  import('./pages/CrashCourse').then((m) => ({ default: m.CrashCourse }))
)
const Socials = lazy(() => import('./pages/Socials').then((m) => ({ default: m.Socials })))
const Gallery = lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery })))
const WeddingDance = lazy(() =>
  import('./pages/WeddingDance').then((m) => ({ default: m.WeddingDance }))
)
const PrivacyPolicy = lazy(() =>
  import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy }))
)
const TermsOfService = lazy(() =>
  import('./pages/TermsOfService').then((m) => ({ default: m.TermsOfService }))
)
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.default })))

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
            <Suspense fallback={<PageSkeleton />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forms" element={<DanceForms />} />
                <Route path="/forms/:slug" element={<DanceDetail />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/crash-course" element={<CrashCourse />} />
                <Route path="/socials" element={<Socials />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/wedding" element={<WeddingDance />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}
