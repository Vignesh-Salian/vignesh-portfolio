import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vignesh N Salian | AI Engineer & Full Stack Developer",
  description: "Explore the portfolio of Vignesh N Salian, an AI engineer and developer specializing in computer vision research, machine learning systems, and full-stack software solutions.",
  keywords: [
    "Vignesh N Salian",
    "Vignesh Salian",
    "AI Engineer",
    "Computer Vision Researcher",
    "ML Developer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "Python Developer",
    "AI Research Portfolio"
  ],
  authors: [{ name: "Vignesh N Salian" }],
  creator: "Vignesh N Salian",
  openGraph: {
    title: "Vignesh N Salian | AI Engineer & Full Stack Developer",
    description: "Premium personal portfolio website of Vignesh N Salian showcasing AI systems, computer vision research, and tech certifications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#050816] text-gray-100 font-sans antialiased overflow-x-hidden min-h-screen relative">
        {/* Background glow ambient elements */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-950/20 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-950/15 blur-[150px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
          <div className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-cyan-950/10 blur-[130px] animate-pulse-slow" style={{ animationDelay: '6s' }} />
        </div>
        
        {/* Main Content Wrapper */}
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>

        <Toaster richColors theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
