"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "@/components/title";
import Image from "next/image";
import { cn } from "@/lib/utils";

const property = [
  {
    id: 1,
    title: "36/60",
    category: "36",
    image: "/denah-36.png",
    description: "Rumah Tipe 36/60 sangat cocok untuk keluarga muda",
  },
];

const categories = [
  { id: "all", label: "Semua Tipe" },
  // { id: "21", label: "Tipe 21" },
  { id: "36", label: "Tipe 36" },
  // { id: "45", label: "Tipe 45" },
  // { id: "60", label: "Tipe 60" },
];

const faq = [
  {
    question:
      "Apa saja tipe rumah yang tersedia di PT Nasaktian Solusi Bersama?",
    answer:
      "PT Nasaktian Solusi Bersama menyediakan tipe rumah 36/60 yang dirancang khusus untuk keluarga muda.",
  },
  {
    question: "Apa keunggulan lokasi PT Nasaktian Solusi Bersama?",
    answer:
      "Lokasi strategis dekat kampus, rumah sakit, supermarket, dan pusat kota Semarang, membuat aktivitas sehari-hari lebih praktis.",
  },
  {
    question: "Apakah sertifikat dan izin bangunan sudah lengkap?",
    answer:
      "Ya, semua unit di PT Nasaktian Solusi Bersama memiliki sertifikat SHM dan IMB yang lengkap, menjamin keamanan investasi Anda.",
  },
  {
    question: "Apa saja fasilitas yang tersedia di dalam cluster?",
    answer:
      "Cluster ini dilengkapi taman bermain anak, area hijau, dan sistem keamanan 24 jam untuk kenyamanan penghuni.",
  },
  {
    question: "Apakah tersedia opsi pembayaran KPR?",
    answer:
      "Ya, kami menyediakan opsi KPR dengan simulasi pembayaran yang transparan dan DP mulai dari Rp6,8 juta.",
  },
  {
    question: "Bagaimana dengan akses jalan menuju cluster?",
    answer:
      "Cluster kami memiliki akses jalan lebar yang mudah dijangkau kendaraan, serta lingkungan yang nyaman untuk keluarga.",
  },
];

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(property);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Services Hero */}
      <Heading
        title="Properti"
        subtitle="Pilih tipe rumah yang sesuai dengan gaya hidup Anda. Mulai dari 36 m², dengan desain modern dan fungsional. Setiap rumah dirancang untuk memberikan kenyamanan maksimal bagi keluarga Anda."
      />

      {/* <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 ">
          <motion.div
            className="mx-auto md:mx-0 flex flex-col md:flex-row items-center justify-between"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="tracking-tight flex-col font-serif size-full md:size-96 flex justify-center mb-6"
              variants={itemVariants}
            >
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-serif"
                variants={itemVariants}
              >
                Site Plan
              </motion.h1>
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-serif"
                variants={itemVariants}
              >
                Blok A
              </motion.h1>
            </motion.div>

            <motion.div
              className="tracking-tight font-serif size-full md:size-96 items-center flex justify-center "
              variants={itemVariants}
            >
              <img
                src="/sitemap.png"
                alt="PT Nasaktian Solusi Bersama"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="all"
            onValueChange={setFilter}
            className="w-full md:w-auto mb-6"
          >
            <TabsList className="flex gap-2 h-auto p-0 bg-transparent w-max">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "px-4 py-2 data-[state=active]:shadow-none rounded-md border transition-all w-max",
                    "data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  )}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <motion.div
            className="flex w-full items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.length === 0 && (
              <span className="w-full font-serif flex items-center justify-center">
                Tipe sedang tidak tersedia
              </span>
            )}
          </motion.div>

          <motion.div
            className="flex w-full items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.length === 0 && (
              <span className="w-full font-serif flex items-center justify-center">
                Tipe sedang tidak tersedia
              </span>
            )}
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                className="group"
              >
                <Link href={`/property/${project.id}`}>
                  <Card className="p-0 overflow-hidden border-border hover:border-primary/20 transition-all duration-300 h-full shadow-none">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden h-64">
                        <Image
                          width={400}
                          height={400}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6">
                          <Badge className="mb-2 capitalize">
                            Tipe {project.category}
                          </Badge>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-white/70 hidden sm:block">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-muted-foreground">
              Punya pertanyaan tentang properti kami? Temukan jawaban untuk
              pertanyaan yang sering diajukan di bawah ini
            </p>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row max-w-4xl mx-auto">
            {faq.map((item) => (
              <div key={item.question} className="p-2 w-full md:w-1/2 h-fit">
                <Card className="gap-2 flex w-full shadow-none">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Masih memiliki pertanyaan? Hubungi tim dukungan kami.
            </p>
            <Button asChild>
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
