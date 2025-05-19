import { BlogPosts } from "@/components/posts";
import Heading from "@/components/title";
import { motion } from "framer-motion";

export default function Page() {
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

  return (
    <div>
      <Heading
        title="Berita"
        subtitle="Pantau secara langsung kemajuan pembangunan Metro Cluster Tembalang. Kami rutin membagikan update terbaru mengenai progres konstruksi, penyelesaian fasilitas, dan berbagai milestone penting lainnya."
      />

      <section className="container">
        <BlogPosts />
      </section>
    </div>
  );
}
