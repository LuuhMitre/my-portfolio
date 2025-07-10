import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import 'bulma/css/bulma.css';
import '../styles/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-space-grotesk',
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: "Portfólio Luana Mitre",
  description: "Portfólio de desenvolvimento de Luana Mitre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
