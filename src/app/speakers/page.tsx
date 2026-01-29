import { Metadata } from "next";
import { SpeakersView } from "@/components/views/SpeakersView";
import { gdes, googleSpeakers, industryExperts } from "@/data/speakers";

export const metadata: Metadata = {
    title: "Community Speakers & Experts",
    description: "Meet the experts, GDEs, and industry professionals sharing their knowledge with TFUG Islamabad. Contributors from Google, industry leaders, and research.",
    alternates: {
        canonical: "https://www.tfugislamabad.tech/speakers",
    },
    openGraph: {
        title: "Community Speakers & Experts | TFUG Islamabad",
        description: "Meet the experts, GDEs, and industry professionals sharing their knowledge with TFUG Islamabad.",
        url: "https://www.tfugislamabad.tech/speakers",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Community Speakers & Experts | TFUG Islamabad",
        description: "Meet the experts, GDEs, and industry professionals sharing their knowledge with TFUG Islamabad.",
    }
};

export default function SpeakersPage() {
    // Combine all speakers for Person schema
    const allSpeakers = [...gdes, ...googleSpeakers, ...industryExperts];

    const personSchema = allSpeakers.map((speaker) => ({
        "@type": "Person",
        name: speaker.name,
        jobTitle: speaker.role,
        worksFor: speaker.company ? {
            "@type": "Organization",
            name: speaker.company
        } : undefined,
        sameAs: [
            speaker.socials?.linkedin,
            speaker.socials?.twitter,
            speaker.socials?.website
        ].filter(Boolean)
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": personSchema
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SpeakersView />
        </>
    );
}
