import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Heading from "@/components/title";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "With over 15 years in real estate technology, Alex founded XR Studio to revolutionize property marketing through immersive experiences.",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Sarah Chen",
    role: "Lead 3D Artist",
    bio: "Sarah brings architectural designs to life with her exceptional eye for detail and mastery of photorealistic rendering techniques.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Marcus Johnson",
    role: "VR Development Lead",
    bio: "Marcus combines technical expertise with creative vision to create seamless and intuitive virtual tour experiences.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Olivia Rodriguez",
    role: "Client Success Manager",
    bio: "Olivia ensures every client receives exceptional service and achieves their marketing goals through our virtual tour solutions.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "XR Studio was established with a mission to transform property marketing through immersive technology.",
  },
  {
    year: "2021",
    title: "First Major Client",
    description:
      "Partnered with a leading national real estate firm to create virtual tours for their luxury property portfolio.",
  },
  {
    year: "2022",
    title: "Expanded Services",
    description:
      "Added architectural visualization and interactive walkthroughs to our service offerings.",
  },
  {
    year: "2023",
    title: "Technology Innovation Award",
    description:
      "Recognized for innovation in real estate technology at the annual PropTech Summit.",
  },
  {
    year: "2024",
    title: "Growth & Expansion",
    description:
      "Expanded team and capabilities to serve clients nationwide with enhanced virtual reality experiences.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <Heading
        title="Tentang Kami"
        subtitle="Pilih tipe rumah yang sesuai dengan gaya hidup Anda. Mulai dari 36 m², dengan desain modern dan fungsional. Setiap rumah dirancang untuk memberikan kenyamanan maksimal bagi keluarga Anda."
      />

      {/* About Hero */}
      <section className="pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Cerita Kami
              </Badge>
              <h1 className="text-4xl font-bold mb-6 font-serif">
                Membantu Anda Meraih Rumah Idaman
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                PT Nasaktian Solusi Bersama adalah sebuah perumahan yang berlokasi
                di Kelurahan Rowosari, Kecamatan Tembalang, Kota Semarang.
                Proyek ini dikembangkan oleh PT. PGM Group
              </p>
              <Button asChild>
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/logo.png"
                alt="PT Nasaktian Solusi Bersama"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                We're on a mission to transform how properties are marketed and
                experienced through immersive technology. By creating virtual
                experiences that truly capture the essence and potential of
                spaces, we help our clients connect with buyers and renters in
                meaningful ways.
              </p>
              <p className="text-lg">
                Our goal is to make virtual property tours and visualizations
                not just a marketing tool, but an essential part of the real
                estate experience that benefits all stakeholders.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Innovation</h3>
                    <p className="text-muted-foreground">
                      We constantly push the boundaries of what's possible in
                      virtual property experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Quality</h3>
                    <p className="text-muted-foreground">
                      We deliver exceptional quality in every project, with
                      meticulous attention to detail.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Integrity</h3>
                    <p className="text-muted-foreground">
                      We build trust through transparent communication and
                      honest business practices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Client Success
                    </h3>
                    <p className="text-muted-foreground">
                      We measure our success by the results we create for our
                      clients.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tertarik untuk bekerja sama?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Apabila anda memiliki ide dan masukan untuk bekerja sama, kami akan
            senang berusaha mendengarkan anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
