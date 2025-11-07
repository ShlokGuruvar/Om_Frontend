import { Router } from "./components/Router";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { WorkPage } from "./pages/WorkPage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { WorkDetailPage } from "./pages/WorkDetailPage";

export default function App() {
  return (
    <Router>
      {(currentPage, navigate, params) => (
        <div className="min-h-screen bg-[#FAF9F6] antialiased relative overflow-x-hidden">
          {/* Paper Texture Background */}
          <div 
            className="fixed inset-0 pointer-events-none opacity-30 z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise'/%3E%3CfeDiffuseLighting in='noise' lighting-color='%23000' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23paper)' fill='%23ffffff'/%3E%3C/svg%3E")`,
              backgroundSize: '400px 400px',
              mixBlendMode: 'multiply'
            }}
          />
          
          {/* Additional subtle grain */}
          <div 
            className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          <div className="relative z-10">
            <Navigation currentPage={currentPage} navigate={navigate} />
            
            {currentPage === 'home' && <HomePage navigate={navigate} />}
            {currentPage === 'work' && <WorkPage navigate={navigate} />}
            {currentPage === 'about' && <AboutPage navigate={navigate} />}
            {currentPage === 'services' && <ServicesPage navigate={navigate} />}
            {currentPage === 'blog' && <BlogPage navigate={navigate} />}
            {currentPage === 'contact' && <ContactPage navigate={navigate} />}
            {currentPage === 'blog-detail' && <BlogDetailPage navigate={navigate} postId={params?.id} />}
            {currentPage === 'work-detail' && <WorkDetailPage navigate={navigate} workId={params?.id} />}
            
            <footer className="py-8 px-6 text-center border-t border-gray-200 bg-white/50 backdrop-blur-sm">
              <p className="text-gray-600 text-sm">
                &copy; 2025 Jordan Rivers. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      )}
    </Router>
  );
}