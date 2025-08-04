"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import hero from "../../../public/hero.png";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, playOnInit: true })]
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel slides
  const carouselSlides = [
    {
      image: hero,
      title: "Solusi Audio Visual Terintegrasi untuk Bisnis Modern Anda",
      description: "Masa Depan Komunikasi Visual Hadir di Ruang Anda."
    },
    {
      image: "/smart-meeting-room-1.jpeg",
      title: "Tingkatkan Produktivitas dengan Teknologi AV Terdepan",
      description: "Solusi Lengkap untuk Meeting Room, Conference, dan Control Room."
    },
    {
      image: "/smart-meeting-room-2.jpeg",
      title: "Instalasi Profesional dengan Tim Berpengalaman",
      description: "Kualitas Premium dengan Waktu Pengerjaan Optimal."
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    // Start autoplay
    const autoplay = emblaApi.plugins().autoplay;
    if (autoplay) autoplay.play();

    return () => {
      emblaApi.off("select", onSelect);
      // Stop autoplay on unmount
      if (autoplay) autoplay.stop();
    };
  }, [emblaApi]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative w-full">
      {/* Background Image - Commented out
      <div className="absolute inset-0 -z-10 h-full w-full">
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
      </div> */}

      {/* Hero Carousel */}
      <div className="relative overflow-hidden">
        <div className="w-full">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {carouselSlides.map((slide, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/9] md:aspect-[16/6]">
                    <Image
                      className="w-full h-full object-cover"
                      alt={`Hero slide ${index + 1}`}
                      src={slide.image}
                      width={1920}
                      height={1080}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <motion.div
                    className="absolute inset-0 flex items-end justify-center md:justify-start pb-16 md:pb-24"
                    initial="hidden"
                    animate={isLoaded && currentSlide === index ? "visible" : "hidden"}
                    variants={containerVariants}
                  >
                    <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center md:text-left">
                      <motion.h1
                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-3 font-serif text-white"
                        variants={itemVariants}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="text-lg md:text-xl text-white/90 mb-2 md:max-w-xl"
                        variants={itemVariants}
                      >
                        {slide.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 z-10">
            <div className="flex gap-2">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentSlide === index
                      ? "bg-primary scale-110"
                      : "bg-white/40 hover:bg-primary/60"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/70 hover:bg-primary/90 text-primary-foreground rounded-full p-2 transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/70 hover:bg-primary/90 text-primary-foreground rounded-full p-2 transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-primary py-4 md:py-6 w-full">
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
