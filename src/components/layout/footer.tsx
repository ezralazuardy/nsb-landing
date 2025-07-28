import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ReactNode } from "react";

interface FooterLinksType {
  title: string;
  links: {
    name: string | ReactNode;
    href: string;
    external?: boolean;
  }[];
}

const footerLinks: FooterLinksType[] = [
  {
    title: "Link Cepat",
    links: [
      { name: "Layanan", href: "/services" },
      {
        name: "Tentang Kami",
        href: "/about",
      },
      {
        name: "Kontak",
        href: "/contact",
      },
    ],
  },
  {
    title: "Hukum",
    links: [
      { name: "Kebijakan Privasi", href: "/privacy" },
      { name: "Syarat dan Ketentuan", href: "/terms" },
    ],
  },
  {
    title: "Kontak",
    links: [
      {
        name: (
          <div className="flex flex-col">
            <span className="font-semibold">Nomor Bisnis</span>
            <span>+62 8111 587 679</span>
          </div>
        ),
        href: "https://wa.me/628111587679",
        external: true,
      },
      {
        name: (
          <div className="flex flex-col">
            <span className="font-semibold">Email Bisnis</span>
            <span>
              <>contact@nasaktiansolusibersama.co.id</>
            </span>
          </div>
        ),
        href: "mailto:contact@nasaktiansolusibersama.co.id",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8 !font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 transition-opacity hover:opacity-80"
            >
              <span className="text-xl font-bold text-[#1B5587]">
                <Image
                  src="/logo-horizontal.png"
                  alt="Nasaktian Solusi Bersama"
                  className="max-h-14 w-auto"
                  width={800}
                  height={160}
                />
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Solusi Audio Visual Terintegrasi untuk Bisnis Modern Anda.
            </p>
            <div className="pt-2">
              <Button asChild>
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-sm font-semibold">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      target={link.external ? "_blank" : "_self"}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <Separator className="my-8" /> */}

        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0 mt-8">
          <p className="text-sm text-muted-foreground text-center mx-auto">
            © {new Date().getFullYear()} PT Nasaktian Solusi Bersama. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
