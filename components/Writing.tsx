import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ArticleItemProps {
  title: string;
  date: string;
  href: string;
}

function ArticleItem({ title, date, href }: ArticleItemProps) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 rounded-xl border border-border p-4 transition-colors hover:border-foreground/20"
    >
      <div className="min-w-0">
        <h3 className="font-medium text-foreground group-hover:underline">{title}</h3>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:text-foreground group-hover:translate-x-0.5" />
    </Link>
  );
}

export default function Writing() {
  return (
    <section className="py-6">
      <div className="h-px bg-border mb-6" />

      <h2 className="text-2xl font-bold mb-6 animate-fade-up">Writing</h2>

      <div className="space-y-3 animate-fade-up stagger-1">
        <ArticleItem
          title="How I'm studying for my CISSP"
          date="January 2026"
          href="/writing/cissp"
        />
      </div>
    </section>
  );
}
