import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

interface LightboxState {
  project: number;
  image: number;
}

export function ProjectsSection() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const activeProject = lightbox !== null ? projects[lightbox.project] : null;
  const activeImages = activeProject
    ? [activeProject.mainImage, ...activeProject.gallery]
    : [];

  const openLightbox = (project: number, image: number) => {
    setLightbox({ project, image });
  };

  const step = (direction: number) => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const total = projects[prev.project].gallery.length + 1;
      return { project: prev.project, image: (prev.image + direction + total) % total };
    });
  };

  return (
    <section id="projeler" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className={cn(
          'absolute top-[10%] left-[-200px] w-[400px] h-[400px] rounded-full',
          'bg-[#313a6f]/10 blur-[100px] z-0'
        )}
      />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="border-[#313a6f] text-[#313a6f] px-4 py-1">
            Projelerimiz
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tamamladığımız Projeler
          </h2>
          <p className="text-muted-foreground">
            Konut ve ticari alanlarda yüzeyleri; çizilmeye, lekeye ve yıpranmaya karşı koruma
            altına aldığımız uygulamalardan bir seçki.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, pIndex) => (
            <article key={project.id} className="space-y-8">
              {/* Main showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div
                  className={cn(
                    'relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer',
                    'shadow-2xl shadow-black/30',
                    pIndex % 2 === 1 && 'lg:order-2'
                  )}
                  onClick={() => openLightbox(pIndex, 0)}
                >
                  <AspectRatio ratio={16 / 10}>
                    <img
                      src={project.mainImage}
                      alt={project.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{project.name}</h3>
                      {project.location && (
                        <p className="flex items-center text-white/80 text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                        </p>
                      )}
                    </div>
                  </AspectRatio>
                </div>

                <div className={cn('space-y-5', pIndex % 2 === 1 && 'lg:order-1')}>
                  <p className="text-lg font-medium text-[#313a6f]">{project.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/15 text-foreground/80 font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project gallery */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.gallery.map((src, gIndex) => (
                  <div
                    key={src}
                    className="group relative overflow-hidden rounded-lg border border-white/5 cursor-pointer"
                    onClick={() => openLightbox(pIndex, gIndex + 1)}
                  >
                    <AspectRatio ratio={4 / 5} className="bg-muted">
                      <img
                        src={src}
                        alt={`${project.name} uygulama görseli ${gIndex + 1}`}
                        loading="lazy"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#313a6f]/0 group-hover:bg-[#313a6f]/15 transition-colors duration-300" />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="sm:max-w-4xl p-0 bg-background/90 backdrop-blur-lg border border-white/10 overflow-hidden">
          {activeProject && lightbox && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{activeProject.name}</DialogTitle>
              </DialogHeader>
              <div className="relative">
                <img
                  src={activeImages[lightbox.image]}
                  alt={`${activeProject.name} görseli`}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <Badge className="mb-2 bg-[#313a6f]/80 border-none">{activeProject.name}</Badge>
                  <p className="text-white text-sm">
                    {lightbox.image + 1} / {activeImages.length}
                  </p>
                </div>
                <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between pointer-events-none">
                  <Button
                    variant="minimal"
                    size="icon"
                    className="bg-black/20 backdrop-blur-sm h-10 w-10 pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      step(-1);
                    }}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="minimal"
                    size="icon"
                    className="bg-black/20 backdrop-blur-sm h-10 w-10 pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      step(1);
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
