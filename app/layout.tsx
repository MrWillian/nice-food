/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <nav className="text-center font-medium text-white grid grid-cols-2 p-2">
            <Link href="/">Home</Link>
            <Link href="/recipes">Receitas</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
