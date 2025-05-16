"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, MonitorSmartphone } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Properti", path: "/property" },
  { name: "Berita", path: "/news" },
  { name: "Tentang", path: "/about" },
  { name: "Kontak", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          >
            <span className="text-xl font-bold text-[#1B5587]">
              <Image src="/logo.svg" alt="Logo" width={150} height={50} />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.path
                    ? "text-primary font-bold"
                    : "text-muted-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <ModeToggle /> */}
            <Button asChild>
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  href={link.path}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors",
                    pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                <Separator className="my-1" />
              </div>
            ))}
            <Button className="mt-2 w-full" asChild>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Book a Demo
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
