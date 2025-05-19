"use client";

import { propertyData } from "../property-data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function PropertyDetails({ params }: any) {
  // @ts-ignore
  const { id } = React.use(params);

  const filteredPropertyDetails = propertyData.filter(
    (property) => property.id === id,
  );

  const data = filteredPropertyDetails[0];

  return (
    <section className="container py-10">
      <div className="flex justify-between items-center mb-8 hover:underline">
        <Link
          href="/property"
          className="transition-all ease-in-out duration-150 flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 text-sm"
        >
          <ArrowLeft className="size-4" />
          Kembali ke Properti
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-2 mb-8">
        <div>
          {data.images.map((item) => (
            <img
              key={item}
              src={item}
              alt="Property Image"
              className="w-full h-auto rounded-lg mb-4"
              loading="lazy"
            />
          ))}
        </div>

        <div className="flex md:ml-6 ml-0 flex-col gap-4 h-full sticky top-30 pt-10">
          <h1 className="title font-semibold text-6xl tracking-tighter font-serif">
            {data.name}
          </h1>

          <article className="prose">{data.description}</article>

          <ul className="list-none pl-0">
            <li>✅ Type 36/60 – Cocok untuk keluarga muda</li>
            <li>✅ Harga hanya 250 Juta – All in!</li>
            <li>✅ Dekat kampus, rumah sakit, Supermarket dan pusat kota</li>
            <li>✅ Sertifikat SHM & IMB lengkap</li>
            <li>✅ Akses jalan lebar dan Hunian Nyaman</li>
          </ul>

          <div className="flex gap-1 items-center">
            <span className="text-neutral-500 dark:text-neutral-400">
              Mulai dari
            </span>

            <h1 className="title font-semibold text-4xl tracking-tighter font-serif">
              {data.price}
            </h1>
          </div>

          <Button asChild className="w-max" variant="outline">
            <Link href="/contact">Minta Penawaran!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
