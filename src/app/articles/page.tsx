import { Metadata } from "next";
import { BlogsView } from "@/components/views/BlogsView";

export const metadata: Metadata = {
    title: "AI & ML Technical Articles",
    description: "Read technical deep-dives and beginner guides on Machine Learning, TensorFlow, JAX, and AI systems. Curated articles for the developer community.",
    alternates: {
        canonical: "https://www.tfugislamabad.tech/articles",
    },
    openGraph: {
        title: "AI & ML Technical Articles | TFUG Islamabad",
        description: "Read technical deep-dives and beginner guides on Machine Learning, TensorFlow, JAX, and AI systems.",
        url: "https://www.tfugislamabad.tech/articles",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI & ML Technical Articles | TFUG Islamabad",
        description: "Read technical deep-dives and beginner guides on Machine Learning, TensorFlow, JAX, and AI systems.",
    }
};

export default function ArticlesPage() {
    return <BlogsView />;
}
