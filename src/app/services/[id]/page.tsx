"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

// Service data matching the services page
const serviceData = [
  {
    id: "1",
    title: "Peningkatan Kolaborasi & Produktivitas",
    description: "Solusi terpadu untuk meningkatkan efektivitas kerja tim Anda melalui teknologi dan desain ruang yang optimal.",
    detailedDescription: `
      <p>Solusi terpadu kami untuk peningkatan kolaborasi & produktivitas dirancang untuk menciptakan lingkungan kerja yang mendukung efektivitas tim dan optimalisasi proses bisnis.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">Komponen Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Ruang Rapat Pintar (Smart Meeting Room):</strong> Ruang pertemuan yang dilengkapi dengan teknologi terkini untuk mendukung kolaborasi jarak jauh dan presentasi interaktif.</li>
        <li><strong>Desain Akustik Ruangan & Interior:</strong> Perencanaan tata ruang dan akustik yang optimal untuk mendukung konsentrasi dan komunikasi yang efektif.</li>
        <li><strong>Pengembangan Software Kustom untuk Kolaborasi:</strong> Platform dan aplikasi yang dirancang khusus untuk memfasilitasi kolaborasi tim sesuai dengan kebutuhan spesifik bisnis Anda.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">Manfaat Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Meningkatkan efisiensi pertemuan dan pengambilan keputusan</li>
        <li>Mengurangi waktu dan biaya komunikasi antar tim</li>
        <li>Meningkatkan kualitas kolaborasi lintas departemen</li>
        <li>Menciptakan lingkungan kerja yang mendukung inovasi</li>
      </ul>
    `,
    features: [
      "Ruang Rapat Pintar (Smart Meeting Room)",
      "Desain Akustik Ruangan & Interior",
      "Pengembangan Software Kustom untuk Kolaborasi"
    ],
    image: "/hero.png",
    price: "Mulai dari 10 Juta"
  },
  {
    id: "2",
    title: "Pengalaman Visual Imersif & Informasi",
    description: "Teknologi visual canggih untuk menyampaikan informasi dengan cara yang menarik dan efektif.",
    detailedDescription: `
      <p>Layanan Pengalaman Visual Imersif & Informasi kami menggunakan teknologi terdepan untuk menciptakan pengalaman visual yang menarik dan informatif bagi pelanggan dan karyawan Anda.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">Komponen Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Digital Signage & Video Walls:</strong> Solusi tampilan digital yang dapat disesuaikan untuk berbagai kebutuhan informasi dan promosi.</li>
        <li><strong>Tampilan Retail (Retail Display):</strong> Desain dan implementasi display digital untuk meningkatkan pengalaman belanja pelanggan.</li>
        <li><strong>Tampilan Korporat (Corporate Display):</strong> Sistem informasi visual untuk kebutuhan korporat seperti dashboard, presentasi, dan informasi internal.</li>
        <li><strong>Interaktif & Infotainment:</strong> Platform interaktif yang menggabungkan informasi dan hiburan untuk meningkatkan keterlibatan pengguna.</li>
        <li><strong>Desain Eksterior dengan Integrasi Visual:</strong> Solusi visual yang terintegrasi dengan arsitektur eksterior bangunan.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">Manfaat Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Meningkatkan daya tarik visual brand perusahaan Anda</li>
        <li>Menyampaikan informasi dengan cara yang lebih menarik dan efektif</li>
        <li>Meningkatkan pengalaman pelanggan dan keterlibatan</li>
        <li>Mendukung strategi pemasaran dan komunikasi visual</li>
      </ul>
    `,
    features: [
      "Digital Signage & Video Walls",
      "Tampilan Retail (Retail Display)",
      "Tampilan Korporat (Corporate Display)",
      "Interaktif & Infotainment",
      "Desain Eksterior dengan Integrasi Visual"
    ],
    image: "/hero.png",
    price: "Mulai dari 15 Juta"
  },
  {
    id: "3",
    title: "Lingkungan Optimal: Akustik & Estetika",
    description: "Menciptakan ruang kerja yang nyaman secara akustik dan estetis untuk meningkatkan produktivitas.",
    detailedDescription: `
      <p>Solusi Lingkungan Optimal kami fokus pada penciptaan ruang kerja yang harmonis secara akustik dan estetis untuk mendukung kenyamanan dan produktivitas pengguna.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">Komponen Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Desain Interior & Tata Letak Fungsional:</strong> Perencanaan tata ruang yang optimal untuk mendukung berbagai aktivitas kerja dan interaksi tim.</li>
        <li><strong>Insulasi Suara Profesional:</strong> Solusi isolasi suara untuk mengurangi kebisingan dan menciptakan lingkungan kerja yang tenang.</li>
        <li><strong>Penanganan Akustik Ruangan:</strong> Teknologi dan material khusus untuk mengoptimalkan kualitas suara dalam ruang kerja.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">Manfaat Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Meningkatkan konsentrasi dan produktivitas tim</li>
        <li>Mengurangi stres dan kelelahan akibat kebisingan</li>
        <li>Menciptakan lingkungan kerja yang nyaman dan estetis</li>
        <li>Mendukung brand image perusahaan yang profesional</li>
      </ul>
    `,
    features: [
      "Desain Interior & Tata Letak Fungsional",
      "Insulasi Suara Profesional",
      "Penanganan Akustik Ruangan"
    ],
    image: "/hero.png",
    price: "Mulai dari 8 Juta"
  },
  {
    id: "4",
    title: "Keamanan Terintegrasi & Kontrol Akses Cerdas",
    description: "Sistem keamanan canggih dengan kontrol akses cerdas untuk melindungi aset dan data perusahaan Anda.",
    detailedDescription: `
      <p>Sistem Keamanan Terintegrasi & Kontrol Akses Cerdas kami menyediakan perlindungan menyeluruh untuk aset fisik dan digital perusahaan Anda dengan teknologi terkini.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">Komponen Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>CCTV AI & Analisis Video Cerdas:</strong> Sistem pengawasan berbasis kecerdasan buatan untuk mendeteksi ancaman dan perilaku mencurigakan secara real-time.</li>
        <li><strong>Sistem Kontrol Akses Berbasis Web:</strong> Platform kontrol akses yang dapat diakses dari mana saja untuk manajemen keamanan yang fleksibel.</li>
        <li><strong>Manajemen Akses Karyawan:</strong> Sistem identifikasi dan autentikasi untuk mengatur akses karyawan ke area dan sistem yang relevan.</li>
        <li><strong>Sistem Kunjungan Tamu:</strong> Platform terintegrasi untuk pendaftaran, verifikasi, dan manajemen akses tamu secara efisien.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">Manfaat Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Melindungi aset fisik dan data perusahaan secara menyeluruh</li>
        <li>Meningkatkan efisiensi operasional tim keamanan</li>
        <li>Mengurangi risiko keamanan dan insiden tidak diinginkan</li>
        <li>Memenuhi standar keamanan dan regulasi industri</li>
      </ul>
    `,
    features: [
      "CCTV AI & Analisis Video Cerdas",
      "Sistem Kontrol Akses Berbasis Web",
      "Manajemen Akses Karyawan",
      "Sistem Kunjungan Tamu"
    ],
    image: "/hero.png",
    price: "Mulai dari 12 Juta"
  },
  {
    id: "5",
    title: "Inovasi Digital & Konsultasi Teknologi",
    description: "Solusi digital terdepan dan konsultasi strategi teknologi untuk mendorong transformasi digital bisnis Anda.",
    detailedDescription: `
      <p>Layanan Inovasi Digital & Konsultasi Teknologi kami membantu perusahaan Anda merancang dan mengimplementasikan strategi teknologi yang tepat untuk mendorong transformasi digital dan inovasi berkelanjutan.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">Komponen Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Pengembangan Software Kustom (Custom Software Development):</strong> Pembuatan aplikasi dan platform yang disesuaikan dengan kebutuhan spesifik bisnis Anda.</li>
        <li><strong>Solusi Cloud untuk Operasional:</strong> Implementasi dan manajemen infrastruktur cloud untuk mendukung operasional bisnis yang fleksibel dan skalabel.</li>
        <li><strong>Konsultasi Strategi Teknologi:</strong> Layanan konsultasi untuk merancang roadmap teknologi yang selaras dengan tujuan bisnis jangka panjang.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">Manfaat Utama:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Mendorong transformasi digital yang berkelanjutan</li>
        <li>Meningkatkan daya saing melalui inovasi teknologi</li>
        <li>Mengoptimalkan proses bisnis dengan solusi digital</li>
        <li>Mengurangi risiko teknologi dengan strategi yang teruji</li>
      </ul>
    `,
    features: [
      "Pengembangan Software Kustom (Custom Software Development)",
      "Solusi Cloud untuk Operasional",
      "Konsultasi Strategi Teknologi"
    ],
    image: "/hero.png",
    price: "Mulai dari 20 Juta"
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function ServiceDetails({ params }: any) {
  // @ts-ignore
  const { id } = React.use(params);

  const filteredServiceDetails = serviceData.filter(
    (service) => service.id === id,
  );

  if (filteredServiceDetails.length === 0) {
    return (
      <div className="container py-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-2xl font-bold">Layanan tidak ditemukan</h1>
            </motion.div>
            <div className="mt-6">
              <motion.div variants={itemVariants}>
                <Button asChild>
                  <Link href="/services">Kembali ke Layanan</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    );
  }

  const data = filteredServiceDetails[0];

  return (
    <div className="container py-10">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex justify-between items-center mb-8 hover:underline">
          <motion.div
            variants={itemVariants}
          >
            <Link
              href="/services"
              className="transition-all ease-in-out duration-150 flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 text-sm"
            >
              <ArrowLeft className="size-4" />
              Kembali ke Layanan
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row justify-between mt-2 mb-8">
            <div className="md:w-1/2">
              <motion.div
                variants={imageVariants}
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-auto rounded-lg mb-4"
                  loading="lazy"
                />
              </motion.div>
            </div>

            <div className="md:w-1/2 md:ml-12 flex flex-col gap-6">
              <motion.div
                variants={containerVariants}
                className="space-y-4"
              >
                <div className="title font-semibold text-4xl tracking-tighter font-serif">
                  <motion.h1
                    variants={itemVariants}
                  >
                    {data.title}
                  </motion.h1>
                </div>

                <div className="text-lg text-muted-foreground">
                  <motion.p
                    variants={itemVariants}
                  >
                    {data.description}
                  </motion.p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <motion.div
                    variants={itemVariants}
                  >
                    <h3 className="text-xl font-semibold mb-3">Komponen Layanan</h3>
                    <ul className="space-y-2">
                      {data.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <motion.li
                            variants={itemVariants}
                            transition={{ delay: index * 0.1 }}
                          >
                            <span className="text-primary mr-2">✓</span>
                            {feature}
                          </motion.li>
                        </div>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="flex gap-1 items-center">
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-2 my-4"
                  >
                    <span className="text-neutral-500 dark:text-neutral-400">
                      Investasi
                    </span>
                    <h2 className="title font-semibold text-3xl tracking-tighter font-serif">
                      {data.price}
                    </h2>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <Button asChild className="w-max" size="lg">
                    <Link href="/contact">Konsultasi Sekarang</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="prose max-w-none mt-12">
            <motion.div
              variants={itemVariants}
            >
              <div dangerouslySetInnerHTML={{ __html: data.detailedDescription }} />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
