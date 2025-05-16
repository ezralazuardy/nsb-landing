"use client";

import { Asterisk, Home, Building } from "lucide-react";
import { BentoGrid, BentoGridItem } from "../bento";

export default function BenefitSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-col">
            <h2 className="text-5xl font-serif font-bold">Keuntungan</h2>
            <h2 className="text-5xl font-serif font-bold mb-4">
              Metro Cluster Tembalang
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            "Temukan rumah impian Anda di Metro Cluster Tembalang! Pilih dari
            berbagai tipe hunian modern dengan harga terjangkau dan lokasi
            strategis di jantung Semarang."
          </p>
        </div>

        <BentoGrid>
          {/* Secure Card - Larger */}
          <BentoGridItem
            title="Akses Jalan Luas dan Lebar"
            description="Jalan yang lebar dan lingkungan yang nyaman memberikan kemudahan mobilitas dan suasana hidup yang menyenangkan bagi seluruh keluarga."
            size="3x1"
            image="/illustration/akses-jalan.svg"
          />

          {/* Fast Card */}
          <BentoGridItem
            title="Mulai dari 250jt-an"
            description="Semua sudah termasuk dalam harga, tanpa biaya tersembunyi."
            size="1x1"
            image="/illustration/250-jt.svg"
            footer={
              <div className="flex items-center">
                <Asterisk className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Syarat dan ketentuan berlaku
                </span>
              </div>
            }
          />

          {/* Fun Card */}
          <BentoGridItem
            title="Cocok untuk Keluarga"
            image="/illustration/cocok-untuk-keluarga.svg"
            description="Hunian yang dirancang khusus untuk keluarga muda yang menginginkan ruang nyaman dan fungsional untuk tumbuh kembang keluarga."
            size="2x1"
            footer={
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Type 36/60 – Hunian ideal untuk keluarga muda
                </span>
              </div>
            }
          />
          <BentoGridItem
            title="Sertifikat SHM & IMB lengkap"
            image="/illustration/sertifikat.svg"
            description="Menjamin keamanan dan legalitas properti Anda tanpa keraguan, memberikan ketenangan pikiran dalam berinvestasi."
            size="1x1"
          />

          <BentoGridItem
            title="Dekat Fasilitas Umum"
            image="/illustration/dekat-fasum.svg"
            description="Lokasi strategis yang memudahkan akses kebutuhan sehari-hari dan aktivitas Anda, menjadikan hidup lebih praktis dan efisien."
            size="1x1"
            footer={
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Dekat kampus, rumah sakit, supermarket, dan pusat kota
                </span>
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
}
