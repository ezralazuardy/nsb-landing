import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PT Nasaktian Solusi Bersama",
    short_name: "PT NSB",
    description: "Solusi Audio Visual Terintegrasi untuk Bisnis Modern Anda.",
    start_url: "/",
    display: "standalone",
    background_color: "ffffff",
    theme_color: "ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
