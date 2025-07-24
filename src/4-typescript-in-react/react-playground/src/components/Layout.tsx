import React from "react";

interface LayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Layout({ title, subtitle, children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <header className="mb-10">
          <h1 className="brand-heading">{title}</h1>
          {subtitle && <p className="brand-subheading mt-2">{subtitle}</p>}
        </header>

        <section className="min-h-[calc(100vh-20rem)]">{children}</section>

        <footer className="mt-20 text-sm text-neutral-500 dark:text-neutral-400 text-center">
          Built with ❤️ for learning and experimenting with TypeScript & React by <a className="font-semibold text-white" href="https://github.com/pranav89624" target="_blank" >Pranav Verma</a>.
        </footer>
      </div>
    </main>
  );
}
