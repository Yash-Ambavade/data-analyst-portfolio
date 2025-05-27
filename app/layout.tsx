// app/layout.tsx
import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yash Ambavade – Data Analyst Portfolio',
  description: 'Portfolio showcasing projects in automation, data pipelines, and dashboards.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-primary">
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="border-b border-gray-200 py-4 px-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">Yash Ambavade</span>
        <nav className="space-x-6 text-sm text-gray-600">
          <a href="/" className="hover:underline">Home</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/pam" className="hover:underline">PAM</a>
          <a href="/gift-card" className="hover:underline">Gift Card</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 mt-10 px-6 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Yash Ambavade. All rights reserved.</p>
    </footer>
  );
}
