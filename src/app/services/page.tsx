import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Heading from "@/components/title";

const services = [
  {
    title: "Peningkatan Kolaborasi & Produktivitas",
    items: [
      "Ruang Rapat Pintar (Smart Meeting Room)",
      "Desain Akustik Ruangan & Interior",
      "Pengembangan Software Kustom untuk Kolaborasi"
    ],
  },
  {
    title: "Pengalaman Visual Imersif & Informasi",
    items: [
      "Digital Signage & Video Walls",
      "Tampilan Retail (Retail Display)",
      "Tampilan Korporat (Corporate Display)",
      "Interaktif & Infotainment",
      "Desain Eksterior dengan Integrasi Visual"
    ],
  },
  {
    title: "Lingkungan Optimal: Akustik & Estetika",
    items: [
      "Desain Interior & Tata Letak Fungsional",
      "Insulasi Suara Profesional",
      "Penanganan Akustik Ruangan"
    ],
  },
  {
    title: "Keamanan Terintegrasi & Kontrol Akses Cerdas",
    items: [
      "CCTV AI & Analisis Video Cerdas",
      "Sistem Kontrol Akses Berbasis Web",
      "Manajemen Akses Karyawan",
      "Sistem Kunjungan Tamu"
    ],
  },
  {
    title: "Inovasi Digital & Konsultasi Teknologi",
    items: [
      "Pengembangan Software Kustom (Custom Software Development)",
      "Solusi Cloud untuk Operasional",
      "Konsultasi Strategi Teknologi"
    ],
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <Heading
        title="Layanan Kami"
        subtitle="Kami menyediakan berbagai layanan teknologi terpadu untuk meningkatkan produktivitas dan menciptakan lingkungan kerja yang optimal."
      />

      {/* Services Hero */}
      <section className="pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Solusi Terpadu
              </Badge>
              <h1 className="text-4xl font-bold mb-6 font-serif">
                Solusi Teknologi untuk Kebutuhan Bisnis Anda
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Kami memadukan teknologi terkini dengan desain yang fungsional untuk menciptakan
                lingkungan kerja yang produktif, aman, dan estetis. Semua solusi kami dirancang
                khusus untuk memenuhi kebutuhan spesifik bisnis Anda.
              </p>
              <Button asChild>
                <Link href="/contact">Konsultasi Gratis</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/hero.png"
                alt="NSB Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">Solusi Kami</h2>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="border-b pb-16 last:border-0">
                <h3 className="text-2xl font-bold mb-8">{service.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-muted/30 p-6 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <p className="font-medium text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap untuk meningkatkan lingkungan kerja Anda?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan teknologi bisnis Anda dengan tim ahli kami.
            Kami menyediakan solusi yang disesuaikan dengan kebutuhan spesifik Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Hubungi Kami
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
