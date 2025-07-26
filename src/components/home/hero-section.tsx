"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../../public/hero.png";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

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
    <section className="relative w-full">
      {/* {/* Background Image */}
      {/* <div className="absolute inset-0 -z-10 h-full w-full">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background",
            "transition-opacity duration-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
      </div>  */}

      {/* Hero Content */}
      <div className="container mx-auto px-8 pt-8 pb-4 md:pt-8 md:pb-4">
        <motion.div
          className="max-w-4xl mx-auto md:mx-0"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 font-serif"
            variants={itemVariants}
          >
            Solusi Audio Visual Terintegrasi untuk Bisnis Modern Anda
          </motion.h1>

          <motion.p
            className="text-xl text-secondary mb-8 max-w-xl"
            variants={itemVariants}
          >
            Kolaboratif, Adaptif, dan Efektif.
          </motion.p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 aspect-[16/6]">
        <Image
          className="w-full h-auto object-cover aspect-[16/6]"
          alt="Nasaktian Solusi Bersama"
          placeholder="blur"
          src={hero}
          width={1920}
          height={1080}
        />
      </div>

      {/* Stats Banner */}
      <div className="bg-primary py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-primary-foreground font-bold text-3xl md:text-4xl font-serif">
                100+
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Proyek Dikerjakan
              </p>
            </div>
            <div className="text-center">
              <p className="text-primary-foreground font-bold text-3xl md:text-4xl font-serif">
                50+
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Klien Terpercaya
              </p>
            </div>
            <div className="text-center">
              <p className="text-primary-foreground font-bold text-3xl md:text-4xl font-serif">
                ±5 Hari
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Estimasi Instalasi Cepat
              </p>
            </div>
            <div className="text-center">
              <p className="text-primary-foreground font-bold text-3xl md:text-4xl font-serif">
                Full Support
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Tim Profesional &amp; Responsif
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
