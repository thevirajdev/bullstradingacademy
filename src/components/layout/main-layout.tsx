import { ReactNode, useState, useEffect } from 'react'
import { Navbar1 } from '@/components/ui/navbar-1'
import { FlickeringFooter } from '@/components/ui/flickering-footer'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    // Show navbar after a small delay if needed, 
    // or just show it immediately for non-home pages.
    // For now, let's keep it consistent with the home animation logic
    const timer = setTimeout(() => setShowNavbar(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden">
        <img 
          src="/assets/bg.png" 
          alt="" 
          className="w-full h-full object-cover fixed top-0 left-0"
        />
        <div className="fixed inset-0 bg-white/10 backdrop-blur-[2px]" />
      </div>
      <div className="fixed-overlay" />

      <Navbar1 show={showNavbar} />
      
      <main className="relative pt-16">
        {children}
      </main>

      <FlickeringFooter />
    </div>
  )
}
