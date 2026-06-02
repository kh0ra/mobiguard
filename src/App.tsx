import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { GallerySection } from '@/components/sections/GallerySection';
// import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AboutSection } from '@/components/sections/AboutSection';
import { CustomCursor } from '@/components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <CustomCursor />
        <Header />
        <main>
          <HeroSection />
          <ProductsSection />
          <ProjectsSection />
          <GallerySection />
          <AboutSection />
          {/* <TestimonialsSection /> */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;