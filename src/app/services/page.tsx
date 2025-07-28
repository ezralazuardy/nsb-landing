"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Heading from "@/components/title";
import { motion, AnimatePresence } from "motion/react";

// Service data with IDs for linking to detail pages
const services = [
  {
    id: "1",
    title: "Peningkatan Kolaborasi & Produktivitas",
    description: "Solusi terpadu untuk meningkatkan efektivitas kerja tim Anda melalui teknologi dan desain ruang yang optimal.",
    items: [
      "Ruang Rapat Pintar (Smart Meeting Room)",
      "Desain Akustik Ruangan & Interior",
      "Pengembangan Software Kustom untuk Kolaborasi"
    ],
  },
  {
    id: "2",
    title: "Pengalaman Visual Imersif & Informasi",
    description: "Teknologi visual canggih untuk menyampaikan informasi dengan cara yang menarik dan efektif.",
    items: [
      "Digital Signage & Video Walls",
      "Tampilan Retail (Retail Display)",
      "Tampilan Korporat (Corporate Display)",
      "Interaktif & Infotainment",
      "Desain Eksterior dengan Integrasi Visual"
    ],
  },
  {
    id: "3",
    title: "Lingkungan Optimal: Akustik & Estetika",
    description: "Menciptakan ruang kerja yang nyaman secara akustik dan estetis untuk meningkatkan produktivitas.",
    items: [
      "Desain Interior & Tata Letak Fungsional",
      "Insulasi Suara Profesional",
      "Penanganan Akustik Ruangan"
    ],
  },
  {
    id: "4",
    title: "Keamanan Terintegrasi & Kontrol Akses Cerdas",
    description: "Sistem keamanan canggih dengan kontrol akses cerdas untuk melindungi aset dan data perusahaan Anda.",
    items: [
      "CCTV AI & Analisis Video Cerdas",
      "Sistem Kontrol Akses Berbasis Web",
      "Manajemen Akses Karyawan",
      "Sistem Kunjungan Tamu"
    ],
  },
  {
    id: "5",
    title: "Inovasi Digital & Konsultasi Teknologi",
    description: "Solusi digital terdepan dan konsultasi strategi teknologi untuk mendorong transformasi digital bisnis Anda.",
    items: [
      "Pengembangan Software Kustom (Custom Software Development)",
      "Solusi Cloud untuk Operasional",
      "Konsultasi Strategi Teknologi"
    ],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 }
  }
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Heading
            title="Layanan Kami"
            subtitle="Kami menyediakan berbagai layanan teknologi terpadu untuk meningkatkan produktivitas dan menciptakan lingkungan kerja yang optimal."
          />
        </motion.div>

        {/* Services Hero */}
        <div className="pt-24 pb-16 bg-muted/30">
          <motion.section
            variants={itemVariants}
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={itemVariants}>
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
                </motion.div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/hero.png"
                      alt="NSB Services"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Services List */}
        <div className="py-20">
          <motion.section
            variants={itemVariants}
          >
            <div className="container mx-auto px-4">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-center mb-12 font-serif"
              >
                Solusi Kami
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="space-y-8"
              >
                <AnimatePresence>
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      className="border-b pb-16 last:border-0"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <motion.div
                        variants={itemVariants}
                        className="flex justify-between items-start mb-6"
                      >
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground mb-4">{service.description}</p>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/services/${service.id}`}>Lihat Detail</Link>
                        </Button>
                      </motion.div>
                      <motion.div
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {service.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="bg-muted/30 p-6 rounded-lg hover:shadow-md transition-shadow"
                            variants={cardVariants}
                            whileHover="hover"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            <p className="font-medium text-lg">{item}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Call to Action */}
        <div className="py-20 bg-muted/30">
          <motion.section
            variants={itemVariants}
          >
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold mb-4"
              >
                Siap untuk meningkatkan lingkungan kerja Anda?
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Konsultasikan kebutuhan teknologi bisnis Anda dengan tim ahli kami.
                Kami menyediakan solusi yang disesuaikan dengan kebutuhan spesifik Anda.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
