// app/layout.js
import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Content by Kevin | Clarity in Code",
  description: "Next-gen web + social + app development by Kevin Mortimer",
  icons: { icon: "/favicon.ico" },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        {/* 1. Full-screen static background image (z-0) */}
        <video
          className="absolute top-12 sm:inset-0 left-0 right-0 bottom-0 w-full h-[calc(100vh-3rem)] sm:h-full z-0 object-cover"
          src="/assets/hero-supercompressed.mp4"
          autoPlay
          noControls
          loop
          muted
          playsInline
          webkit-playsInline="true"
          preload="auto"
        />

        {/* 2. Overlay (z-10) for better contrast */}
        <div className="fixed inset-0 z-10 bg-black/50" />

        {/* 3. Site‐wide Header (z-20) */}
        <Header />

        {/* 4. Main page content (z-20), pushed below header (pt-16) */}
        <main className="relative z-20 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}