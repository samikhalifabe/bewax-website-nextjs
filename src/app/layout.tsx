import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bewax - Nettoyage et entretien de terrasses en bois",
  description: "Nettoyage et l'entretien de terrasses bois brabant wallon, Wax est la solution pour valoriser votre terrasse en bois. Dégriser, démousser votre terrasse bois, protéger le bois, traiter naturellement avec des produits écologiques grâce à Wax.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
