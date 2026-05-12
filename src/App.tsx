import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/layout/main-layout'
import { Home } from '@/pages/home'
import { Events } from '@/pages/events'
import { EventDetails } from '@/pages/event-details'
import { About } from '@/pages/about'
import { Blog } from '@/pages/blog'
import { BlogDetails } from '@/pages/blog-details'
import { NotFound } from '@/pages/not-found'
import { TermsOfService } from '@/pages/legal/terms'
import { PrivacyPolicy } from '@/pages/legal/privacy'
import { RefundPolicy } from '@/pages/legal/refund'
import { Disclaimer } from '@/pages/legal/disclaimer'
import ScrollToTop from '@/components/layout/scroll-to-top'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          
          {/* Legal Routes */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
