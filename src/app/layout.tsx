import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TFUG Islamabad | AI Community & Learning Hub",
    template: "%s | TFUG Islamabad",
  },
  description: "Join TensorFlow User Group Islamabad for AI study jams, paper reading clubs, and hands-on workshops. A community-led hub for mastering Machine Learning and AI.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tfugislamabad.tech",
    siteName: "TFUG Islamabad",
  },
  twitter: {
    card: "summary_large_image",
    title: "TFUG Islamabad | AI Community & Learning Hub",
    description: "Join TensorFlow User Group Islamabad for AI study jams, paper reading clubs, and hands-on workshops.",
  },
  alternates: {
    canonical: "https://www.tfugislamabad.tech",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TensorFlow User Group Islamabad",
  url: "https://www.tfugislamabad.tech",
  sameAs: [
    "https://twitter.com/TFUGIslamabad",
    "https://www.linkedin.com/company/TFUGIsl",
    "https://www.facebook.com/groups/TFUGIslamabad",
    "https://www.instagram.com/TFUGIsl",
    "https://www.commudle.com/communities/TFUGIslamabad"
  ]
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="iGW1K-b0JRtMPILRJrvd03L3-wyMZZT5i-cE4btkhjw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (localTheme === 'dark' || (!localTheme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={cn(inter.className, "min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased")}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
