import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "José - Programador fullstack",
  description:
    "Olá, eu sou o José, fique a vontade para conhecer mais sobre mim e meu trabalho.",
  keywords: [
    "José",
    "programador",
    "fullstack",
    "front-end",
    "back-end",
    "Desenvolvimento web e mobile",
    "Criação de interfaces interativas",
    "Animações avançadas",
    "Design responsivo",
    "Otimização de performance",
    "Modelagem 3D",
    "Edição de vídeos",
    "Criação de logotipos",
    "Identidade visual",
    "Prototipagem",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Firebase",
    "GSAP",
    "Framer Motion",
    "Three.js",
    "Blender",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "NodeJS",
    "JAVA",
    "C#",
    "NoSql",
    "SQL",
  ],
  icons: "/logo.png",
  openGraph: {
    images: ["https://i.ibb.co/JFnRqkzr/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
