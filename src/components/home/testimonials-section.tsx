"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pembeli Rumah",
    company: "Metro Cluster Tembalang",
    content:
      "Saya sangat puas dengan Metro Cluster Tembalang. Lokasinya strategis, harga terjangkau, dan proses pembelian sangat mudah. Lingkungannya juga nyaman dan aman untuk keluarga saya.",
    avatar: "BS",
    rating: 5,
  },
  {
    id: 2,
    name: "Sari Wulandari",
    role: "Penghuni",
    company: "Metro Cluster Tembalang",
    content:
      "Hunian yang tepat untuk keluarga muda seperti kami. Fasilitas lengkap dan akses ke berbagai tempat penting sangat memudahkan aktivitas sehari-hari.",
    avatar: "SW",
    rating: 5,
  },
  {
    id: 3,
    name: "Andi Prasetyo",
    role: "Pembeli",
    company: "Metro Cluster Tembalang",
    content:
      "Pelayanan dari tim Metro Cluster sangat profesional dan responsif. Saya merasa sangat terbantu dalam proses KPR dan pembelian rumah.",
    avatar: "AP",
    rating: 5,
  },
  {
    id: 4,
    name: "Rina Dewi",
    role: "Penghuni",
    company: "Metro Cluster Tembalang",
    content:
      "Lingkungan yang asri dan aman membuat kami betah tinggal di sini. Anak-anak bisa bermain dengan nyaman dan kami merasa tenang.",
    avatar: "RD",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 8000);

    return () => clearTimeout(timer);
  }, [current]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-serif">
            Kata Penghuni Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bukti nyata Metro Cluster Tembalang lebih dari sekadar hunian, ini
            adalah sebuah keluarga besar yang saling mendukung dan tumbuh
            bersama.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-10 -top-10 text-primary opacity-20">
            <Quote className="h-20 w-20" />
          </div>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="border-none shadow-none bg-card">
                <CardContent className="pt-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-5 h-5 mr-1",
                            i < testimonials[current].rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-muted-foreground",
                          )}
                        />
                      ))}
                    </div>

                    <p className="text-lg mb-6 italic">
                      "{testimonials[current].content}"
                    </p>

                    <div className="flex items-center justify-center mb-2">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-medium mr-4">
                        {testimonials[current].avatar}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">
                          {testimonials[current].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[current].role},{" "}
                          {testimonials[current].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    current === index
                      ? "bg-primary w-6"
                      : "bg-primary/20 hover:bg-primary/40",
                  )}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
