import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'TPH (Thermoplastic Hidrokarbon)',
    category: 'Ekonomik Koruma',
    description: 'Mobilya yüzeylerinde maliyet avantajı sunan esnek yapılı kaplama. Uygulanması kolaydır; kısa süreli koruma isteyen kullanıcılar için ekonomik bir çözümdür.',
    price: 'Fiyat için iletişime geçin',
    image: '/images/projects/akyokus-2.jpg',
    features: [
      'Maliyet avantajlı ekonomik çözüm',
      'Esnek yapı, kolay uygulama',
      'Kendini yenileme özelliği bulunmaz',
      'UV altında zamanla sararma riski',
      'Kısa süreli koruma için ideal'
    ]
  },
  {
    id: '2',
    name: 'TPU (Thermoplastic Polyurethane)',
    category: 'Premium Koruma',
    description: 'Daha dayanıklı ve kaliteli bir malzeme. Çizilme, kimyasal temizlik ürünleri ve güneş ışığına karşı yüksek direnç gösterir; uzun süre estetik görünümünü korur.',
    price: 'Fiyat için iletişime geçin',
    image: '/images/tpu.jpg',
    features: [
      'Çizilme ve kimyasallara yüksek direnç',
      'Yüksek UV dayanımı ve uzun ömür',
      'Kendini onaran yapı, küçük çizikler kaybolur',
      'Uzun süre ilk günkü estetik görünüm'
    ]
  },
  {
    id: '3',
    name: '3M PPF (Paint Protection Film)',
    category: 'Premium Marka',
    description: 'Global ölçekte tanınan 3M markasının ileri teknolojiye sahip koruma filmi. Endüstri standardında mükemmellik.',
    price: 'Fiyat için iletişime geçin',
    image: '/images/WhatsApp Image 2025-08-02 at 12.31.36 (1).jpeg',
    features: [
      'Global 3M markası güvencesi',
      'İleri teknoloji yapısı',
      'Endüstride kanıtlanmış performans',
      'Dünya çapında kabul gören kalite'
    ]
  }
];