import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olive – The Safest Way to Shop for Groceries",
  description:
    "Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights.",
  keywords: "olive app, food scanner, healthy groceries, harmful ingredients, family diet",
  openGraph: {
    title: "Olive – The Safest Way to Shop for Groceries",
    description: "Instantly Eliminate Harmful Ingredients from Your Family's Diet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
