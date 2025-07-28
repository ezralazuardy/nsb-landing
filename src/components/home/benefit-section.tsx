"use client";

import { Asterisk, Hammer, Sparkles, Tag } from "lucide-react";
import { BentoGrid, BentoGridItem } from "../bento";

export default function BenefitSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-col">
            <h2 className="text-5xl font-serif font-bold">Kelebihan</h2>
            <h2 className="text-5xl font-serif font-bold mb-4">
              Nasaktian Solusi Bersama
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Hadirkan audio visual memukau untuk bisnis Anda. Dengan teknologi
            terkini, kami bantu Anda tampil modern, efisien, dan siap bersaing
            di era digital.
          </p>
        </div>

        <BentoGrid>
          <BentoGridItem
            title="Teknologi Modern & Canggih"
            description="Semua perangkat menggunakan teknologi terbaru untuk menghasilkan tampilan visual dan audio yang jernih, stabil, dan tahan lama."
            size="3x1"
            image="/illustration/1.svg"
            imageClassName="mb-10"
            footer={
              <div className="flex items-center">
                <Asterisk className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Dengan tenaga profesional berpengalaman dibidangnya
                </span>
              </div>
            }
          />

          <BentoGridItem
            title="Bebas Ribet"
            description="Instalasi cepat dengan sistem plug & play."
            size="1x1"
            image="/illustration/2.svg"
            imageClassName="mt-7 mb-3"
            footer={
              <div className="flex items-center">
                <Hammer className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Tanpa kesulitan teknis
                </span>
              </div>
            }
          />

          <BentoGridItem
            title="Desain Elegan & Profesional"
            description="Tampil lebih modern dan terpercaya di mata klien dan audiens, cocok untuk kantor, showroom, atau lainnya."
            size="2x1"
            image="/illustration/3.svg"
            imageClassName="mt-4"
            footer={
              <div className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Visual premium untuk ruang yang berkelas
                </span>
              </div>
            }
          />

          <BentoGridItem
            title="Garansi Resmi"
            description="Dilengkapi garansi dan layanan purna jual produk."
            size="1x1"
            image="/illustration/4.svg"
            imageClassName="mb-5"
            footer={
              <div className="flex items-center">
                <Asterisk className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Syarat dan ketentuan berlaku
                </span>
              </div>
            }
          />

          <BentoGridItem
            title="Harga Kompetitif"
            description="Solusi hemat biaya tanpa mengorbankan kualitas."
            size="1x1"
            image="/illustration/5.svg"
            imageClassName="mb-5"
            footer={
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Investasi cerdas, hemat biaya
                </span>
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
}
