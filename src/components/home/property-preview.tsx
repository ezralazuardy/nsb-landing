"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { id: "all", label: "Semua Tipe" },
  { id: "21", label: "Tipe 21" },
  { id: "36", label: "Tipe 36" },
  { id: "45", label: "Tipe 45" },
  { id: "60", label: "Tipe 60" },
];

const projects = [
  {
    id: 1,
    title: "36/60",
    category: "36",
    image:
      "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A stunning modern villa with panoramic lake views and luxurious amenities.",
  },
];

export default function PropertyPreview() {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === filter),
      );
    }
  }, [filter]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <Badge variant="outline" className="mb-4">
              Produk
            </Badge>
            <h2 className="text-5xl font-bold mb-4 font-serif">Properti</h2>
            <p className="text-muted-foreground">
              Pilih tipe rumah yang sesuai dengan gaya hidup Anda. Mulai dari 36
              m², dengan desain modern dan fungsional. Setiap rumah dirancang
              untuk memberikan kenyamanan maksimal bagi keluarga Anda.
            </p>
          </div>
          <Tabs
            defaultValue="all"
            onValueChange={setFilter}
            className="w-full md:w-auto mt-6"
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
        </div>

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
              <Link href={`/portfolio/${project.id}`}>
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

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio" className="group">
              Lihat Semua Tipe
              <MoveRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
