import { Metadata } from "next";
import { SessionsView } from "@/components/views/SessionsView";
import { sessions } from "@/data/sessions";

export const metadata: Metadata = {
    title: "AI Sessions & Study Jams",
    description: "Explore our archive of AI Study Jams, Paper Reading Clubs, and Build with AI workshops. Practical, hands-on learning sessions for the TFUG Islamabad community.",
    alternates: {
        canonical: "https://www.tfugislamabad.tech/sessions",
    },
    openGraph: {
        title: "AI Sessions & Study Jams | TFUG Islamabad",
        description: "Explore our archive of AI Study Jams, Paper Reading Clubs, and Build with AI workshops.",
        url: "https://www.tfugislamabad.tech/sessions",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Sessions & Study Jams | TFUG Islamabad",
        description: "Explore our archive of AI Study Jams, Paper Reading Clubs, and Build with AI workshops.",
    }
};

export default function SessionsPage() {
    const eventSchema = sessions.map((session) => ({
        "@type": "Event",
        name: session.title,
        description: session.description,
        startDate: session.date,
        // Assuming past events are still valid to list, or we could filter. 
        // Google recommendation for past events is to mark them as such or just list them.
        // Since we are showing recordings, maybe VideoObject schema is better? 
        // But user requested "Event Schema (Sessions & Workshops)".
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        location: {
            "@type": "VirtualLocation",
            url: session.youtubeUrl
        },
        organizer: {
            "@type": "Organization",
            name: "TensorFlow User Group Islamabad",
            url: "https://www.tfugislamabad.tech"
        }
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": eventSchema
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SessionsView />
        </>
    );
}
