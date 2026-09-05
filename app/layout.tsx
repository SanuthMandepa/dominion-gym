import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/data";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Gym & Fitness Centre in Sri Lanka`,
    template: `%s | ${site.name}`,
  },
  description:
    "Dominion Fitness is a modern gym and fitness centre in Sri Lanka. Strength training, muscle building, fat loss programs, personal coaching and a free BMI calculator. Rule your body. Start your transformation today.",
  keywords: [
    "gym Sri Lanka",
    "fitness centre",
    "Dominion Fitness",
    "personal training",
    "strength training",
    "weight loss gym",
    "BMI calculator",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Rule Your Body`,
    description:
      "Modern gym & fitness centre in Sri Lanka. Strength, discipline, transformation.",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Rule Your Body`,
    description: "Modern gym & fitness centre in Sri Lanka.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Gym",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressCountry: "LK",
  },
  sameAs: [site.facebook],
  foundingDate: site.founded,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} h-full antialiased`}>
      <body className="grain min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
