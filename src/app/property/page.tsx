"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "@/components/title";

const faq = [
  {
    question: "Apa saja tipe rumah yang tersedia di Metro Cluster Tembalang?",
    answer:
      "Metro Cluster Tembalang menyediakan tipe rumah 36/60 yang dirancang khusus untuk keluarga muda.",
  },
  {
    question: "Apa keunggulan lokasi Metro Cluster Tembalang?",
    answer:
      "Lokasi strategis dekat kampus, rumah sakit, supermarket, dan pusat kota Semarang, membuat aktivitas sehari-hari lebih praktis.",
  },
  {
    question: "Apakah sertifikat dan izin bangunan sudah lengkap?",
    answer:
      "Ya, semua unit di Metro Cluster Tembalang memiliki sertifikat SHM dan IMB yang lengkap, menjamin keamanan investasi Anda.",
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-muted-foreground">
              Flexible options to suit properties of all sizes and budgets.
              Contact us for custom enterprise solutions.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`${
                  plan.highlighted
                    ? "border-primary shadow-lg shadow-primary/10 relative"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground ml-1">
                        per property
                      </span>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      plan.highlighted ? "" : "variant-outline"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div> */}
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

          <div className="flex flex-wrap max-w-4xl mx-auto">
            {faq.map((item) => (
              <div key={item.question} className="p-2 w-1/2 h-fit">
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
      </section>
    </div>
  );
}
