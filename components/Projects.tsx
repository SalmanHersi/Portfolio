import React from 'react';
// import { Button } from './ui/button';
// import { ExternalLink, Sparkles } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="py-10 md:py-14">
      <div className="mb-12 flex items-center gap-4">
        <span
          className="text-xs font-medium tracking-[0.3em] uppercase text-foreground"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Writing
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* DonorClaim - commented out for now */}
      {/*
      <div className="group relative w-full rounded-2xl border border-border bg-card p-5 md:p-6 transition-all hover:border-foreground/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">DonorClaim</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/70">
                <Sparkles className="h-3 w-3" />
                AI-Powered
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Donation Management Platform for Canadian Charities
            </p>
          </div>
          <Link href="https://www.donorclaim.com/" target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-full hover:bg-foreground hover:text-background transition-all"
            >
              Live Demo
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
        <div className="my-4 h-px bg-border" />
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          A full-stack AI-powered SaaS platform that automates donation tracking
          and CRA-compliant tax receipt generation for Canadian nonprofits. Uses
          AI to intelligently parse e-transfer notifications and match donations
          to donor profiles.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {['Next.js', 'TypeScript', 'OpenAI', 'Stripe API', 'PostgreSQL', 'Tailwind CSS', 'Vercel'].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          {[
            'AI-powered parsing of bank e-transfer notifications for automatic data extraction',
            'Self-service donor portal for instant receipt claims',
            'Real-time analytics dashboard with CSV exports',
            'Automated email delivery for Stripe donations',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/30" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      */}

      {/* CISSP Article */}
      <Link
        href="#"
        className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 md:p-6 w-full transition-all hover:border-foreground/20"
      >
        <div>
          <p className="text-sm text-muted-foreground mb-1" style={{ fontFamily: 'var(--font-mono)' }}>Article</p>
          <h3 className="text-lg font-semibold group-hover:underline">How I&apos;m studying for my CISSP</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </section>
  );
}
