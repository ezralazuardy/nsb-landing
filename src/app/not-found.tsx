import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50svh] px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-0 text-8xl font-semibold tracking-tighter font-serif text-center text-primary">
        404
      </h1>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter font-serif text-center text-primary">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mb-4 text-center">
        Halaman yang anda tuju tidak ditemukan atau sudah dihapus.
      </p>
      <Link href="/" className="mb-4 text-center">
        <Button>Kembali ke Beranda</Button>
      </Link>
    </section>
  );
}
