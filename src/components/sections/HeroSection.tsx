import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ShaderAnimation } from '@/components/ui/shader-lines';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated shader background in brand colors */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>

      {/* Legibility overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="container relative z-20">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="block text-[#313a6f]">Profesyonel Yüzey</span>
              <span className="block">Koruma Sistemleri</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground/90 max-w-2xl mt-4">
              Dokunduğun her yüzey, artık zamana karşı güvende.
            </p>
            <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-2 space-y-2">
              <p>Mobiguard, Konya'da konut, ofis ve ticari alanlarda;</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><span className="text-[#313a6f]">✦</span> Mermer</span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><span className="text-[#313a6f]">✦</span> Cam</span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><span className="text-[#313a6f]">✦</span> Ahşap</span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><span className="text-[#313a6f]">✦</span> Lake</span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><span className="text-[#313a6f]">✦</span> Tezgâh</span>
              </div>
              <p>yüzeylerine profesyonel kaplama hizmeti sunar.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="premium" size="xl" className="group" onClick={() => {
              const productsSection = document.getElementById('products');
              if (productsSection) {
                const headerHeight = 80;
                const elementPosition = productsSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: elementPosition - headerHeight,
                  behavior: 'smooth'
                });
              }
            }}>
              Ürün Gamını Keşfet
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 pt-8 text-sm text-muted-foreground animate-fadeIn">
            <div className="flex items-center group cursor-pointer animate-slideUp hover:text-foreground transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '0.8s' }}>
              <div className="w-1 h-1 rounded-full bg-[#313a6f] mr-2 animate-pulse-glow group-hover:w-2 group-hover:h-2 group-hover:shadow-lg group-hover:shadow-[#313a6f]/50 transition-all duration-300" />
              <span>TPH &amp; TPU Teknolojisi</span>
            </div>
            <div className="flex items-center group cursor-pointer animate-slideUp hover:text-foreground transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '1s' }}>
              <div className="w-1 h-1 rounded-full bg-[#313a6f] mr-2 animate-pulse-glow group-hover:w-2 group-hover:h-2 group-hover:shadow-lg group-hover:shadow-[#313a6f]/50 transition-all duration-300" />
              <span>3M PPF Markası</span>
            </div>
            <div className="flex items-center group cursor-pointer animate-slideUp hover:text-foreground transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '1.2s' }}>
              <div className="w-1 h-1 rounded-full bg-[#313a6f] mr-2 animate-pulse-glow group-hover:w-2 group-hover:h-2 group-hover:shadow-lg group-hover:shadow-[#313a6f]/50 transition-all duration-300" />
              <span>UV Dayanımı</span>
            </div>
            <div className="flex items-center group cursor-pointer animate-slideUp hover:text-foreground transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '1.4s' }}>
              <div className="w-1 h-1 rounded-full bg-[#313a6f] mr-2 animate-pulse-glow group-hover:w-2 group-hover:h-2 group-hover:shadow-lg group-hover:shadow-[#313a6f]/50 transition-all duration-300" />
              <span>Kendini Yenileme</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
