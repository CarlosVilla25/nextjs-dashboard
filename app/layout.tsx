import '@/app/ui/global.css'
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>NextJs</title>
      </head>
      {/* Agregar la fuente al body y antialiased suaviza la fuente */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
