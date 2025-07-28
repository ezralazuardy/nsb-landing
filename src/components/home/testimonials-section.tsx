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
    name: "Aditya Nugroho",
    role: "IT Manager",
    company: "PT Maju Teknologi Bersama",
    content:
      "Implementasi ruang rapat pintar dari tim ini sangat membantu meningkatkan kolaborasi tim kami. Integrasinya rapi dan mudah digunakan.",
    avatar: "AN",
    rating: 5,
  },
  {
    id: 2,
    name: "Lia Hartati",
    role: "Marketing Manager",
    company: "Grand Galaxy Mall",
    content:
      "Digital signage dan video wall yang mereka pasang berhasil menarik perhatian pengunjung dan meningkatkan engagement kami secara signifikan.",
    avatar: "LH",
    rating: 5,
  },
  {
    id: 3,
    name: "Rizky Pratama",
    role: "General Manager",
    company: "Hotel Nirwana",
    content:
      "Desain akustik interior mereka membuat suasana hotel kami menjadi jauh lebih tenang dan nyaman, sangat mempengaruhi kenyamanan tamu.",
    avatar: "RP",
    rating: 5,
  },
  {
    id: 4,
    name: "Maya Kusuma",
    role: "HR & GA",
    company: "CV Prima Logistik",
    content:
      "Sistem kontrol akses dan CCTV dengan analitik cerdas membuat kantor kami jauh lebih aman dan mudah dikelola.",
    avatar: "MK",
    rating: 5,
  },
  {
    id: 5,
    name: "Dewi Anindita",
    role: "Founder",
    company: "Startup Xpress",
    content:
      "Kami dibantu dalam pengembangan software kustom yang benar-benar sesuai dengan alur kerja tim kami. Sangat responsif dan profesional!",
    avatar: "DA",
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
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-serif">
            Kata Customer Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bukti nyata PT Nasaktian Solusi Bersama lebih dari sekadar hunian, ini
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
              <Card className="border-none shadow-none bg-muted/20">
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
