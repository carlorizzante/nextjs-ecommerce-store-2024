import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const fontUrbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Times New Roman"]
});

export const metadata: Metadata = {
  title: "Ecommerce Store",
  description: "Store with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontUrbanist.variable} antialiased`}>
        <Navbar />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
