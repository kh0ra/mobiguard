import { ProjectShowcase } from '@/types';

export const projects: ProjectShowcase[] = [
  {
    id: 'akyokus-kasri',
    name: 'Akyokuş Kasrı',
    location: 'Konya',
    tagline: 'Zarif detayların zamana karşı korunması',
    description:
      'Akyokuş Kasrı\'nın klasik mobilyaları, mermer ve ahşap yüzeyleri; doğal dokusu ve estetik görünümü değiştirilmeden profesyonel kaplama sistemlerimizle güvence altına alındı. Yoğun kullanıma rağmen yüzeyler ilk günkü formunu koruyor.',
    tags: ['Konut', 'Klasik Mobilya', 'Mermer ve Ahşap'],
    mainImage: '/images/projects/akyokus-ana-gorsel.jpeg',
    gallery: [
      '/images/projects/akyokus-1.jpg',
      '/images/projects/akyokus-2.jpg',
      '/images/projects/akyokus-3.jpg',
      '/images/projects/akyokus-4.jpg',
      '/images/projects/akyokus-5.jpg',
      '/images/projects/akyokus-6.jpg',
      '/images/projects/akyokus-7.jpg',
    ],
  },
  {
    id: 'eregli-fera',
    name: 'Ereğli Fera',
    location: 'Ereğli, Konya',
    tagline: 'Yoğun temas alanlarında kesintisiz koruma',
    description:
      'Ereğli Fera\'da masa, tezgâh ve vitrin yüzeyleri; günlük yoğun kullanımın getirdiği çizilme, leke ve kimyasal etkilere karşı kaplandı. Mekânın estetiği bozulmadan yüzeylerin dayanıklılığı ve temizlik kolaylığı artırıldı.',
    tags: ['Ticari Alan', 'Tezgâh ve Vitrin', 'Uzun Ömürlü Koruma'],
    mainImage: '/images/projects/fera-ana-gorsel.jpeg',
    gallery: [
      '/images/projects/fera-1.jpg',
      '/images/projects/fera-2.jpg',
      '/images/projects/fera-3.jpg',
      '/images/projects/fera-4.jpg',
      '/images/projects/fera-5.jpg',
      '/images/projects/fera-6.jpg',
    ],
  },
  {
    id: 'kirkikindi-pastane',
    name: 'Kırkikindi Pastane',
    location: 'Konya',
    tagline: 'Servis edilen her yüzey hijyenik ve dayanıklı',
    description:
      'Kırkikindi Pastane\'nin servis tezgâhları, vitrinleri ve çalışma yüzeyleri; temizlik kolaylığı ve uzun ömür için profesyonel koruma katmanıyla kaplandı. Yoğun kullanım altında yüzeyler kolayca temizlenir ve yıpranmaya karşı dirençli kalır.',
    tags: ['Ticari Alan', 'Pastane', 'Servis Tezgâhları'],
    mainImage: '/images/projects/kirkikindi-ana-gorsel.jpg',
    gallery: [
      '/images/projects/kirkikindi-1.jpg',
      '/images/projects/kirkikindi-2.jpg',
      '/images/projects/kirkikindi-3.jpg',
      '/images/projects/kirkikindi-4.jpg',
      '/images/projects/kirkikindi-5.jpg',
      '/images/projects/kirkikindi-6.jpg',
    ],
  },
];
