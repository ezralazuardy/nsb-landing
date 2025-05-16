import { BlogPosts } from "@/components/posts";
import Heading from "@/components/title";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
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
