import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Experience() {
  const certifications = [
    'Okta Certified Professional',
    'AWS Solutions Architect Associate',
    'CompTIA Security+',
  ];

  return (
    <section className="py-12">
      <div className="h-px bg-border mb-12" />

      <h2 className="text-2xl font-bold mb-6 animate-fade-up">Experience</h2>

      <div className="animate-fade-up stagger-1 space-y-6">
        <p className="text-base leading-relaxed text-foreground/90 max-w-xl">
          Cloud Security Consultant with 4+ years designing Zero Trust architectures
          and securing enterprise environments. Previously worked with Bell, Element,
          and Mosaic on IAM frameworks and security automation.
        </p>

        {/* Certifications */}
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
            >
              {cert}
            </span>
          ))}
        </div>

        {/* Download CV */}
        <Link
          href="https://utfs.io/f/5mHFO6Bp0KeY7wP3Pir8juwnfIT4oFND31Z2SgkemC9Uvbxi"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
        >
          <Download className="h-4 w-4" />
          Download CV
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
