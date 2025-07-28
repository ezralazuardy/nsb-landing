"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, Users, Target, Award } from "lucide-react";
import Heading from "@/components/title";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="flex flex-col w-full">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Heading
          title="Tentang Kami"
          subtitle="PT Nasaktian Solusi Bersama hadir sebagai solusi audio visual terintegrasi untuk bisnis modern Anda."
        />

        {/* About Hero */}
        <section className="pt-24 pb-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <Badge className="mb-4" variant="outline">
                  Cerita Kami
                </Badge>
                <h1 className="text-4xl font-bold mb-6 font-serif">
                  Solusi Audio Visual Terintegrasi untuk Bisnis Modern Anda
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  PT Nasaktian Solusi Bersama adalah perusahaan yang berlokasi
                  di Kelurahan Rowosari, Kecamatan Tembalang, Kota Semarang.
                  Kami menyediakan solusi audio visual terintegrasi untuk berbagai jenis bisnis.
                </p>
                <Button asChild>
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/logo-horizontal.png"
                  alt="PT Nasaktian Solusi Bersama"
                  className="w-full h-full object-contain p-8"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-serif font-bold mb-4">Misi & Visi</h2>
              <p className="text-muted-foreground text-lg">
                Kami berkomitmen untuk memberikan solusi audio visual terbaik yang mendukung pertumbuhan dan keberhasilan bisnis Anda.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="bg-card p-8 rounded-lg border"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Misi Kami</h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  Menyediakan solusi audio visual terintegrasi yang inovatif, handal, dan terjangkau
                  untuk membantu bisnis Anda tampil modern dan profesional di era digital.
                </p>
              </motion.div>

              <motion.div
                className="bg-card p-8 rounded-lg border"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <Building className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Visi Kami</h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  Menjadi penyedia solusi audio visual terdepan di Indonesia yang
                  membantu bisnis dalam menyampaikan pesan mereka secara efektif dan memukau.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-serif font-bold mb-4">Nilai Kami</h2>
              <p className="text-muted-foreground text-lg">
                Nilai-nilai inti kami memandu setiap aspek dari layanan yang kami berikan.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="bg-card p-6 rounded-lg border text-center"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Kualitas</h3>
                <p className="text-muted-foreground">
                  Kami berkomitmen untuk memberikan kualitas terbaik dalam setiap proyek.
                </p>
              </motion.div>

              <motion.div
                className="bg-card p-6 rounded-lg border text-center"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Kolaborasi</h3>
                <p className="text-muted-foreground">
                  Kami percaya pada kekuatan kerja sama untuk menciptakan solusi terbaik.
                </p>
              </motion.div>

              <motion.div
                className="bg-card p-6 rounded-lg border text-center"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Inovasi</h3>
                <p className="text-muted-foreground">
                  Kami terus mengembangkan solusi baru yang sesuai dengan perkembangan teknologi.
                </p>
              </motion.div>

              <motion.div
                className="bg-card p-6 rounded-lg border text-center"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Integritas</h3>
                <p className="text-muted-foreground">
                  Kami menjalankan bisnis dengan jujur dan transparan dalam semua interaksi.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          className="py-20"
          variants={itemVariants}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Tertarik untuk bekerja sama?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Apabila anda memiliki ide dan masukan untuk bekerja sama, kami akan
              senang berusaha mendengarkan anda.
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
        </motion.section>
      </motion.div>
    </div>
  );
}
